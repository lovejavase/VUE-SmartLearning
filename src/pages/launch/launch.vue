<template>
	<!-- 启动页 -->
	<view class="launch">
		<!-- 		<image @click="nextPage" v-if="page==-1" src="@/static/image/qd0.jpg" mode='scaleToFill'
			:style="'min-height:'+windowHeight+'rpx;'"></image> -->
		<swiper :current="page" :style="'min-height:'+windowHeight+'rpx;'" @click="nextPage">
			<swiper-item>
				<view class="sc1">
					<view class="btn"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="sc2">
					<view class="btn"></view>
				</view>
			</swiper-item>

			<swiper-item>
				<view class="sc3">
					<view class="btn"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	const page = ref(0)
	const systemHeight = ref(getApp().globalData.systemInfo.windowHeight)
	const systemWidth = ref(getApp().globalData.systemInfo.windowWidth)
	const windowHeight = ref('')

	onShow(() => {
		windowHeight.value = Math.floor((750 / Number(systemWidth.value)) * Number(systemHeight.value) - 40)
	})
	const nextPage = () => {
		if (page.value == 2) {
			uni.redirectTo({
				url: '/pages/index/index'
			})
		} else {
			page.value++
		}
		console.log(page.value)
	}
	onLoad(options => {
		// 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
		const flag = uni.getStorageSync('runFlag');
		if (flag) {
			// 如有直接进首页
			uni.redirectTo({
				url: '/pages/index/index'
			});
		} else {
			// 值不存在，跳到引导页，并存储标识易读状态，下次进入应用就不再展示引导页
			uni.setStorage({
				key: 'runFlag',
				data: true
			});
		}
	})
</script>

<style>
	.launch>image {
		width: 100%;
	}

	.sc1 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/page/qd3.jpg);
		background-size: 100% 100%;
	}

	.sc2 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/page/qd2.jpg);
		background-size: 100% 100%;
	}

	.sc3 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/page/qd1.jpg);
		background-size: 100% 100%;
	}

	.btn {
		width: 200rpx;
		height: 64rpx;
		z-index: 100;
		position: absolute;
		top: 1420rpx;
		right: 40rpx;
		border-radius: 32rpx;
	}
</style>