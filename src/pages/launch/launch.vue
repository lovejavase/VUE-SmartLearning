<template>
	<!-- 启动页 -->
	<view class="launch">
		<!-- 		<image @click="nextPage" v-if="page==-1" src="@/static/image/qd0.jpg" mode='scaleToFill'
			:style="'min-height:'+windowHeight+'rpx;'"></image> -->
		<swiper :current="page" :style="'min-height:'+windowHeight+'rpx;'">
			<swiper-item>
				<view class="sc1">
					<view class="btn" @click="nextPage"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="sc2">
					<view class="btn" @click="nextPage"></view>
				</view>
			</swiper-item>

			<swiper-item>
				<view class="sc3">
					<view class="btn" @click="nextPage"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
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
</script>

<style>
	.launch>image {
		width: 100%;
	}

	.sc1 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/qd2.jpg);
		background-size: 100% 100%;
	}

	.sc2 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/qd3.jpg);
		background-size: 100% 100%;
	}

	.sc3 {
		width: 750rpx;
		height: 100%;
		position: relative;
		background-image: url(@/static/image/qd1.jpg);
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