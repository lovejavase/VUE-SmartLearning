<template>
	<!-- 新闻详情页 -->
	<view class="newsList">
		<!-- 头部 -->
		<myheader title='推荐新闻'></myheader>
		<!-- 介绍 -->
		<view class="introduce">
			<text class="title">人工智能</text>
			<view class="bg">
				
			</view>
			<text class="text">此频道是人工智能基础知识概况之一，此频道是人工智能基
				础知识概况之一，此频道是人工智能基础知识概况之一。</text>
		</view>
		<!-- 列表 -->
		<view class="news">
			<view class="item" v-for="(item,index) in news" @click="gotoNews(index)">
				<view class="text">
					<text class="title">{{news[index].newTitle}}</text>
					<text class="author">作者：{{userName[index]}}</text>
				</view>
				<image src="@/static/image/knowledge1.png" alt="" />
			</view>
		</view>
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
	const news = ref([])
	const userName = ref([])

	onLoad(() => {
		getNews().then(res => {
			for (let j = 0; j < res.length; j++) {
				news.value.push(res[j])
			}
			// 根据新闻的用户id获取用户名
			for (var i = 0; i < news.value.length; i++) {
				getUser(news.value[i].newUser).then(res => {
					userName.value.push(res.userNickName)
				})
			}
			console.log(news.value)
		})
		console.log(news);

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
					limit: 10
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						// console.log(news);
						console.log("主页-调用selectAllNews成功");
						// 给news数组赋值
						// news = res.data.data;
						// console.log(news);
						resolve(res.data.data)
					} else {
						// console.log(res.data);
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
		width: 690rpx;
		background-color: #ffffff;
		box-shadow: 6rpx 6rpx 10rpx #90909090;
		border-radius: 10rpx;
		position: relative;
	}

	.introduce .bg{
		position: absolute;
		top: 22rpx;
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
		justify-content: space-around;
		align-items: center;
		background-color: #fcf3e1;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
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

	}

	/* 列表结束 */
</style>