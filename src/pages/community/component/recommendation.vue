<template>
	<view class="recommend">
		<titleItem title="热门话题"></titleItem>
		<scroll-view class="top" scroll-x='true'>
			<view class="content">
				<view class="btn" v-for="(item,index) in 5">
					#{{titles[index]}}
				</view>
			</view>
			<view class="content even">
				<view class="btn" v-for="(item,index) in 5">
					#{{titles[index+5]}}
				</view>
			</view>
		</scroll-view>
		<titleItem title="大家都在聊"></titleItem>
		<view class="public">
			<view class="hot">
				<!-- 标题 -->
				<view class="title">
					<view class="left">
						<image src="@/static/image/icon/hot.svg" alt="" />
						<text>热门</text>
					</view>
					<view class="right">
						<text>更多</text>
						<image src="@/static/image/icon/right.svg" alt="" />
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
				<view class="item" v-for="(info,index) in postList">
					<image :src="info.img" mode="" />
					<view class="info">
						<text class="name">{{info.name}}</text>
						<text class="text">{{info.text}}</text>
						<!-- 书籍 -->
						<view class="book">
							<image :src="info.bookImg" alt="" />
							<view class="bookname">
								<div class="itemBook">{{info.book}}</div>
								<div class="itemAuthor">{{info.total}}</div>
							</view>
							<view class="itemBtn">
								去阅读
								<image src="@/static/image/icon/Right.svg" alt="" />
							</view>
						</view>
						<view class="btnGroup">
							<image class='btn' src="@/static/image/icon/appreciate_fill.svg" alt="" />
							<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
							<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
							<image class='btn btn2' src="@/static/image/icon/share_grey.svg" alt="" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	import titleItem from "./title.vue"
	const titles = ["超人工智能", "AI与人类创造力", "AI在自动驾驶中的应用", "情感计算", "人工智能的未来发展",
		"知识表示与推理", "AI在医疗保健中的应用", "机器人技术", "人工智能的监管", "人工智能的偏见和歧视"
	]
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
		title: "人工智能的就业影响",
		tag: "爆"
	}, {
		num: 4,
		title: "各界人士AI普及度",
		tag: "热"
	}, {
		num: 5,
		title: "智能世界史",
		tag: "新"
	}]
	const postList = [{
		name: "志云",
		img: "../../static/image/icon/userimg2.svg",
		total: '共十章',
		text: "尽管人工智能的发展如火如荼，但书中并未过分乐观，而是提醒我们关注未来的变革。",
		book: "人工智能时代",
		bookImg: "http://www.a-puppy-c.top/smartLearning/book1.jpg",
		num: 12,
		bookid: 1
	}, {
		name: "鹿遥",
		img: "../../static/image/icon/userimg1.svg",
		text: "这本书的逻辑清晰，让我深入了解了人工智能的发展和可能的前景。",
		book: "人工智能简史",
		total: '共十二章',
		bookImg: "http://www.a-puppy-c.top/smartLearning/book2.jpg",
		num: 11,
		bookid: 2
	}, {
		name: "何光",
		img: "../../static/image/icon/userimg3.svg",
		text: "展现了人工智能的巨大潜力和挑战，它不仅改变了我们的生活方式，也让我们对未来充满期待和思考。",
		total: '共十章',
		book: "人工智能时代",
		bookImg: "http://www.a-puppy-c.top/smartLearning/book1.jpg",
		num: 11,
		bookid: 1
	}]
</script>

<style scoped>
	.recommend {
		padding: 20rpx;
		padding-bottom: 100rpx;
		background-color: #f3efee;
	}

	/* 热门分类 */
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

	/* 热门分类结束 */

	/* 热门开始 */
	.public .hot {
		margin: 30rpx;
		padding: 20rpx;
		border-radius: 20rpx;

		background-color: #fef5e3;
		box-shadow: 2rpx 2rpx 4rpx #d3d3d3;
	}

	.public .hot .left {
		display: flex;
		align-items: center;
	}

	.public .hot .left image {
		width: 30rpx;
		height: 30rpx;
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

	.public .hot>.title .right image {
		width: 30rpx;
		height: 30rpx;
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

	.post .info {
		width: 520rpx;
		/* background-color: #7bad7b; */
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
	.post .item>image {
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
		margin-left: -20rpx;
		width: 520rpx;
		background-color: #ffffff;
		padding: 12rpx 16rpx;
		border-radius: 14rpx;
	}

	.post .item .book image {
		width: 86rpx;
		height: 120rpx;
		border-radius: 10rpx;
	}

	.post .item .book .itemBook {
		font-size: 12px;
		margin-bottom: 4rpx;
	}

	.post .item .book .bookname {
		margin-right: 100rpx;
	}

	.post .item .book .itemAuthor {
		font-size: 10px;
		color: #909090;
	}


	.post .item .book .itemBtn {
		background-color: #f3efee;
		padding: 6rpx;
		padding-left: 10rpx;
		border-radius: 20rpx;
		margin-left: 30rpx;
	}

	.post .item .book .itemBtn>image {
		width: 20rpx;
		height: 20rpx;
	}

	.post .btnGroup {
		position: relative;
	}

	.post .btnGroup .btn {
		width: 30rpx;
		height: 30rpx;
		display: inline-flex;
		margin-right: 20rpx;
		margin-top: 10rpx;
		border-radius: 4rpx;
		padding: 2rpx 4rpx;
	}

	.post .btnGroup .btn2 {
		position: absolute;
		right: 0;
	}

	/* 热门帖子结束 */
</style>