<template>
	<!-- 好书推荐 -->
	<view class="book">
		<!-- 顶部 -->
		<myheader title=''></myheader>
		<!-- 书籍 -->
		<view class="blueb">
			<img src="@/static/image/book1.png" alt="">
			<view class="content">
				<text class="name">地平线2025：人工智能来了</text>
				<text class="chapter">共12章</text>
				<view class="vip">
					<text class="">会员免费读</text>
					<img src="@/static/image/icon/right_white.svg" alt="">
				</view>
			</view>
		</view>
		<!-- 简介 -->
		<view class="summary">
			<text class="title">简介</text>
			<text class="content">简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
				简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容</text>
			<text class="author">作者:{{author}}</text>
		</view>
		<!-- 内容 -->
		<view class="substance">
			<text class="chapter">第一章</text>
			<text>简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
				简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容</text>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	const author = '（美）布莱克·克里斯汀'
</script>

<style>
	.book {
		/* padding: 20rpx; */
		font-size: 12px;
		background-color: #90c9b4;
		padding-top: 20rpx;
	}

	::v-deep .header {
		margin: 0;
		padding: 20rpx 40rpx;
		background-color: #90c9b4;
	}

	/* 封面信息开始 */
	.blueb {
		display: flex;
		align-items: center;
		width: 650rpx;
		margin: 0 auto;
		padding-top: 20rpx;
	}

	.blueb>img {
		width: 170rpx;
		height: auto;
		margin-right: 30rpx;
	}

	.blueb .content {
		height: 190rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.blueb .content .name {
		font-size: 14px;
	}

	.blueb .content .chapter {
		color: #909090;
	}

	.blueb .content .vip {
		display: flex;
		align-items: center;
		color: #ffffff;
		text-shadow: #b29575 2rpx 2rpx 2rpx;
		width: 76px;
		padding: 4rpx 16rpx;
		padding-right: 12rpx;
		background-image: linear-gradient(to right, #d8cdbe, #b29575);
		border-radius: 20rpx;
	}

	.blueb .content .vip>img {
		width: 14px;
		margin-left: 2px;
	}

	/* 封面信息结束 */
	/* 简介开始 */
	.summary {
		background-color: #ffffff;
		padding: 50rpx;
		margin-top: 40rpx;
		border-radius: 60rpx 60rpx 0 0;
		display: flex;
		flex-direction: column;
	}

	.summary .title {
		font-size: 18px;
	}

	.summary .content {
		margin: 16rpx 0;
		color: #909090;
	}

	.summary .author {
		font-size: 14px;
	}

	/* 简介结束 */
	/* 内容开始 */
	.substance {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		padding: 20rpx 50rpx;
	}

	.substance .chapter {
		display: block;
		text-align: center;
		font-size: 14px;
		margin-bottom: 20rpx;
	}

	/* 内容结束 */
</style>