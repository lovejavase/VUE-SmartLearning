<template>
	<!-- 新闻详情页 -->
	<view class="newsList">
		<!-- 头部 -->
		<myheader title='推荐新闻'></myheader>
		<!-- 介绍 -->
		<view class="introduce">
			<text class="title">人工智能</text>
			<text class="text">此频道是人工智能基础知识概况之一，此频道是人工智能基
				础知识概况之一，此频道是人工智能基础知识概况之一。</text>
		</view>
		<!-- 列表 -->
		<view class="news">
			<view class="item" v-for="i in 4">
				<view class="text">
					<text class="title">《人工智能》——人工智能的历史源远流长</text>
					<text class="author">作者：{{author}}</text>
				</view>
				<image src="@/static/image/knowledge1.png" alt="" />
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	const author = '昵称五个字'
</script>

<style>
	.newsList {
		padding-top: 30rpx;
		background-color: #f3efee;
	}

	::v-deep .header {
		background-color: #f3efee;
	}

	/* 介绍开始 */
	.introduce {
		margin: 20rpx auto;
		padding: 20rpx;
		width: 690rpx;
		background-color: #ffffff;
		box-shadow: 0 10rpx 10rpx #90909090;
		border-radius: 10rpx;
	}

	.introduce .title {
		display: block;
		font-size: 18px;
		margin-bottom: 10rpx;
	}

	.introduce .text {
		display: block;
		font-size: 14px;
	}

	/* 介绍结束 */
	/* 列表开始 */
	.news {
		margin: 30rpx auto;
		width: 660rpx;
		padding: 30rpx 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0 10rpx 10rpx #90909090;
	}

	.news .item {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fcf3e1;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
	}

	.news .item .text {
		width: 480rpx;
	}

	.news .item .text .title {
		display: block;
		font-size: 14px;
	}

	.news .item .text .author {
		font-size: 12px;
		display: block;
		margin-top: 20rpx;
	}

	.news .item>image {
		width: 200rpx;
		height: 150rpx;

	}

	/* 列表结束 */
</style>