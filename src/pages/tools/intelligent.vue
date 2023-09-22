<template>
	<!-- 智能识别主页面 -->
	<view class="intelligent">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="hText"></ClassHeader>
		<!-- 工具栏 -->
		<view class="tool">
			<view class="toolItem" @click="photo">
				<text class="title">图书识源</text>
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
			<view class="content" :class="item.class" v-for="(item,index) in tools">
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
			<scroll-view class="top" scroll-x='true' :scroll-left='scrollx'>
				<view class="content">
					<view class="btn" v-for="(item,index) in 4">
						#{{list[index]}}
					</view>
				</view>
				<view class="content even">
					<view class="btn" v-for="(item,index) in 4">
						#{{list[index+4]}}
					</view>
				</view>
			</scroll-view>
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
	import {
		ref
	} from 'vue';
	import ClassHeader from '../class/component/header.vue'
	import ClassTitle from '../class/component/title.vue'

	const hText = "智能识别"
	const searchText = "搜索功能"
	const list = ["超人工智能", "人工智能的监管", "AI与人类创造力", "AI在医疗保健中的应用", "人工智能的偏见和歧视", "情感计算", "人工智能的未来发展",
		"知识表示与推理", "机器人技术", "AI在自动驾驶中的应用"
	]
	// const list = ["改变世界的百大科技", "人工智能会反抗？", "未来的智能是怎样？", "人工智能发展史", ]
	const tools = [{
		img: '../../static/image/icon/scoreA_y.svg',
		name: '我的成绩',
		class: 'top'
	}, {
		img: '../../static/image/icon/pinglun.svg',
		name: '课堂点评',
		class: 'mid'
	}, {
		img: '../../static/image/icon/huifang.svg',
		name: '直播回放',
		class: 'end'
	}, {
		img: '../../static/image/icon/news_y.svg',
		name: '消息提醒',
		class: 'top'
	}, {
		img: '../../static/image/icon/minxi.svg',
		name: '课堂笔记',
		class: 'mid'
	}]
	const famousImg = ["@/static/image/famous1.png", "@/static/image/famous2.png"]
	// 滚动
	const scrollx = ref(0)
	const scrollxy = ref(true)
	setInterval(() => {
		if (scrollxy.value) {
			scrollx.value += 1
			if (scrollx.value == 280) {
				scrollxy.value = false
			}
		} else {
			scrollx.value -= 1
			if (scrollx.value == -20) {
				scrollxy.value = true
			}
		}
	}, 40)

	let translate = () => {
		uni.navigateTo({
			url: '/pages/tools/translate'
		})
	}
	let photo = () => {
		uni.navigateTo({
			url: '/pages/tools/photo'
		})
	}
</script>

<style>
	.intelligent {
		background-color: #f3efee;
		font-size: 12px;
		padding-bottom: 280rpx;
		padding-top: 40rpx;
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

	.tool .toolItem .image {
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
		margin-top: 30rpx;
		margin-left: 10rpx;
		/* 斜体 */
		/* font-style: italic; */
		width: 198rpx;
		padding: 20rpx 0;
		margin-bottom: 20rpx;
		border: 1rpx solid #e4e4e4;
	}


	.knowledge .top {
		background-color: #f6d95f20;
	}


	.knowledge .mid {
		margin-left: 40rpx !important;
		margin-right: 40rpx !important;
		background-color: #F9EBE9 !important;
	}


	.knowledge .end {
		background-color: #dee3fc90 !important;
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
	.top {
		white-space: nowrap;
		width: 100%;
		margin-top: 20rpx;
	}

	.top .content {
		font-size: 14px;
		width: 900rpx;
		margin: 20rpx;
		display: flex;
		/* justify-content: space-between; */
	}

	.top .content .btn {
		display: inline-flex;
		align-items: center;
		background-color: #90c9b4;
		padding: 10rpx 14rpx;
		border-radius: 18rpx;
		margin-bottom: 10rpx;
		margin-right: 50rpx;
		color: #ffffff;
		text-shadow: 2rpx 2rpx 2rpx #7bad7b;
	}


	.top .even {
		margin-left: 60rpx;
	}


	/* 智能分类结束 */
</style>