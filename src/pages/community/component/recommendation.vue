<template>
	<view class="recommend">
		<titleItem title="热门话题"></titleItem>
		<view class="top">
			<view class="content">
				<view class="btn" v-for="(item,index) in 4">
					<image src="../../../static/image/icon/hot.svg" mode="aspectFit"></image>
					art
				</view>
			</view>
			<view class="content even">
				<view class="btn" v-for="(item,index) in 4">
					<image src="../../../static/image/icon/hot.svg" mode="aspectFit"></image>
					art
				</view>
			</view>
		</view>
		<titleItem title="大家都在聊"></titleItem>
		<view class="public">
			<view class="hot">
				<!-- 标题 -->
				<view class="title">
					<view class="left">
						<img src="@/static/image/icon/hot.svg" alt="">
						<text>热门</text>
					</view>
					<view class="right">
						<text>更多</text>
						<img src="@/static/image/icon/right.svg" alt="">
					</view>
				</view>
				<!-- 内容 -->
				<view class="content" v-for="i in hotList">
					<text :class=" i.num==1?'num':''">{{i.num}}#</text>
					<text class="title">{{i.title}}</text>
					<text class="tag"
						:class="[i.tag=='爆'?'red':'',i.tag=='新'?'green':'',i.tag=='热'?'orange':'']">{{i.tag}}</text>
				</view>
			</view>
			<!-- 热门帖子 -->
			<view class="post">
				<view class="item" v-for="i in postList">
					<img src="@/static/image/userImg1.png" alt="">
					<view class="info">
						<text class="name">{{i.name}}</text>
						<text class="text">{{i.text}}</text>
						<!-- 书籍 -->
						<view class="book">
							<img src="@/static/image/book1.png" alt="">
							<view class="">
								<div class="itemBook">地平线2025:人工智能来了</div>
								<div class="itemAuthor">共12章</div>
							</view>
							<view class="itemBtn">
								<img src="@/static/image/icon/Right.svg" alt="">
								去阅读
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import titleItem from "./title.vue"
	const hotList = [{
		num: 1,
		title: "改变世界的百大科技",
		tag: "爆"
	}, {
		num: 2,
		title: "未来的智能是什么样的？",
		tag: "爆"
	}, {
		num: 3,
		title: "维特根斯坦",
		tag: "爆"
	}, {
		num: 4,
		title: "智能世界史",
		tag: "热"
	}, {
		num: 5,
		title: "各界人士AI普及度",
		tag: "新"
	}]
	const postList = [{
		name: "AC",
		img: "",
		text: "各类智能化产品已经成为人类生活当中不可或缺的一部分。智能手机、电脑、数控电器.....",
		book: "地平线2025：人工智能来了",
		bookImg: "",
		num: 12
	}, {
		name: "vvd",
		img: "",
		text: "评价内容.....",
		book: "书名",
		bookImg: "",
		num: 11
	}, {
		name: "Vvd",
		img: "",
		text: "评价内容.....",
		book: "书名",
		bookImg: "",
		num: 11
	}]
</script>

<style scoped>
	.recommend {
		padding: 20rpx;
	}
	/* 热门分类 */
	.top {
		width: 600rpx;
		padding: 20rpx 0;
		margin: 0 auto;
		margin-left: 20rpx;
		padding-bottom: 30rpx;
		font-size: 14px;
	}
	
	.top .content {
		width: 100%;
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.top .content .btn {
		display: inline-flex;
		align-items: center;
	}
	
	.top .content image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 4rpx;
	}
	
	.top .even {
		margin-left: 48rpx;
	}
	/* 热门分类结束 */

	/* 热门开始 */
	.public .hot {
		margin: 30rpx;
		padding: 20rpx;
		border-radius: 20rpx;

		background-color: #fef5e3;
	}

	.public .hot .left {
		display: flex;
		align-items: center;
	}

	.public .hot .left img {
		width: 30rpx;
		margin-right: 10rpx;
	}

	.public .hot>.title {
		font-size: 14px;
		display: flex;
		justify-content: space-between;
	}

	.public .hot>.title .right {
		display: flex;
		align-items: center;
	}

	.public .hot>.title .right img {
		width: 30rpx;
	}

	.public .hot .content {
		margin: 10rpx 0;
		display: flex;
		align-items: center;
	}

	.public .hot .content .num {
		color: #de4200;
	}

	.public .hot .content .title {
		margin: 0 10rpx;
		font-size: 14px;
	}

	.public .hot .content .tag {
		font-size: 12px;
		color: #ffffff;
		padding: 0 4rpx;

		border-radius: 4rpx;
	}

	.red {
		background-color: #f54d00;
	}

	.green {
		background-color: #8fc98f;
	}

	.orange {
		background-color: #ff9122;
	}

	/* 热门结束 */
	/* 热门帖子开始 */
	.post {
		margin: 30rpx;
		margin-bottom: 0;

	}

	.post .item {
		padding: 20rpx 0;
		display: flex;
		font-size: 12px;
		margin: 0 auto;
		width: 650rpx;
		/* background-color: #8fc98f90; */
	}

	/* 头像 */
	.post .item>img {
		width: 80rpx;
		height: 80rpx;
		padding: 6rpx 0;
		margin-right: 20rpx;
	}

	.post .item .name {
		display: block;
		margin-bottom: 6rpx;
		font-size: 14px;
		/* font-weight: 600; */
	}

	.post .item .text {
		color: #252525;
	}

	/* 书籍 */
	.post .item .book {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 16rpx;
		width: 510rpx;
		background-color: #ffffff;
		padding: 6rpx 10rpx;
		border-radius: 14rpx;
	}

	.post .item .book img {
		width: 60rpx;
		border-radius: 10rpx;
	}

	.post .item .book .itemBook {
		font-size: 12px;
		margin-bottom: 4rpx;
	}

	.post .item .book .itemAuthor {
		font-size: 10px;
		color: #909090;
	}


	.post .item .book .itemBtn {
		background-color: #f3efee;
		padding: 6rpx;
		padding-right: 10rpx;
		border-radius: 20rpx;
		margin-left: 30rpx;
	}

	.post .item .book .itemBtn>img {
		width: 20rpx;
	}

	/* 热门帖子结束 */
</style>