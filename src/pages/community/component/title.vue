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
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		/* padding: 0 4%; */
		color: #15a0ac;
		position: relative;
	}

	.title .text {
		position: relative;
		font-size: 14px;
		z-index: 10;
	}

/* 	.title .link {
		font-size: 12px;
		color: #15a0ac;
		margin-top: 2px;
	} */

	.title .background {
		background-color: #f6de28;
		width: 3.4rem;
		/* width: 100%; */
		height: 0.3rem;
		position: absolute;
		border-radius: 0.1rem;
		overflow: hidden;
		/* top: 10px; */
		left: 4%;
		bottom: 1%;
		z-index: 0;
	}
</style>