<template>
	<!-- 新闻详情页 -->
	<view class="newsList">
		<!-- 头部 -->
		<myheader title='推荐新闻'></myheader>
		<!-- 介绍 -->
		<view class="introduce">
			<text class="title">{{items[current]}}</text>
			<view class="bg">
			</view>
			<text class="text">{{title[current]}}</text>
			<!-- 此频道是人工智能基础知识概况之一，帮助人工智能小白了解人工智能，看看未来的影子，抓住机遇迎发展 -->
		</view>
		<!-- 分类按钮 -->
		<uni-segmented-control class="tab" :current="current" :values="items" activeColor="#8bc1ac" styleType="button"
			@clickItem="onClickItem"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="news">
					<view class="item" v-for="(item,index) in news1" @click="gotoNews(item.newsId)">
						<view class="text">
							<text class="title">{{item.newTitle}}</text>
							<text class="author">作者：{{item.userName}}</text>
						</view>
						<image :src="item.newImg" alt="" />
						<view class="button">
							查看
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="news">
					<view class="item" v-for="(item,index) in news2" @click="gotoNews(item.newsId)">
						<view class="text">
							<text class="title">{{item.newTitle}}</text>
							<text class="author">作者：{{item.userName}}</text>
						</view>
						<image :src="item.newImg" alt="" />
						<view class="button">
							查看
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<view class="news">
					<view class="item" v-for="(item,index) in news3" @click="gotoNews(item.newsId)">
						<view class="text">
							<text class="title">{{item.newTitle}}</text>
							<text class="author">作者：{{item.userName}}</text>
						</view>
						<image :src="item.newImg" alt="" />
						<view class="button">
							查看
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 3">
				<view class="news">
					<view class="item" v-for="(item,index) in news4" @click="gotoNews(item.newsId)">
						<view class="text">
							<text class="title">{{item.newTitle}}</text>
							<text class="author">作者：{{item.userName}}</text>
						</view>
						<image :src="item.newImg" alt="" />
						<view class="button">
							查看
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->

	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		ref
	} from "vue";
	const author = '昵称五个字'
	const title = ref([
		'人工智能（AI）已经成为当今科技创新的驱动力，其技术与应用已经涵盖了多个领域并深刻影响了我们的生活。此频道将介绍人工智能的最新技术以及它们在各个领域中的应用。',
		'自20世纪50年代人工智能概念（AI）首次提出以来，AI已经经历了近70年的发展历程。此频道将回望人工智能的发展历史，探讨AI未来为人类带来的更多便利和创新',
		'人工智能（AI）是一种变革性的技术，它已经并将继续为我们的生活和工作带来极大的便利和改变。此频道将介绍人工智能带来的变革，便捷人们的生活。',
		'人工智能（AI）在为人类带来巨大发展机遇的同时，也带来了各种风险和挑战。此频道将对这些风险和挑战展开介绍，积极探索解决方案。'
		
	])
	const news1 = ref([])
	const news2 = ref([])
	const news3 = ref([])
	const news4 = ref([])
	// const userName = ref([])

	const current = ref(0)
	const items = ref(['技术与应用', '过去与发展', '便利与改变', '风险与挑战'])

	const onClickItem = (e) => {
		if (current.value != e.currentIndex) {
			current.value = e.currentIndex;
		}
	}

	onLoad(() => {
		getNews().then(res => {
			for (let j = 0; j < res.length; j++) {
				// 根据新闻的用户id获取用户名
				getUser(res[j].newUser).then(user => {
					switch (res[j].newSort) {
						case '人工智能的技术与应用':
							news1.value.push({
								newsId: res[j].newId,
								newTitle: res[j].newTitle,
								userName: user.userNickName,
								newImg: res[j].newImg
							})
							break;
						case '人工智能的过去与发展':
							news2.value.push({
								newsId: res[j].newId,
								newTitle: res[j].newTitle,
								userName: user.userNickName,
								newImg: res[j].newImg
							})
							break;
						case '人工智能的便利与改变':
							news3.value.push({
								newsId: res[j].newId,
								newTitle: res[j].newTitle,
								userName: user.userNickName,
								newImg: res[j].newImg
							})
							break;
						case '人工智能的风险与挑战':
							news4.value.push({
								newsId: res[j].newId,
								newTitle: res[j].newTitle,
								userName: user.userNickName,
								newImg: res[j].newImg
							})
							break;
					}
				})
			}
		});

	})
	// 新闻跳转
	let gotoNews = (newsId) => {
		uni.navigateTo({
			url: '/pages/index/news?id=' + newsId
		})
	};

	let getNews = () => {
		console.log("开始调用查询新闻接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/New/selectAllNews',
				method: 'GET',
				data: {
					start: 0,
					limit: 30
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						// console.log(news);
						console.log("主页-调用selectAllNews成功");
						resolve(res.data.data)
					} else {
						console.log("主页-调用selectAllNews失败");
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
	// 根据新闻用户id获取用户名
	let getUser = (userid) => {
		console.log("开始调用查询用户接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
				method: 'GET',
				data: {
					userId: userid
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("主页-调用getUser成功");
						resolve(res.data.data)
					} else {
						console.log("主页-调用getUser失败");
						console.log(res.data);
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})

	}
</script>

<style>
	.newsList {
		padding-top: 30rpx;
		background-color: #f3efee;
	}

	::v-deep .header {
		background-color: #f3efee;
	}

	/* 介绍开始 */
	.introduce {
		margin: 20rpx auto;
		padding: 20rpx;
		margin-bottom: 30rpx;
		/* width: 720rpx; */
		background-color: #ffffff;
		box-shadow: 6rpx 6rpx 10rpx #90909090;
		/* border-radius: 10rpx; */
		position: relative;
	}

	.introduce .bg {
		position: absolute;
		top: 20rpx;
		left: 0;
		background-color: #87BAA8;
		width: 130rpx;
		height: 40rpx;
		border-radius: 0 20rpx 20rpx 0;
		z-index: 10;
	}

	.introduce .title {
		position: relative;
		display: block;
		font-size: 18px;
		margin-bottom: 10rpx;
		font-family: 'AlimamaShuHeiTi-Bold';
		z-index: 100;
	}

	.introduce .text {
		display: block;
		font-size: 14px;
		color: #909090;
	}

	/* 介绍结束 */

	/* 分类按钮开始 */
	.tab {
		width: 90%;
		margin: 20rpx auto;
	}

	/* 分类按钮结束 */

	/* 列表开始 */
	.news {
		margin: 30rpx auto;
		width: 660rpx;
		padding: 30rpx 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		box-shadow: 6rpx 6rpx 10rpx #90909090;
	}

	.news .item {
		display: flex;
		position: relative;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFAE8;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-bottom: 90rpx;
		/* margin-bottom: 30rpx; */
		box-shadow: 1rpx 1rpx 6rpx #e2decf;
	}

	.news .item .text {
		width: 480rpx;
	}

	.news .item .text .title {
		display: block;
		font-size: 14px;
	}

	.news .item .text .author {
		font-size: 12px;
		display: block;
		margin-top: 20rpx;
	}

	.news .item>image {
		width: 200rpx;
		height: 150rpx;
		border-radius: 10rpx;

	}

	.button {
		position: absolute;
		z-index: 100;
		top: 110px;
		right: 20rpx;
		color: white;
		text-align: center;
		line-height: 20px;
		height: 20px;
		width: 80px;
		border-radius: 5px;
		background-color: #4E999A;
	}

	/* 列表结束 */
</style>