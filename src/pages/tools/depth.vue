<template>
	<view class="depth" :style="'min-height:'+windowHeight+'rpx;'">
		<!-- 顶部 -->
		<myheader title='深度体验'></myheader>
		<!-- 体验工具 -->
		<view class="tool">
			<ClassTitle title="学习助手"></ClassTitle>
			<view class="content" :class="item.class" v-for="(item,index) in tools">
				<image :src='item.img' class="image" mode="aspectFit" />
				<view class="text">
					<text class="className">{{item.name}}</text>
					<view class="btn" v-if="item.to=='尚未解锁'">
						{{item.to}}
					</view>
				</view>
			</view>
		</view>
		<!-- 快速导航 -->
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
		<!-- 背景 -->
		<view class="bg1"></view>
		<view class="bg2"></view>
		<!-- <view class="bg3"></view> -->

		<!-- 底部 -->
		<Footer></Footer>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";
	import {
		onShow
	} from '@dcloudio/uni-app';
	import ClassTitle from '../class/component/title.vue'

	const tools = [{
		img: '../../static/image/icon/deep7.svg',
		name: 'AI创作',
		class: 'top',
		to:'前往查看'
	}, {
		img: '../../static/image/icon/deep1.png',
		name: '听歌识曲',
		class: 'mid',
		to:'前往查看'
	}, {
		img: '../../static/image/icon/deep2.png',
		name: '智能助手',
		class: 'end',
		to:'前往查看'
	}, {
		img: '../../static/image/icon/deep3.png',
		name: '影像诊断',
		class: 'top',
		to:'前往查看'
	}, {
		img: '../../static/image/icon/deep4.png',
		name: '课堂导航',
		class: 'mid',
		to:'尚未解锁'
	}, {
		img: '../../static/image/icon/deep6.svg',
		name: '作业辅助',
		class: 'end',
		to:'尚未解锁'
	}, {
		img: '../../static/image/icon/deep5.png',
		name: '论文查重',
		class: 'top',
		to:'尚未解锁'
	}, {
		img: '../../static/image/icon/deep8.svg',
		name: '视频寻源',
		class: 'mid',
		to:'尚未解锁'
	}]
	const list = ["超人工智能", "人工智能的监管", "AI与人类创造力", "AI在医疗保健中的应用", "人工智能的偏见和歧视", "情感计算", "人工智能的未来发展",
		"知识表示与推理", "机器人技术", "AI在自动驾驶中的应用"
	]

	const systemHeight = ref(getApp().globalData.systemInfo.windowHeight)
	const systemWidth = ref(getApp().globalData.systemInfo.windowWidth)
	const windowHeight = ref('')

	onShow(() => {
		windowHeight.value = Math.floor((750 / Number(systemWidth.value)) * Number(systemHeight.value) - 40)
	})

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
</script>

<style lang="scss">
	.depth {
		position: relative;
		background-color: #f3efee;
		font-size: 12px;
		// padding-bottom: 280rpx;
		padding-top: 40rpx;
		z-index: 0;

		// 学习助手
		.tool {
			position: relative;
			z-index: 100;
			width: 710rpx;
			margin: 0 auto;
			padding: 20rpx 0;
			display: flex;
			justify-content: left;
			flex-wrap: wrap;

			.content {
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


			.top {
				background-color: #f6f0e1;
			}


			.mid {
				margin-left: 40rpx !important;
				margin-right: 40rpx !important;
				background-color: #F9EBE9 !important;
			}


			.end {
				background-color: #dee3fc90 !important;
			}

			.content .image {
				width: 100rpx;
				height: 90rpx;
				display: block;
				margin-left: 14rpx;
			}

			.content .text {
				width: 100%;
			}

			/* 标题 */
			.content .className {
				display: block;
				margin-top: 10rpx;
				font-size: 14px;
				/* font-weight: 600; */
				margin-left: 14rpx;
			}

			.content .btn {
				margin: 0 auto;
				margin-top: 16rpx;
				font-size: 14px;
				background-color: rgb(199, 199, 199);
				color: #ffffff;
				line-height: 1.4rem;
				width: 80%;
				border-radius: 10rpx;
				text-align: center;
			}
		}

		// 话题
		.classify {
			position: relative;
			z-index: 100;

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

		}

		// 背景色
		.bg1 {
			position: absolute;
			z-index: -1;
			background-color: #c9d4e730;
			width: 500rpx;
			height: 500rpx;
			border-radius: 250rpx;
			top: 150rpx;
			right: -200rpx;
		}

		.bg2 {
			position: absolute;
			z-index: -10;
			background-color: #c9d4e730;
			width: 760rpx;
			height: 760rpx;
			border-radius: 380rpx;
			bottom: 0rpx;
			left: -380rpx;
		}

		.bg3 {
			position: absolute;
			z-index: -1;
			background-color: #c9d4e730;
			width: 440rpx;
			height: 440rpx;
			border-radius: 220rpx;
			bottom: 0rpx;
			right: -200rpx;
		}
	}
</style>