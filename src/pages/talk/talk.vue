<template>
	<!-- <Footer :currentPage='0'></Footer> -->
	<!-- 顶部 -->
	<myheader title='智能交流'></myheader>
	<view class="talk">
		<!-- 对话 -->
		<view class="dialog">
			<!-- 提示 -->
			<!-- 对话内容 -->
		</view>
		<!-- 输入 -->
		<view class="input">

		</view>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import myheader from "@/component/header.vue"
	// defineExpose(currentPage)
</script>

<style scoped>
	.talk {
		background-color: #f3efee;
	}

	.header {
		margin: 0;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.header .title {
		position: relative;
	}

	.header .title .text {
		font-size: 24px;
	}

	.header .title .background {
		background-color: #f6b02360;
		width: 140rpx;
		height: 6px;
		position: absolute;
		border-radius: 3px;
		overflow: hidden;
		/* top: 10px; */
		/* left: 4%; */
		bottom: 2px;
	}

	/* 对话框 */
</style>