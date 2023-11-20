<template>
	<view class="group">
		<!-- 特别发现 -->
		<titleItem :title="groupTitle[0]"></titleItem>
		<view class="recommend">
			<view class="title">
				<text>推荐圈子</text>
				<image src="@/static/image/icon/hot.svg" alt="" />
			</view>
			<view class="content">
				<image :src="'../../static/image/group'+topTalk.id+'.png'" @click="goFound" alt="" />
				<view class="text" @click="goFound">
					<text class="name">{{topTalk.qzName}}</text>
					<!-- <text class="name">AI智能</text> -->
					<text class="info">领略人工智能的奥秘！</text>
					<!-- <view class="num">
						<image src="@/static/image/icon/group_fill.svg" alt="" />
						<text>1234</text>
					</view> -->
				</view>
				<view class="join" @click="join">
					{{isJoin[topTalk.id-1]}}
				</view>
			</view>
		</view>
		<!-- 我的圈子 -->
		<titleItem :title="groupTitle[1]"></titleItem>
		<view class="my">
			<view class="item" :class="index==1?'mid':''" v-for="(item,index) in my" @click="talk(item.qzid)">
				<image :src="item.img" mode=""></image>
				<text class="name">{{item.title}}</text>
				<text class="bottom">{{item.name}}</text>
			</view>

		</view>
		<!-- 互动话题 -->
		<titleItem :title="groupTitle[2]"></titleItem>
		<view class="talk">
			<view class="item" v-for="info in talkList">
				<text class="title"># {{info.topicTitle}}</text>
				<view class="content">
					<image src="../../../static/image/icon/talk2.svg" alt="" />
					<view class="">
						<text class="text">“{{info.topicIntroduce}}”</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onShow
	} from "@dcloudio/uni-app";
	import {
		ref
	} from "vue";
	import request from "../../../api/request";
	import titleItem from "./title.vue"

	const userId = getApp().globalData.userDetail.userId
	const groupTitle = ["特别发现", "我的圈子", "互动话题"] // 标题
	const topTalk = ref({}) //推荐圈子
	const my = ref([]) //我的圈子
	const isJoin = ref(['加入', '加入', '加入'])
	const talkShow = ref(1) //展示话题id
	const talkList = ref([]) // 互动话题

	onShow(() => {
		// 判断是否登录
		if (userId == undefined) {
			uni.showToast({
				title: "请先登录!",
				duration: 1600,
				icon: 'error'
			})
			setTimeout(() => {
				// 跳转等登录页面
				uni.navigateTo({
					url: '/pages/user/user'
				})
			}, 1800)
		}
		request({ //随机推荐圈子
			url: '/Smart/QuanZi/getAll',
		}).then(res => {
			topTalk.value = res.data[Math.floor(Math.random() * (res.data.length))]
			// console.log(topTalk.value.id)
		})
	})
	// 获取用户圈子
	request({
		url: '/Smart/QuanZi/getAllById',
		data: {
			id: getApp().globalData.userDetail.userId
		}
	}).then(res => {
		console.log(res.data)
		for (let i = 0; i < res.data.length; i++) {
			my.value.push({
				qzid: res.data[i].qzCreat, //待修改
				title: res.data[i].name,
				name: res.data[i].qzIntroduce,
				img: '../../static/image/group' + res.data[i].qzCreat + '.png'
			})
			isJoin.value[res.data[i].qzCreat - 1] = '已加入'
		}
		console.log(isJoin.value)
		// 获取帖子
		request({
			url: '/Smart/QuanZi/getTopic',
			data: {
				topicId: my.value[0].qzid
			}
		}).then(res => {
			talkList.value = []
			for (let i = 0; i < res.data.length; i++) {
				talkList.value.push(res.data[i])
			}
			talkShow.value = my.value[0].qzid
		})
	})

	const goFound = () => {
		uni.navigateTo({
			url: '/pages/community/found'
		})
	}
	const talk = (qzid) => { //切换圈子
		talkShow.value = qzid
		// 查询帖子
		request({
			url: '/Smart/QuanZi/getTopic',
			data: {
				topicId: qzid
			}
		}).then(res => {
			talkList.value = []
			for (let i = 0; i < res.data.length; i++) {
				talkList.value.push(res.data[i])
			}
		})
	}
	// 加入圈子
	const join = () => {
		if (isJoin.value[topTalk.value.id - 1] == '加入') {
			request({
				url: '/Smart/QuanZi/addNew',
				method: 'POST',
				data: {
					userId: userId,
					quanZiId: topTalk.value.id //当前展示的圈子id
				}
			}).then(res => {
				uni.showToast({
					title: "加入成功!",
					duration: 800
				})
				request({
					url: '/Smart/QuanZi/getAllByQuanZiId',
					data: {
						QuanZiId: topTalk.value.id
					}
				}).then(qzDetail => {
					my.value.push({
						qzid: qzDetail.data.qzCreat, //待修改
						title: qzDetail.data.name,
						name: qzDetail.data.qzIntroduce,
						img: '../../static/image/group' + qzDetail.data.qzCreat + '.png'
					})
					isJoin.value[qzDetail.data.qzCreat - 1] = '已加入'
				})
			})
		}
		// if (isjoin.value == '加入' && my.value.length < 3) {
		// 	my.value.push({
		// 		title: "智能",
		// 		name: "AI智能",
		// 		img: '../../static/image/group3.png'
		// 	})
		// 	isjoin.value = '已加入'
		// }
	}
</script>

<style lang="scss">
	.group {
		padding: 20rpx;
		width: 710rpx;
		font-size: 12px;
		padding-bottom: 120rpx;
		background-color: #f3efee;
	}

	/* 推荐圈子开始 */
	.recommend {
		width: 590rpx;
		background-color: #f6d95f20;
		box-shadow: 2rpx 2rpx 4rpx #dbdbdb;
		padding: 20rpx 40rpx;
		margin: 20rpx;
		border-radius: 20rpx;
		margin-bottom: 30rpx;

		.title {
			display: flex;
			align-items: center;
			font-size: 18px;
			margin-top: 20rpx;
			margin-bottom: 10rpx;
		}

		/* 火热图标 */
		.title>image {
			width: 16px;
			height: 16px;
			margin-left: 10rpx;
		}

		.content {
			display: flex;
			// align-items: center;
			padding-bottom: 20rpx;
			color: #333;
			position: relative;

			/* 圈子图片 */
			image {
				width: 100rpx;
				height: 100rpx;
				margin-top: 14rpx;
				border-radius: 50rpx;
			}

			/* 中间简介 */
			.text {
				margin-left: 20rpx;
				margin-top: 20rpx;

				.name {
					font-size: 16px;
					display: block;
					margin-bottom: 10rpx;
				}

				.info {
					font-size: 12px;
					display: block;
					margin-bottom: 10rpx;
				}
			}

			.join {
				position: absolute;
				top: 40rpx;
				right: 10rpx;
				z-index: 100;
				background-color: #8BC1AE;
				border-radius: 40rpx;
				padding: 0 10rpx;
				width: fit-content;
				height: 50rpx;
				line-height: 48rpx;
				font-size: 16px;
				color: #fff;
				text-align: center;
				text-shadow: 0 0 4rpx #9c9c9c;
			}

			// .num {
			// 	display: flex;
			// 	align-items: center;
			// 	justify-content: right;
			// 	width: 470rpx;
			// 	margin-top: -10rpx
			// }

			// .num>image {
			// 	width: 50rpx;
			// 	height: 50rpx;
			// }
		}
	}

	/* 推荐圈子结束 */
	/* 我的圈子开始 */
	.group .my {
		padding: 20rpx 30rpx;
		margin: 10rpx auto;
		display: flex;
		flex-wrap: nowrap;

		// justify-content: space-between;
		/* margin: 20rpx; */
		.mid {
			margin: 0 60rpx;
		}

		.item {
			/* background-color: #15a0ac60; */
			width: 180rpx;
			height: 200rpx;
			border-radius: 20rpx;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}


		.item image {
			width: 180rpx;
			height: 200rpx;
		}

		.item .name {
			position: absolute;
			font-size: 16px;
			font-weight: 500;
			color: #ffffff;
			text-shadow: 10rpx 10rpx 6rpx #252525, -4rpx -4rpx 6rpx #252525;
		}

		.item .bottom {
			// display: none;
			position: absolute;
			width: 110%;
			height: 50rpx;
			line-height: 46rpx;
			text-align: center;
			bottom: -1rpx;
			background-color: #8BC1AE;
			font-size: 16px;
			font-weight: 500;
			color: #ffffff;
			text-shadow: 2rpx 2rpx 4rpx #9c9c9c, -2rpx -2rpx 4rpx #9c9c9c;
		}
	}

	/* 我的圈子结束 */
	/* 互动话题开始 */
	.group .talk {
		margin: 0 auto;
		margin-top: 20rpx;
		padding: 0 20rpx;

		.item {
			margin-top: 30rpx;
			padding: 30rpx 40rpx;
			width: 590rpx;
			background-color: #8BC1AE50;
			border-radius: 20rpx;
		}

		.item .title {
			font-size: 16px;
			font-weight: 600;
			color: #528e75;
			display: block;
			margin-bottom: 20rpx;
		}

		.item img {
			width: 100rpx;
		}

		.item .content {
			display: flex;
			align-items: center;
			margin: 20rpx 0;
			color: #555;
			// text-shadow: 1rpx 1rpx 2rpx #c0c0c0;

			image {
				width: 90rpx;
				height: 90rpx;
			}
		}

		.item .content .name {
			display: block;
			font-size: 14px;
			margin-left: 18px;
		}

		.item .content .text {
			width: 490rpx;
			display: block;
			font-size: 14px;
			margin-left: 6px;
			margin-top: 20rpx;
			line-height: 1.2rem;
		}
	}

	/* 互动话题结束 */
</style>