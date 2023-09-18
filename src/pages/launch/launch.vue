<template>
	<!-- 启动页 -->
	<view class="launch">
		<image @click="nextPage" v-if="page==-1" src="@/static/image/bg.png" mode='scaleToFill'
			:style="'min-height:'+windowHeight+'rpx;'"></image>
		<swiper v-if="page>=0" :current="page" :style="'min-height:'+windowHeight+'rpx;'">
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
	const page = ref(-1)
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
		background-color: salmon;
		position: relative;
	}

	.sc2 {
		width: 750rpx;
		background-color: silver;
	}

	.sc3 {
		width: 750rpx;
		background-color: aquamarine;
	}

	.btn {
		width: 400rpx;
		height: 100rpx;
		background-color: aqua;
		z-index: 100;
		position: absolute;
		top: 1000rpx;
		right: 100rpx;
		border-radius: 30rpx;
	}
</style>