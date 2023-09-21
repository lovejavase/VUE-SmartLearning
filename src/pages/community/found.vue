<template>
	<!-- 特别发现页 -->
	<view class="found">
		<myheader title='特别发现'></myheader>
		<view class="card">
			<image class="img" src="../../static/image/found1.png" mode=""></image>
			<view class="info">
				<view class="text">
					<text>NEWS PAPER Vol.1 |</text>
					<text>人工智能时代大冲击</text>
				</view>
				<view class="btn">
					去阅读
					<image src="../../static/image/icon/right_index.svg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card">
			<image class="img" src="../../static/image/found2.png" mode=""></image>
			<view class="info">
				<view class="text">
					<text>NEWS PAPER Vol.1 |</text>
					<text>人工智能时代大冲击</text>
				</view>
				<view class="btn">
					去阅读
					<image src="../../static/image/icon/right_index.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style lang="scss">
	.found {
		padding-top: 40rpx;

		.card {
			margin: 20rpx auto;
			width: 680rpx;
			background-color: #90c9b4;
			border-radius: 20rpx;
			overflow: hidden;
			margin-bottom: 40rpx;

			.img {
				width: 100%;
				height: 600rpx;
			}

			.info {
				margin: 0;
				padding: 10rpx 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 10rpx 0;
				color: #fff;

				.text text {
					display: block;
					font-size: 18px;
					margin: 10rpx 0;
				}
				.btn{
					display: inline-flex;
					align-items: center;
					background-color: #fff;
					color: #90c9b4;
					padding: 6rpx 4rpx;
					padding-left: 6rpx;
					border-radius: 10rpx;
				}
				.btn image{
					width: 30rpx;
					height: 30rpx;
					margin-top: 2rpx;
				}
			}
		}
	}
</style>