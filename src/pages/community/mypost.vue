<template>
	<!-- 我的动态 -->
	<view class="mypost">
		<myheader title='我的动态'></myheader>
		<view class="group">
			<view class="">
				<image src="@/static/image/icon/post.svg" mode="aspectFill"></image>
				内容：{{mylist.num}}
			</view>
			<view class="">
				<image src="@/static/image/icon/appreciate.svg" mode="aspectFill"></image>
				点赞：{{mylist.favor}}
			</view>
			<view class="">
				<image src="@/static/image/icon/fans.svg" mode="aspectFill"></image>
				粉丝：{{mylist.fans}}
			</view>
		</view>
		<view class="">
			<text class="day">今天</text>
			<view class="post" v-for="item in today">
				<div class="itemTitle">{{item.title}}</div>
				<div class="itemName">{{item.time}}</div>
			</view>
			<text class="day">更早</text>
			<view class="post" v-for="item in early">
				<div class="itemTitle">{{item.title}}</div>
				<div class="itemName">{{item.time}}</div>
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	const mylist={num:4,favor:14,fans:23}
	// 今天
	const today = [{
		title: '通过这段时间的学习，我学到了很多',
		time: '2023-09-22 16:15'
	}, {
		title: '听了人工智能觉醒之谜，我了解更多了',
		time: '2023-09-22 12:35'
	},{
		title: '人工智能时代真的是一本很棒的书',
		time: '2023-09-22 12:35'
	}]
	// 以前
	const early = [{
		title: '人工智能真的是太神奇了',
		time: '2023-09-20 13:05'
	}, {
		title: 'AI对话真的太神奇了',
		time: '2023-09-18 21:43'
	}]
</script>

<style lang="scss">
	.mypost {
		padding-top: 40rpx;

		// 粉丝及其它内容
		.group {
			width: 610rpx;
			margin: 30rpx auto;
			display: flex;
			justify-content: space-between;
			color: #444;
			font-size: 13px;
		}

		.group view {
			height: 150rpx;
			display: inline-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		}

		.group image {
			width: 100rpx;
			height: 100rpx;
			display: block;
		}

		.day {
			font-size: 14px;
			display: block;
			margin: 20rpx 50rpx;
			color: #999;
		}

		.post {
			padding: 10rpx 20rpx;
			width: 620rpx;
			margin: 20rpx auto;
			background-color: #f6d95f20;
			border-radius: 10rpx;
			box-shadow: 1px 1px 4rpx #e0e0e0;


			.itemTitle {
				font-size: 16px;
				margin: 10rpx 0;

			}

			.itemName {
				font-size: 12px;
				color: #909090;
				margin: 12rpx 0;
			}
		}

	}
</style>