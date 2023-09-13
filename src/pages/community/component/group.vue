<template>
	<view class="group">
		<!-- 推荐圈子 -->
		<titleItem :title="groupTitle[0]"></titleItem>
		<view class="recommend">
			<view class="title">
				<text>推荐圈子</text>
				<img src="@/static/image/icon/hot.svg" alt="">
			</view>
			<view class="content">
				<img src="@/static/image/userImg1.png" alt="">
				<view class="text">
					<text class="name">好文章</text>
					<text>路人觉得真的很推荐</text>
					<view class="num">
						<img src="@/static/image/icon/group_fill.svg" alt="">
						<text>1234</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 我的圈子 -->
		<titleItem :title="groupTitle[1]"></titleItem>
		<view class="my">
			<view class="item">
				<image src="@/static/image/group1.png" mode=""></image>
				<text class="name">自然百科</text>
			</view>
			<view class="item">
				<image src="@/static/image/group3.png" mode=""></image>
				<text class="name">AI智能</text>
			</view>
			<view class="item">
				<image src="@/static/image/group2.png" mode=""></image>
				<text class="name">历史</text>
			</view>
		</view>
		<!-- 互动话题 -->
		<titleItem :title="groupTitle[2]"></titleItem>
		<view class="talk">
			<view class="item" v-for="info in talkList">
				<text class="title">{{info.title}}</text>
				<view class="content">
					<img src="@/static/image/userImg1.png" alt="">
					<view class="">
						<text class="name">{{info.name}}</text>
						<text class="text">“{{info.text}}”</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import titleItem from "./title.vue"

	const groupTitle = ["推荐圈子", "我的圈子", "互动话题"]
	const my = [{
		name: "自然百科",
		img: '@/static/image/group1.png'
	}, {
		name: "AI智能",
		img: '@/static/image/group2.png'
	}, {
		name: "历史",
		img: '@/static/image/group3.png'
	}]
	// console.log(my[0])
	const talkList = [{
			title: "#你认为未来的智能是怎样的？",
			name: "用户名1",
			img: "@/static/image/userImg1.png",
			text: "为社会服务，方便生活，创造价值。"
		},
		{
			title: "#人工智能会反抗？",
			name: "用户名2",
			img: "@/static/image/userImg1.png",
			text: "话题内容2"
		}
	]
</script>

<style>
	.group {
		padding: 20rpx;
		width: 710rpx;
		font-size: 12px;
	}

	/* 推荐圈子开始 */
	.group .recommend {
		width: 590rpx;
		background-color: #f6d95f20;;
		padding: 20rpx 40rpx;
		margin: 20rpx;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
	}

	.group .recommend .title {
		display: flex;
		font-size: 16px;
	}

	/* 火热图标 */
	.group .recommend .title img {
		width: 16px;
		margin-left: 10rpx;
	}

	.group .recommend .content {
		display: flex;
		/* align-items: center; */
		padding-top: 20rpx;
	}

	/* 圈子图片 */
	.group .recommend .content>img {
		width: 110rpx;
		height: 110rpx;
		/* margin-top: 20rpx; */
	}

	/* 中间简介 */
	.group .recommend .content .text {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.group .recommend .content .text .name {
		font-size: 14px;
		display: block;
		margin-bottom: 10rpx;
	}



	.group .recommend .content .num {
		display: flex;
		align-items: center;
		justify-content: right;
		width: 470rpx;
		margin-top: -10rpx
	}

	.group .recommend .content .num img {
		width: 50rpx;
	}

	/* 推荐圈子结束 */
	/* 我的圈子开始 */
	.group .my {
		padding: 20rpx 30rpx;
		margin: 10rpx auto;
		/* width: 660rpx; */
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		/* margin: 20rpx; */
	}

	.group .my .item {
		/* background-color: #15a0ac60; */
		width: 180rpx;
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.group .my .item image {
		width: 180rpx;
		height: 200rpx;
	}

	.group .my .item .name {
		position: fixed;
		font-size: 16px;
		font-weight: 500;
		color: #ffffff;
		text-shadow: 10rpx 10rpx 6rpx #252525, -4rpx -4rpx 6rpx #252525;
		/* text-shadow: 12rpx 12rpx 6rpx #252525,-4rpx -4rpx 6rpx #252525 ; */
	}

	/* 我的圈子结束 */
	/* 互动话题开始 */
	.group .talk {
		margin: 0 auto;
		margin-top: 20rpx;
		padding: 0 20rpx;
	}

	.group .talk .item {
		margin-top: 30rpx;
		padding: 30rpx 40rpx;
		width: 590rpx;
		background-color: #90c9b4;
		border-radius: 20rpx;
	}

	.group .talk .item .title {
		font-size: 14px;
		/* font-weight: 600; */
		color: #fff0b0;
		display: block;
		margin-bottom: 20rpx;
	}

	.group .talk .item img {
		width: 100rpx;
	}

	.group .talk .item .content {
		display: flex;
		align-items: center;
		margin: 20rpx 0;
		color: #ffffff;
	}

	.group .talk .item .content .name {
		display: block;
		font-size: 14px;
		margin-left: 18px;
	}

	.group .talk .item .content .text {
		display: block;
		font-size: 12px;
		margin-left: 6px;
		margin-top: 20rpx;
	}

	/* 互动话题结束 */
</style>