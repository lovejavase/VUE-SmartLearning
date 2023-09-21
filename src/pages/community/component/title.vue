<template>
	<view class="title">
		<view class="">
			<text class="text">{{title}}</text>
			<view class="background">
			</view>
		</view>
	</view>
</template>

<script setup>
	// import {
	// 	Search,
	// 	ArrowRight,
	// 	Avatar,
	// 	UserFilled,
	// 	View as IconView
	// } from '@element-plus/icons-vue'
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

<style scoped>
	.title {
		width: fit-content;
		display: flex;
		justify-content: space-between;
		padding-left: 30rpx;
		color: #15a0ac;
		position: relative;
	}

	.title .text {
		font-family: 'AlimamaShuHeiTi-Bold';
		position: relative;
		font-size: 18px;
		z-index: 10;
	}

	/* 	.title .link {
		font-size: 12px;
		color: #15a0ac;
		margin-top: 2px;
	} */

	.title .background {
		background-color: #f6e382;
		width: 83%;
		height: 0.4rem;
		position: absolute;
		left: 30rpx;
		border-radius: 0.1rem;
		overflow: hidden;
		bottom: 1rpx;
		z-index: 0;
	}
</style>