<template>
	<!-- 足迹 -->
	<view class="history">
		<!-- 头部 -->
		<myheader title='足迹'></myheader>
		<!-- 内容 -->
		<text class="day">今天</text>
		<view class="content" v-for="item in day1" @click='gotoNews(item.newid)'>
			<image :src="item.img" mode="aspectFill" alt="" />
			<view class="box-card">
				<div class="itemTitle">{{item.title}}</div>
				<div class="itemName">{{item.sort}}</div>
			</view>
		</view>
		<text class="day">更早</text>
		<view class="content" v-for="item in day2">
			<image :src="item.img" mode="aspectFill" alt="" />
			<view class="box-card">
				<div class="itemTitle">{{item.title}}</div>
				<div class="itemName">{{item.sort}}</div>
			</view>
		</view>

	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	const day1 = [{
		title: '阿里云通义千问开源！70亿参数模型上线魔搭社区',
		img: "https://img.cnmo.com/2157_400x250/2156793.png",
		sort: "人工智能的过去与发展",
		newid: 3
	}, {
		title: 'AMD：将推出用于AI处理的高性能半导体 追赶英伟达',
		img: "https://img.cnmo.com/2155_600x1000/2154807.jpg",
		sort: "人工智能的便利与改变",
		newid: 5
	}]
	const day2 = [{
		title: '天风证券赵晓光：智能手机仍是一个被严重低估的行业',
		img: 'https://img.cnmo.com/2157_600x1000/2156713.jpg',
		sort: '人工智能的技术与应用',
		newid: 4
	}, {
		title: '面向网络文学领域 阅文集团发布“阅文妙笔”大模型',
		img: 'https://img.cnmo.com/2155_600x1000/2154197.png',
		sort: '人工智能的技术与应用',
		newid: 9
	}, {
		title: "“蚁天鉴”发布 国内首个大模型安全一体化解决方案亮相",
		img: "https://img.cnmo.com/2165_400x250/2164042.png",
		sort: "人工智能的便利与改变",
		newid: 17
	}, {
		title: '腾讯发布智驾云图 将与车企共建汽车行业大模型',
		img: 'https://img.cnmo.com/2164_600x1000/2163561.jpg',
		sort: '人工智能的便利与改变',
		newid: 13,
	}, {
		title: "被用户吐槽ChatGPT-4性能变差 OpenAI回应：有所改善",
		img: "https://img.cnmo.com/2155_400x250/2154497.jpg",
		sort: "人工智能的风险与挑战",
		newid: 7
	}]
	// 新闻跳转
	let gotoNews = (newsId) => {
		uni.navigateTo({
			url: '/pages/index/news?id=' + newsId
		})
	};
</script>

<style>
	.history {
		padding-top: 30rpx;
	}

	/* 日期标题 */
	.history .day {
		font-size: 14px;
		display: block;
		margin: 20rpx 50rpx;
		color: #515151;
	}

	/* 内容 */
	.history .content {
		width: 670rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 0 10rpx;
	}

	.history .content image {
		width: 40%;
		max-height: 180rpx;
		margin: 0 20rpx;
		border-radius: 20rpx;
	}

	.history .box-card {
		width: 60%;
		/* height: 210rpx; */
		border: none;
	}

	.history .itemTitle {
		font-size: 13px;
		/* margin: 4rpx 0; */
	}

	.history .itemName {
		font-size: 12px;
		color: #909090;
		margin: 12rpx 0;
	}
</style>