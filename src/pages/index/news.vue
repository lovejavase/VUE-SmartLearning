<template>
	<!-- 新闻页 -->
	<view class="news">
		<!-- 头部 -->
		<myheader title='新闻详情'></myheader>
		<view class="content">
			<!-- 标题 -->
			<text class="title">{{news.newTitle}}</text>
			<!-- 图片 -->
			<image :src="news.newInImg" mode="aspectFill" />
			<text class="tip">与人工智能交谈</text>
			<!-- 正文 -->
			<view class="text">
				<!-- <text class="line">{{news[0].newTitle}}</text> -->
				<text class="info">{{news.newDetail}}</text>
			</view>
			<!-- 评价 -->
			<view class="comment">
				<!-- 输入框 -->
				<view class="topBottom">
					<input class="search" v-model="input" placeholder="写条评论吧..." placeholder-style="font-size:14px" />
					<image @click="" src="@/static/image/icon/send_white.svg" mode="aspectFit"></image>
				</view>
				<!-- 按钮 -->
				<view class="btnGroup">
					<image src="@/static/image/icon/comment_.svg" alt="" />
					<image src="@/static/image/icon/share_.svg" alt="" />
					<image v-if="isfavor" @click="favor" src="@/static/image/icon/favor_fill_red.svg" alt="" />
					<image v-if="!isfavor" @click="favor" src="@/static/image/icon/favor_green.svg" alt="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		onMounted,
		ref
	} from "vue";
	import request from '../../api/request.js'

	const input = ''
	var newsId = -1
	// const news = ref([{newTitle:'0',newDetail:'1'}])
	const news = ref({})
	const isfavor = ref(false)

	onLoad((res) => {
		newsId = ~~res.id //id字符串转数字类型
		// 获取新闻详情
		request({
			url: '/Smart/New/selectNewDetail',
			method: 'GET',
			data: {
				newId: newsId
			}
		}).then(res => {
			news.value = res.data
			console.log(res)
		})
	})
	const favor = () => {
		if (isfavor.value) {
			uni.showToast({
				title: '取消收藏！',
				duration: 500
			})
		} else {
			console.log(11)
			uni.showToast({
				title: '收藏成功！',
				duration: 500
			})
		}
		isfavor.value = !isfavor.value
	}
</script>

<style>
	.news {
		padding-top: 30rpx;
		/* width: 680rpx; */
		/* margin: 0 auto; */
	}

	.content {
		padding: 20rpx 50rpx;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
	}

	/* 标题 */
	.title {
		display: block;
		font-size: 20px;
		font-weight: bolder;
		font-family: "Helvetica Neue", "Arial", sans-serif;
		font-variant-ligatures: normal;
	}

	/* 大图 */
	.content>image {
		width: 100%;
		height: 320rpx;
		/* margin: 20rpx auto; */
		margin-top: 30rpx;
		/* border: #909090 1px solid; */
	}

	/* 大图备注 */
	.tip {
		width: 100%;
		margin-top: 10rpx;
		font-size: 12px;
		color: #909090;
		text-align: center;
	}

	/* 正文 */
	.text {
		width: 99%;
		margin-top: 30rpx;
		margin-bottom: 120rpx;
	}

	.text .line {
		display: block;
		font-size: 16px;
	}

	.text .info {
		display: block;
		font-size: 17px;
		line-height: 1.5rem;
		margin-top: 20rpx;
	}

	/* 评论区开始 */
	/* 输入框 */
	.comment {
		width: 750rpx;
		position: fixed;
		z-index: 1;
		bottom: 0;
		left: 0;
		margin-top: 50rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-top: #c5c5c5 1px solid;
		padding: 20rpx 0;
		background-color: #ffffff;

	}

	.comment .topBottom {
		width: 360rpx;
		height: 70rpx;
		padding: 0 20rpx;
		border-radius: 30rpx !important;
		background-color: #ececec;
		overflow: hidden;
		color: #515151;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}


	.comment .topBottom image {
		/* background-color: #90c9b4; */
		margin-left: 10rpx;
		width: 80rpx;
		height: 80rpx;
	}

	/* 点赞按钮 */
	.comment .btnGroup {
		width: 260rpx;
		display: flex;
		justify-content: space-around;
	}

	.comment .btnGroup image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 评论区结束 */
</style>