<template>
	<!-- ai对战页 -->
	<view class="quiz">
		<!-- 顶部 -->
		<ClassHeader searchText="" text="问答测验"></ClassHeader>
		<view class="AIPK">AI人机pk</view>
		<!-- 进度条 -->
		<view class="">
			<slider id="ai" class="slider" @change="" min="0" max="4" step="1" :value="aipage" color="#b3b3b3"
				block-size="14" active-color="#e36729" block-color="#f5f5f5" />
			<slider id="user" class="slider" @change="" min="0" max="4" step="1" :value="page" color="#b3b3b3"
				block-size="14" active-color="#90c9b4" block-color="#f5f5f5" />
		</view>
		<!-- 答题卡 -->
		<swiper previous-margin="50rpx" next-margin="50rpx" :current="page">
			<swiper-item v-for="i in 5">
				<view class="card">
					<view class="box">
						<text class="question">{{question[i-1]}}</text>
						<text class="problem">{{problem[i-1]}}</text>
						<text class="answer" @click="check('A')">A：{{answerA[i-1]}}</text>
						<text class="answer" @click="check('B')">B：{{answerB[i-1]}}</text>
						<text class="answer" @click="check('C')">C：{{answerC[i-1]}}</text>
						<text class="answer" @click="check('D')">D：{{answerD[i-1]}}</text>
					</view>
				</view>
			</swiper-item>

		</swiper>

		<!-- 继续答题 -->
		<text @click="to">{{button}}</text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import ClassHeader from '../class/component/header.vue'
	import request from "../../api/request.js"
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		Button
	} from '@dcloudio/uni-h5';
	const svalue = ref(0)
	const page = ref(0)
	const problem = ref([])
	const answerA = ref([])
	const button = ref("继续答题")
	const answerB = ref([])
	const answerC = ref([])
	const answerD = ref([])
	const question = ref(["Question1", "Question2", "Question3", "Question4", "Question5"])
	const answer = ref([])
	const user = ref(getApp().globalData.userDetail)
	const point = ref(0)
	const aipage = ref(0)
	console.log(user.value)

	const aitime = setInterval(() => {
		if (aipage.value < 4) {
			aipage.value += 1
		} else if (aipage.value > page.value) {
			clearInterval(aitime)
			uni.showToast({
				title: "AI机器人获胜！",
				icon: 'error',
				duration: 1200
			})
		}
	}, 3000)

	//验证答案方法
	let check = (item) => {
		console.log(page.value)
		// console.log(answer.value[page.value])
		// console.log(svalue.value)
		if (item == answer.value[point.value]) {
			uni.showToast({
				title: "回答正确"
			})
			if (svalue.value < 4) {
				point.value += 1
				svalue.value += 1
				page.value += 1
			} else {
				button.value = "结束答题"
				console.log("结束答题")
				svalue.value += 1
				point.value += 1
				// 判断获胜
				if (page.value > aipage.value) {
					setTimeout(() => {
						uni.showToast({
							title: "恭喜你获胜！",
							icon: 'success',
							duration: 1200
						})
					}, 300)
				}
			}
		} else {
			if (page.value < 4) {
				// point.value += 1
				page.value += 1
				svalue.value += 1
			} else {
				button.value = "结束答题"
				if (page.value > aipage.value) {
					setTimeout(() => {
						uni.showToast({
							title: "恭喜你获胜！",
							icon: 'success',
							duration: 1200
						})
					}, 300)
				}
			}
			uni.showToast({
				title: "回答错误"
			})

		}

	}

	//获取答题数据
	let getQuestion = () => {
		console.log("开始调用答题接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://8.130.21.88:9999/Smart/Answer/selectAllByTab',
				data: {
					tab: '人工智能发展史',
					start: 0,
					limit: 5
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("获取问题成功")
						console.log(res.data)
						resolve(res.data.data)
						for (let i = 0; i < res.data.data.length; i++) {
							problem.value.push(res.data.data[i].question)
							answerA.value.push(res.data.data[i].answerA)
							answerB.value.push(res.data.data[i].answerB)
							answerC.value.push(res.data.data[i].answerC)
							answerD.value.push(res.data.data[i].answerD)
							answer.value.push(res.data.data[i].answerRight)
						}
						console.log(problem.value)
					} else {
						console.log("获取问题失败")
					}
				}
			})
		})
	}

	//页面加载方法
	onLoad(() => {
		getQuestion().then(res => {
			console.log("问题调用完成")
		})
	})

	let to = () => {
		if (button.value == "继续答题") {
			console.log("继续答题")
			page.value += 1

		} else {
			console.log("答题结束")
			//路由跳转  并调用封装的addPoint方法
			addPoint()
			uni.showToast({
				title: '本轮获取' + point.value + '积分'
			})
		}
	}


	let addPoint = () => {
		const userId = getApp().globalData.userDetail.userId //获取用户id
		console.log(userId)
		console.log("调用加分接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: "http://8.130.21.88:9999/Smart/Answer/updateUserPointsAdd",
				data: {
					userId: userId,
					points: point.value
				},
				method: 'Post',
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					console.log(res)
					if (res.data.code == 0) {
						console.log("加分成功，跳转路由")
						uni.navigateTo({
							url: "test",
						});
					}
				}
			})
		})
	}
</script>

<style>
	::v-deep .topBottom {
		display: none;
	}

	::v-deep .title {
		margin-top: 40rpx;
	}

	.quiz {
		margin-top: 50rpx;
	}

	/* 滑块 */
	/* 修改滑块图案为头像 */
	#ai :deep(.uni-slider-handle) {
		background-image: url('@/static/image/robot.png');
		background-size: 100% 100%;
	}

	#user :deep(.uni-slider-handle) {
		background-size: 100% 100%;
	}

	.slider {
		width: 600rpx;
		margin: 50rpx auto;
		margin-top: 70rpx;
	}

	.slider :deep(.uni-slider-handle-wrapper) {
		height: 10rpx;
	}

	/* 答题卡开始 */
	swiper {
		height: 700rpx;
	}

	.card {
		position: relative;
		width: 600rpx;
		height: 600rpx;
		margin: 40rpx auto;
		margin-top: 70rpx;
		border: 10rpx solid #4a4a4a;
		border-radius: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card .box {
		width: 570rpx;
		height: 390rpx;
		border: 5rpx solid #4a4a4a;
		border-radius: 4rpx;
		padding: 90rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.card .question {
		position: absolute;
		top: -80rpx;
		left: -10rpx;
		color: #90c9b4;
		font-size: 36px;
		font-weight: 600;
	}

	.card .box text {
		display: block;
	}

	.card .box .problem {
		width: 520rpx;
		/* background-color: #90c9b4; */
		font-size: 20px;
		color: #4a4a4a;
	}

	.card .box .answer {
		width: 520rpx;
		/* background-color: #90c9b4; */
		font-size: 16px;
		color: #4a4a4a;
	}

	/* 答题卡结束 */
	/* 答题按钮 */
	.quiz>text {
		display: block;
		background-color: #90c9b4;
		color: #ffffff;
		text-shadow: 2rpx 2rpx 2rpx #699383;
		width: 200rpx;
		height: 70rpx;
		margin: 60rpx auto;
		line-height: 70rpx;
		text-align: center;
		border-radius: 10rpx;
		font-size: 18px;
	}
	.AIPK{
		font-size: 24px;
		color: #90c9b4;
		margin-left: 20px;
	}
</style>