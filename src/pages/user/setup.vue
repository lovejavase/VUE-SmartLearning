<template>
	<!-- 设置页 -->
	<view class="setup">
		<!-- 头部 -->
		<myheader title='设置中心'></myheader>
		<!-- 设置按钮 -->
		<view class="content">
			<view class="item">
				<text>账号与安全</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
			<view class="item">
				<text>隐私设置</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
			<view class="item">
				<text>通知设置</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
			<view class="item">
				<text>个性化设置</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
			<view class="item">
				<text>订阅通知</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
			<view class="item" @click='quit'>
				<text>退出登录</text>
				<image src="@/static/image/icon/right.svg" alt="" />
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"

	const quit = () => {
		getApp().globalData.userDetail = {}
		uni.showToast({
			icon: 'success',
			title: '已退出！'
		})
		setTimeout(() => {
			uni.redirectTo({
				url: '/pages/index/index'
			})
		}, 500)
	}
</script>

<style>
	.setup {
		padding-top: 40rpx;
	}

	.setup .content {
		width: 660rpx;
		margin: 0 auto;
		padding: 20rpx;
	}

	.setup .content .item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		margin: 30rpx 0;
		padding: 24rpx 0;
		border-bottom: #eeeeee solid 4rpx;
	}

	.setup .content .item image {
		width: 16px;
		height: 16px;
	}
</style>