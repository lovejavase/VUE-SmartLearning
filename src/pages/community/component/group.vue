<template>
	<view class="group">
		<!-- 特别发现 -->
		<titleItem :title="groupTitle[0]"></titleItem>
		<view class="recommend" @click="goFound">
			<view class="title">
				<text>《人工智能时代大冲击》</text>
				<image src="@/static/image/icon/hot.svg" alt="" />
			</view>
			<view class="content">
				<image src="@/static/image/found1.png" alt="" />
				<view class="text">
					<text class="name">张遥</text>
					<text class="info">领略人工智能的奥秘</text>
					<!-- <view class="num">
						<image src="@/static/image/icon/group_fill.svg" alt="" />
						<text>1234</text>
					</view> -->
				</view>
			</view>
		</view>
		<!-- 我的圈子 -->
		<titleItem :title="groupTitle[1]"></titleItem>
		<view class="my">
			<view class="item">
				<image src="@/static/image/group1.png" mode=""></image>
				<text class="name">自然</text>
				<text class="bottom">自然百科</text>
			</view>
			<view class="item">
				<image src="@/static/image/group3.png" mode=""></image>
				<text class="name">智能</text>
				<text class="bottom">AI智能</text>
			</view>
			<view class="item">
				<image src="@/static/image/group2.png" mode=""></image>
				<text class="name">历史</text>
				<text class="bottom">发展历史</text>
			</view>
		</view>
		<!-- 互动话题 -->
		<titleItem :title="groupTitle[2]"></titleItem>
		<view class="talk">
			<view class="item" v-for="info in talkList">
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
	import titleItem from "./title.vue"

	const groupTitle = ["特别发现", "我的圈子", "互动话题"]
	const my = [{
		name: "自然百科",
		img: '@/static/image/group1.png'
	}, {
		name: "AI智能",
		img: '@/static/image/group2.png'
	}, {
		name: "历史",
		img: '@/static/image/group3.png'
	}]
	// console.log(my[0])
	const talkList = [{
			title: "# AI与人类智能的关系？",
			name: "张瑶",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能技术是否会超越人类智能？如果会，那会有什么样的影响？"
		},{
			title: "# 你认为未来的智能是怎样的？",
			name: "何光",
			img: "../../static/image/icon/talk2.svg",
			text: "人工智能未来的发展方向是什么？将会对社会和经济产生什么影响？"
		},
		{
			title: "# AI对就业和社会的影响？",
			name: "志云",
			img: "../../static/image/icon/talk2.svg",
			text: "随着人工智能技术的普及，许多传统行业的工作可能被取代，也催生了许多新兴行业和就业机会，我们该如何适应这种变革？"
		}, 
	]

	const goFound = () => {
		uni.navigateTo({
			url: '/pages/community/found'
		})
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
			}

			.text .name {
				font-size: 16px;
				display: block;
				margin-bottom: 10rpx;
			}

			.text .info {
				font-size: 12px;
				display: block;
				margin-bottom: 10rpx;
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
		/* width: 660rpx; */
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		/* margin: 20rpx; */

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