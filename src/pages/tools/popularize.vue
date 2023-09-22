<template>
	<!-- 知识科普主页面 -->
	<view class="popularize">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="hText"></ClassHeader>
		<!-- 大图 -->
		<image class="carImg" src="@/static/image/banner4.png" />
		<!-- 知识科普 -->
		<view class="knowledge">
			<ClassTitle :title="title[0]"></ClassTitle>
			<scroll-view class="navscroll" scroll-x>
				<view class="content" v-for="(item, index) in knowledge" :key="index">
					<image :src="item.img" class="image" />
					<view class="text">
						<text class="className">{{item.title}}</text>
						<view class="info">
							<text class="name">共{{item.cha}}章</text>
							<view class="itemBtn">
								去查看
								<image src="../../static/image/icon/right_grey.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 大咖科普 -->
		<view class="famous">
			<ClassTitle :title="title[1]"></ClassTitle>
			<scroll-view class="navscroll" scroll-x>
				<view class="item" v-for="(item, index) in famousImg" :key="index">
					<image :src="item" alt="" />
				</view>
			</scroll-view>
		</view>
		<!-- 智能分类 -->
		<view class="classify">
			<ClassTitle :title="title[2]"></ClassTitle>
			<scroll-view class="top" scroll-x='true' :scroll-left="scrollx">
				<view class="content">
					<view class="btn" v-for="(item,index) in 4">
						#{{titles[index]}}
					</view>
				</view>
				<view class="content even">
					<view class="btn" v-for="(item,index) in 4">
						#{{titles[index+4]}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		UserFilled,
		ArrowRight,
		View as IconView
	} from '@element-plus/icons-vue'
import { ref } from 'vue';
	import ClassHeader from '../class/component/header.vue'
	import ClassTitle from '../class/component/title.vue'

	const hText = "知识科普"
	const searchText = "搜索功能"
	const title = ["知识科普", "大咖科普", "智能分类"]
	const titles = ["AI的普及和发展趋势", "机器学习", "AI对就业和社会的影响", "人工智能在农业中的应用", "智能控制", "AI与人类智能的关系", "智能世界史", "人工智能与机器人法律"]
	const famousImg = ["../../static/image/famous1.png", "../../static/image/famous2.png"]
	const knowledge = [{
		title: 'AI技术：自然语言处理',
		cha: '6',
		img: '../../static/image/knowledge1.png'
	}, {
		title: '视觉：是一种人工智能的应用',
		cha: '12',
		img: '../../static/image/knowledge2.png'
	}, {
		title: '机器学习：对数据进行处理',
		cha: '8',
		img: '../../static/image/knowledge3.png'
	}]

	// 滚动
	const scrollx =  ref(0)
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

</script>

<style>
	.popularize {
		background-color: #f3efee;
		font-size: 12px;
		padding-top: 40rpx;
	}

	/* 大图 */
	.carImg {
		display: block;
		width: 690rpx;
		height: 300rpx;
		margin: 20rpx auto;
	}

	/* 知识科普开始 */
	.knowledge {
		width: 710rpx;
		margin: 0 auto;
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.knowledge .navscroll {
		white-space: nowrap;
		width: 680rpx;
		margin: 0 auto;
		/* height: 194px; */
	}

	.knowledge .content {
		display: inline-block;
		border-radius: 20rpx;
		margin-top: 14rpx;
		/* 斜体 */
		font-style: italic;
		width: 280rpx;
		margin-right: 20rpx;
		padding-bottom: 6rpx;
		background-color: #ffffff;
	}

	.knowledge .content .image {
		width: 100%;
		height: 230rpx;
		display: block;
	}

	.knowledge .content .text {
		margin: 4rpx auto;
		width: 90%;
	}

	.knowledge .content .className {
		font-size: 14px;
		font-weight: 600;
	}

	.knowledge .content .row {
		margin-top: 2%;
	}

	.knowledge .content .icon {
		color: #909090;
		font-size: 12px;
	}

	.knowledge .content .name {
		font-size: 12px;
		color: #909090;
	}

	.knowledge .content .value {
		color: #90c9b4;
		font-size: 12px;
		font-weight: 600;
	}

	.knowledge .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.knowledge .itemBtn {
		width: 100rpx;
		background-color: #f3efee;
		padding: 6rpx 0;
		font-size: 12px;
		border-radius: 20rpx;
		display: inline-flex;
		padding-left: 8rpx;
	}

	.knowledge .itemBtn image {
		width: 30rpx;
		height: 30rpx;
	}

	/* 知识科普结束 */
	/* 大咖科普开始 */
	.famous {
		width: 710rpx;
		margin: 0 auto;
		padding: 4rpx 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.famous .navscroll {
		white-space: nowrap;
		width: 680rpx;
		margin: 20rpx auto;
		/* height: 194px; */
	}

	.famous .item {
		width: 460rpx;
		/* height: 400rpx; */
		display: inline-block;
		margin-right: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.famous .item image {
		width: 100%;
		height: 300rpx;
	}

	/* 大咖科普结束 */
	/* 智能分类开始 */
	.classify {
		/* width: 710rpx; */
		padding: 20rpx 0;
		padding-left: 20rpx;
		padding-bottom: 30rpx;
		font-size: 14px;
	}

	.top {
		white-space: nowrap;
		width: 100%;
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