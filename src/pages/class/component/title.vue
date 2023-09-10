<template>
	<view class="title">
		<view class=" left">
			<view class="background"> </view>
			<text class="text">{{title}}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		Sort,  
		View as IconView
	} from '@element-plus/icons-vue'
	import { toRefs, defineProps } from 'vue'
	const props = defineProps({
	  //子组件接收父组件传递过来的值
	  title: String,
	})
	//使用父组件传递过来的值
	const {title} =toRefs(props)
	
</script>

<style scoped>
	/* 标题 */
	 .title {
		width: 680rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 0 4%;
		color: #15a0ac;
		position: relative;

	}

	 .title .text {
		/* position: relative; */
		font-size: 14px;
		/* font-weight: 500; */
	}

	 .title .link {
		font-size: 16px;
		color: #15a0ac;
		margin-top: 2px;
	}


	 .title .left {
		display: inline-flex;
		align-items: center;
	}

	 .title .background {
		background-color: #f6de2840;
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 0.1rem;
		margin-right: 0.1rem;
	}
</style>