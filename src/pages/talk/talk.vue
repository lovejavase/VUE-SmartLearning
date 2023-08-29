<template>
	<!-- <Footer :currentPage='0'></Footer> -->
	<view class="talk">
		<!-- 顶部 -->
		<view class="header">
			<el-button class="itemBtn" link>
				<el-icon class="icon">
					<ArrowLeft></ArrowLeft>
				</el-icon>
			</el-button>
			<view class="title">
				<text class="text">AI对话</text>
				<view class="background">
				</view>
			</view>
			<el-button class="itemBtn" link>
				<el-icon class="icon">
					<ArrowLeft></ArrowLeft>
				</el-icon>
			</el-button>
		</view>
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
import {
		ArrowLeft,
		View as IconView
	} from '@element-plus/icons-vue'
	// defineExpose(currentPage)
</script>

<style scoped>
	.talk{
		background-color: #f3efee;
	}
	.header{
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