<template>
	<!-- 智能识别主页面 -->
	<view class="intelligent">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="hText"></ClassHeader>
		<!-- 工具栏 -->
		<view class="tool">
			<view class="toolItem">
				<text class="title">图像识别</text>
				<text class="text">海量识别</text>
				<image src='@/static/image/icon/photo.svg' class="image" />
			</view>
			<view class="toolItem bg2" @click="translate">
				<text class="title">智能翻译</text>
				<text class="text">高效解答</text>
				<image src='@/static/image/icon/talk.svg' class="image" />
			</view>
			<view class="toolItem bg3">
				<text class="title">算术批改</text>
				<text class="text">快速批改</text>
				<image src='@/static/image/icon/test.svg' class="image" />
			</view>

		</view>
		<!-- 知识科普 -->
		<view class="knowledge">
			<ClassTitle title="学习助手"></ClassTitle>
			<view class="content" :class="index==1 ||index==4 ?'mid':''" v-for="(item,index) in tools">
				<image :src='item.img' class="image" />
				<view class="text">
					<text class="className">{{item.name}}</text>
					<view class="btn">
						前往查看
					</view>
				</view>
			</view>
		</view>

		<!-- 智能分类 -->
		<view class="classify">
			<ClassTitle title="话题参与"></ClassTitle>
			<view class="content">
				<view class="btn" v-for="(item,index) in 4">
					<!-- <image src="../../static/image/icon/hot.svg" mode="aspectFit"></image> -->
					#art
				</view>
			</view>
			<view class="content even">
				<view class="btn" v-for="(i,index) in 4">
					<!-- <image src="../../static/image/icon/hot.svg" mode="aspectFit"></image> -->
					#art
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<Footer></Footer>
	</view>
</template>

<script setup>
	import {
		UserFilled,
		ArrowRight,
		View as IconView
	} from '@element-plus/icons-vue'
	import ClassHeader from '../class/component/header.vue'
	import ClassTitle from '../class/component/title.vue'

	const hText = "智能识别"
	const searchText = "搜索功能"
	const tools = [{
		img: '../../static/image/icon/scoreA.svg',
		name: '我的成绩'
	}, {
		img: '../../static/image/icon/pinglun.svg',
		name: '课堂点评'
	}, {
		img: '../../static/image/icon/huifang.svg',
		name: '直播回放'
	}, {
		img: '../../static/image/icon/news.svg',
		name: '消息提醒'
	}, {
		img: '../../static/image/icon/minxi.svg',
		name: '课堂笔记'
	}]
	const famousImg = ["@/static/image/famous1.png", "@/static/image/famous2.png"]
	let translate = () => {
		uni.navigateTo({
			url: '/pages/index/translate'
		})
	}
</script>

<style>
	.intelligent {
		background-color: #f3efee;
		font-size: 12px;
		padding-bottom: 280rpx;
	}

	/* 工具开始 */
	.tool {
		width: 710rpx;
		padding: 20rpx;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	.tool .toolItem {
		width: 180rpx;
		/* height: 240rpx; */
		margin: 0 10rpx;
		background-color: #15a0ac;
		border-radius: 40rpx;
		padding: 20rpx;
		display: inline-block;
	}

	.tool .toolItem .image{
		margin-left: 50%;
		margin-top: 20rpx;
		width: 80rpx;
		height: 80rpx;
		display: block;
	}
	.tool .bg2 {
		background-color: #e4827d;
	}

	.tool .bg3 {
		background-color: #90c9b4;
	}

	.tool .toolItem .title {
		width: 200rpx;
		color: #ffffff;
		display: block;
		font-size: 15px;
		margin: 10rpx;
	}

	.tool .toolItem .text {
		width: 200rpx;
		margin: 10rpx;
		color: #ffffff;
		display: block;
		font-size: 12px;
	}


	/* 工具结束 */
	/* 知识科普开始 */
	.knowledge {
		width: 710rpx;
		margin: 0 auto;
		padding: 20rpx 0;
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
	}

	.knowledge .content {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 20rpx;
		margin-top: 14rpx;
		margin-left: 10rpx;
		/* 斜体 */
		/* font-style: italic; */
		width: 200rpx;
		padding: 20rpx 0;
		background-color: #ffffff;
		margin-bottom: 20rpx;
	}

	.mid {
		margin-left: 40rpx !important;
		margin-right: 40rpx !important;

	}

	.knowledge .content .image {
		width: 100rpx;
		height: 90rpx;
		display: block;
		margin-left: 14rpx;
	}

	.knowledge .content .text {
		width: 100%;
	}

	/* 标题 */
	.knowledge .content .className {
		display: block;
		margin-top: 10rpx;
		font-size: 14px;
		/* font-weight: 600; */
		margin-left: 14rpx;
	}

	.knowledge .content .btn {
		margin: 0 auto;
		margin-top: 16rpx;
		font-size: 14px;
		background-color: #15a0ac;
		color: #ffffff;
		line-height: 1.4rem;
		width: 80%;
		border-radius: 10rpx;
		text-align: center;
	}



	/* 学习助手结束 */

	/* 智能分类开始 */
	.classify {
		width: 710rpx;
		padding: 20rpx;
		margin: 0 auto;
		padding-bottom: 30rpx;
		font-size: 14px;
	}

	.classify .content {
		width: 660rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
	}

	.classify .content .btn {
		display: inline-flex;
		align-items: center;
		background-color: #90c9b4;
		color: #ffffff;
		text-shadow: 1rpx 1rpx 2rpx #719e8d;
		padding: 6rpx 12rpx;
		border-radius: 8rpx;
	}

	.classify .content image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 4rpx;
	}

	.classify .even {
		margin-left: 48rpx;
	}

	/* 智能分类结束 */
</style>