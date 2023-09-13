<template>
	<!-- 答题页 -->
	<view class="quiz">
		<!-- 顶部 -->
		<ClassHeader searchText="" text="答题测验"></ClassHeader>
		<!-- 进度条 -->
		<view class="">
			<slider class="slider" @change="" min="0" max="5" step="1" :value="svalue" color="#b3b3b3" block-size="14"
				active-color="#90c9b4" block-color="#f5f5f5" />
			<!-- <uv-line-progress  :percentage="30" activeColor="#ff0000"></uv-line-progress> -->
		</view>
		<!-- 答题卡 -->
		<swiper previous-margin="50rpx" next-margin="50rpx">
			<swiper-item v-for="i in 3">
				<view class="card">
					<view class="box">
						<text class="question">Question1</text>
						<text class="problem">{{problem[0].problem}}</text>
						<text class="answer" @click="check('a')">A：{{problem[0].a}}</text>
						<text class="answer" @click="check('b')">B：{{problem[0].b}}</text>
						<text class="answer" @click="check('c')">C：{{problem[0].c}}</text>
					</view>
				</view>
			</swiper-item>

		</swiper>

		<!-- 继续答题 -->
		<text>继续答题</text>
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
	const svalue = ref(0)
	const problem = ref([{
		problem: '一二三四无六其把就是一二三四无六其把就是',
		a: '正确答案',
		b: '错误答案',
		c: '错误',
		right: 'a'
	}])
	const user = ref(getApp().globalData.userDetail)
	// console.log(getApp().globalData.userDetail)
	// console.log(user.value.userId)

	let check = (item) => {
		console.log()
		if (item == problem.value[0].right) {
			// request({
			// 	url: '/Smart/User/updateUser',
			// 	method:'POST',
			// 	data:{user,userPoints:user.value.userPoints+2}
			// }).then(res=>{
			// 	console.log(res)
			// })
		}
		svalue.value += 1
		if (svalue.value > 5) {
			svalue.value = 0
		}

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
		background-color: #90c9b4;
		font-size: 22px;
		color: #4a4a4a;
	}

	.card .box .answer {
		width: 520rpx;
		background-color: #90c9b4;
		font-size: 18px;
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
</style>