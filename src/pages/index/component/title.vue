<template>
	<view class="title">
		<view class="">
			<text class="text">{{title}}</text>
			<view class="background">
			</view>
		</view>
		<view class="link">
			显示全部
			<image src="@/static/image/icon/right_index.svg" mode=""></image>
		</view>
	</view>
</template>

<script setup>
	import {
		Search,
		ArrowRight,
		Avatar,
		UserFilled,
		View as IconView
	} from '@element-plus/icons-vue'
	import {
		toRefs,
		defineProps
	} from 'vue'

	//子组件接收父组件传递过来的值
	const props = defineProps({
		title: String

	})
	//使用父组件传递过来的值
	const {
		title
	} = toRefs(props)
</script>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		padding: 0 4%;
		color: #15a0ac;
		position: relative;
	}

	.title .text {
		font-size: 18px;
		font-family: 'AlimamaShuHeiTi-Bold';
		z-index: 100;
		position: relative;
	}

	.title .link {
		font-size: 14px;
		color: #15a0ac;
		margin-top: 2px;
		display: inline-flex;
		align-items: center;
	}

	.title .link image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 2rpx;
	}

	.title .background {
		background-color: #f6de2890;
		width: 70px;
		height: 0.4rem;
		position: absolute;
		left: 30rpx;
		border-radius: 0.1rem;
		overflow: hidden;
		bottom: 1rpx;
		z-index: 0;
	}
</style>