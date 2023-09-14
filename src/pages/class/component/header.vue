<template>

	<view class="header">
		<!-- 标题 -->
		<view class="title">
			<view class="">
				<text class="text">{{text}}</text>
				<view class="background">
				</view>
			</view>
			<view class="link">
				<image src="../../../static/image/icon/user_top.svg" mode=""></image>
				<image src="../../../static/image/icon/news_top.svg" mode=""></image>
				<image src="../../../static/image/icon/history_top.svg" mode=""></image>
			</view>
		</view>
		<!-- 搜索框 -->
		<view class="topBottom">
			<!-- <view class="topInput"> -->
				<input class="search" v-model="input" placeholder="搜索科普/课堂/识别" />
				<image @click="" src="@/static/image/icon/search.png" mode=""></image>
			<!-- </view> -->
		</view>
	</view>
</template>

<script setup>
	import {
		Search,
		View as IconView
	} from '@element-plus/icons-vue'
	import {
		toRefs,
		defineProps
	} from 'vue'

	//子组件接收父组件传递过来的值
	const props = defineProps({
		searchText: String,
		text: String,
	})
	//使用父组件传递过来的值
	const {
		searchText,
		text
	} = toRefs(props)

	const input = ''
</script>

<style scoped>
	/* 顶部开始 */
	.header {
		padding: 10rpx 10rpx 0rpx 10rpx;
		/* background-color: #15a0ac; */
	}

	.header .title {
		width: 680rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 0;
		margin: 30rpx auto;
		color: #15a0ac;
		position: relative;

	}

	.header .title .text {
		font-size: 24px;
		/* z-index: 2; */
	}

	.header .title .link {
		font-size: 20px;
		margin: 4rpx;
		width: 180rpx;
		display: flex;
		justify-content: space-between;
	}

	.header .title .link image {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
	}


	.header .title .background {
		/* z-index: 0; */
		background-color: #f6b02360;
		width: 96px;
		height: 6px;
		position: absolute;
		border-radius: 3px;
		overflow: hidden;
		/* top: 10px; */
		/* left: 4%; */
		bottom: 4px;
	}

	/* 搜索框 */
	.topBottom {
		width: 630rpx;
		height: 70rpx;
		background-color: #ffffff;
		margin: 30rpx auto;
		padding: 0 20rpx;
		border-radius: 40px !important;
		overflow: hidden;
		display: flex;
		align-items: center;
	}


	.topBottom .search {
		/* background-color: #909090; */
		width: 100%;
		/* margin-left: 20rpx; */
	}

	.topBottom image {
		/* background-color: #90c9b4; */
		margin-left: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}


	/* 顶部结束 */
</style>