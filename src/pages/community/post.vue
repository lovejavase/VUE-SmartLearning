<template>
	<!-- 帖子详情 -->
	<view class="post">
		<!-- 标题 -->
		<myheader title='帖子详情'></myheader>
		<!-- 图片 -->
		<image :src="postDetail.img" mode="aspectFit"></image>
		<!-- 标题 -->
		<view class="poTitle">
			{{postDetail.title}}
		</view>
		<!-- 作者信息 -->
		<view class="author">
			<view class="uname">
				<image :src="postDetail.authorImg" mode=""></image>
				<text>{{postDetail.author}}</text>
			</view>
			<view class="btn">
				关注
			</view>
		</view>
		<!-- 简介 -->
		<view class="blurb">
			{{postDetail.blurb}}
		</view>
		<!-- 正文 -->
		<view class="content">
			<!-- 小标题 -->
			<text class="title">
				{{postDetail.reTitle}}</text>
			<!-- 正文 -->
			<text class="text">
				{{postDetail.content}}</text>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";
	const postDetail = ref({
		img: '../../static/image/days1.png',
		title: '人工智能时代大冲击',
		authorImg: '../../static/image/userImg1.png',
		author: '作者昵称',
		blurb: '人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击.',
		reTitle: '小标题',
		content: '人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击人工智能时代大冲击'

	})
</script>

<style>
	.post {
		padding-top: 50rpx;
	}

	/* 大图 */
	.post>image {
		margin: 20rpx auto;
		width: 100%;
		height: 340rpx;
		box-shadow: 1rpx 1rpx 10rpx #90909090;
	}

	/* 标题 */
	.post .poTitle {
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		margin: 20rpx 0;
	}

	/* 作者 */
	.author {
		width: 80%;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.author .uname {
		display: inline-flex;
		align-items: center;
	}

	.author .uname image {
		width: 80rpx;
		height: 80rpx;
		margin-right: 14rpx;
	}

	.author .btn {
		padding: 8rpx 10rpx;
		background-color: #90c9b4;
		border-radius: 10rpx;
		display: inline-flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 1rpx 1rpx 4rpx #5a7f71;
	}

	/* 简介 */
	.blurb {
		width: 84%;
		margin: 30rpx auto;
		padding: 8rpx;
		background-color: #f4f4f4;
		font-size: 14px;
	}

	/* 内容 */
	.content {
		width: 84%;
		margin: 30rpx auto;
		font-size: 14px;
	}

	.content>.title {
		display: block;
		font-weight: 600;
		margin-bottom: 20rpx;
	}
</style>