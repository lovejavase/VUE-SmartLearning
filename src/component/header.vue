<template>
	<!-- 用户子页面的头部 -->
	<view class="header">
		<view class="back" @click="back">
			<img src="@/static/image/icon/back.svg" alt="">
		</view>
		<view class="title">
			<view class="bottom">
			</view>
			<text class="">{{title}}</text>
		</view>
		<view class="more">
			<img src="@/static/image/icon/more.svg" alt="">
		</view>
	</view>
</template>

<script setup>
	import {
		toRefs,
		defineProps
	} from 'vue'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		title: String,
	})
	//使用父组件传递过来的值
	const {
		title
	} = toRefs(props)
	
	let back=()=>{
		uni.navigateBack({
			delta:2
		})
	}
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin:0 20rpx ;
	}

	.header .title {
		font-size: 20px;
		color: #15a0ac;
		position: relative;
	}

	.header .bottom {
		position: absolute;
		height: 10rpx;
		width: 100%;
		left: 0;
		top: 22px;
		background-color: #f6e38280;
		border-radius: 4px;
	}
	.header img{
		width: 20px;
		height: 20px;
		margin-top: 4rpx;
	}
</style>