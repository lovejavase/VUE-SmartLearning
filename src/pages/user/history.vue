<template>
	<!-- 足迹 -->
	<view class="history">
		<!-- 头部 -->
		<myheader title='足迹'></myheader>
		<!-- 内容 -->
		<text class="day">今天</text>
		<view class="content" v-for="(i,index) in 2">
			<image src="@/static/image/similar2.png" mode="aspectFit" alt="" />
			<view class="box-card">
				<div class="itemTitle">人工智能觉醒之谜（上）什么是意识？</div>
				<div class="itemName">真假世界未解之谜</div>
			</view>
		</view>
		<text class="day">更早</text>
		<view class="content" v-for="(i,index) in 2">
			<image src="@/static/image/similar2.png" mode="aspectFit" alt="" />
			<view class="box-card">
				<div class="itemTitle">人工智能觉醒之谜（上）什么是意识？</div>
				<div class="itemName">真假世界未解之谜</div>
			</view>
		</view>

	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style>
	.history {
		padding-top: 30rpx;
	}

	/* 日期标题 */
	.history .day {
		font-size: 14px;
		display: block;
		margin: 20rpx 50rpx;
		color: #515151;
	}

	/* 内容 */
	.history .content {
		width: 670rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 0 10rpx;
	}

	.history .content image {
		width: 40%;
		max-height: 180rpx;
	}

	.history .box-card {
		width: 60%;
		/* height: 210rpx; */
		border: none;
	}

	.history .itemTitle {
		font-size: 13px;
		/* margin: 4rpx 0; */
	}

	.history .itemName {
		font-size: 12px;
		color: #909090;
		margin: 12rpx 0;
	}
</style>