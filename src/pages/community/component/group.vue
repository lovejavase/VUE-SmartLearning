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
				<image src="@/static/image/group3.png" @click="goFound" alt="" />
				<view class="text" @click="goFound">
					<text class="name">AI智能</text>
					<text class="info">领略人工智能的奥秘！</text>
					<!-- <view class="num">
						<image src="@/static/image/icon/group_fill.svg" alt="" />
						<text>1234</text>
					</view> -->
				</view>
				<view class="join" @click="join">
					{{isjoin}}
				</view>
			</view>
		</view>
		<!-- 我的圈子 -->
		<titleItem :title="groupTitle[1]"></titleItem>
		<view class="my">
			<view class="item" :class="index==1?'mid':''" v-for="(item,index) in my" @click="talk(item.title)">
				<image :src="item.img" mode=""></image>
				<text class="name">{{item.title}}</text>
				<text class="bottom">{{item.name}}</text>
			</view>

		</view>
		<!-- 互动话题 -->
		<titleItem :title="groupTitle[2]"></titleItem>
		<view class="talk">
			<view class="item" v-if="talkShow=='百科'" v-for="info in wikiList">
				<text class="title">{{info.title}}</text>
				<view class="content">
					<image :src="info.img" alt="" />
					<view class="">
						<!-- <text class="name">{{info.name}}</text> -->
						<text class="text">“{{info.text}}”</text>
					</view>
				</view>
			</view>
			<view class="item" v-if="talkShow=='历史'" v-for="info in developList">
				<text class="title">{{info.title}}</text>
				<view class="content">
					<image :src="info.img" alt="" />
					<view class="">
						<!-- <text class="name">{{info.name}}</text> -->
						<text class="text">“{{info.text}}”</text>
					</view>
				</view>
			</view>
			<view class="item" v-if="talkShow=='智能'" v-for="info in aiList">
				<text class="title">{{info.title}}</text>
				<view class="content">
					<image :src="info.img" alt="" />
					<view class="">
						<!-- <text class="name">{{info.name}}</text> -->
						<text class="text">“{{info.text}}”</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { onShow } from "@dcloudio/uni-app";
import {
		ref
	} from "vue";
	import titleItem from "./title.vue"
	// 标题
	const groupTitle = ["特别发现", "我的圈子", "互动话题"]
	// 我的圈子
	const my = ref(getApp().globalData.my)
	const isjoin = ref('加入')
	const talkShow = ref('百科')
	// console.log(my[0])
	// 互动话题
	// 百科
	const wikiList = [{
			title: "# 人工智能研究目的是什么？",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能技术是否会超越人类智能？如果会，那会有什么样的影响？"
		}, {
			title: "# ",
			img: "../../static/image/icon/talk2.svg",
			text: ""
		},
		{
			title: "# AI",
			img: "../../static/image/icon/talk2.svg",
			text: ""
		},
	]
	// 历史
	const developList = [{
			title: "# 回望人工智能的发展",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能在1956年的达特茅斯会议上被首次提出，六十多年以来发生了什么变化呢？"
		}, {
			title: "# 人工智能的发展现状如何？",
			img: "../../static/image/icon/talk2.svg",
			text: ""
		},
		{
			title: "# 工智能的发展前景如何？",
			img: "../../static/image/icon/talk2.svg",
			text: ""
		},
	]
	// ai
	const aiList= [{
			title: "# AI与人类智能的关系？",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能技术是否会超越人类智能？如果会，那会有什么样的影响？"
		}, {
			title: "# 你认为未来的智能是怎样的？",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能未来的发展方向是什么？将会对社会和经济产生什么影响？"
		},
		{
			title: "# AI对就业和社会的影响？",
			img: "../../static/image/icon/talk2.svg",
			text: "随着人工智能技术的普及，许多传统行业的工作可能被取代，也催生了许多新兴行业和就业机会，我们该如何适应这种变革？"
		},
	]
	onShow(()=>{
		if(my.value.length==3&&my.value[2].title=='智能'){
			isjoin.value = '已加入'
		}
	})

	const goFound = () => {
		uni.navigateTo({
			url: '/pages/community/found'
		})
	}
	const talk = (title) => {
		talkShow.value=title
	}
	const join = () => {
		if (isjoin.value=='加入' && my.value.length<3) {
			my.value.push({
				title: "智能",
				name: "AI智能",
				img: '../../static/image/group2.png'
			})
			isjoin.value = '已加入'
		}
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