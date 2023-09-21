<template>
	<!-- 搜索列表 -->
	<view class="search">
		<view class="content" v-for="(item,index) in news" @click="gotoNews(index)">
			<view class="text">
				<text class="title">{{item.lessonTitle}}</text>
				<text class="author">作者：{{item.lessonTeacher}}</text>
			</view>
			<image :src="item.lessonImage" alt="" />
		</view>
		<view class="content post" v-for="(item,index) in posts">
			<view class="text">
				<text class="title">{{item.postTitle}}</text>
				<text class="author">作者：{{item.postAuthor}}</text>
			</view>
			<image :src="item.lessonImage" alt="" />
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	const news = ref([])
	const posts = ref([])
	onLoad((res) => {
		const text = res.text 
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/Lesson/getAllLesson',
			method: 'GET',
			data: {},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.code == 200) {
					const results = res.data.data
					console.log(results)
					for (let i = 0; i < results.length; i++) {
						if (results[i].lessonTitle.indexOf(text) != -1) {
							console.log(results[i].lessonTitle)
							news.value.push({
								'lessonTitle': results[i].lessonTitle,
								'lessonTeacher': results[i].lessonTeacher,
								'lessonId': results[i].lessonId,
								'lessonImage': results[i].lessonImage
							})
						}
					}
					console.log(news.value)
				}
				console.log(res.data);
			},
			fail() {
				console.log("接口请求失败");
			}
		})
		// 查询帖子
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/TieZi/getAll',
			method: 'GET',
			data: {},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.code == 200) {
					const results = res.data.data
					console.log(results)
					for (let i = 0; i < results.length; i++) {
						if (results[i].title.indexOf(text) != -1) {
							// 获取用户
							uni.request({
								url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
								method: 'GET',
								data: {
									userId: results[i].id
								},
								header: {
									'Authorization': uni.getStorageSync('Authorization'),
									'content-type': 'application/x-www-form-urlencoded'
								},
								success: (res) => {
									if (res.data.code == 200) {
										console.log(res.data);
										posts.value.push({
											'postTitle': results[i].title,
											'postAuthor': res.data.data.userNickName,
											'postImage':res.data.data.userAvatar
										})
									}
								},
								fail() {
									console.log("接口请求失败");
								}
							})

						}
					}
					console.log(news.value)
				}
				console.log(res.data);
			},
			fail() {
				console.log("接口请求失败");
			}
		})
	})
	const gotoNews = (newsId) => {
		uni.navigateTo({
			url: '/pages/index/news?id=' + newsId
		})
	}
</script>

<style>
	/* 列表开始 */
	.search {
		margin: 30rpx auto;
		margin-top: 50rpx;
		width: 660rpx;
		padding: 30rpx 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		/* box-shadow: 6rpx 6rpx 10rpx #90909090; */

		.content {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #fcf3e1;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-bottom: 30rpx;
		}
		.post{
			/* background-color: #d5e7de; */
			background-color: #fcf3e1;
		}

		.content .text {
			width: 480rpx;
		}

		.content .text .title {
			display: block;
			font-size: 14px;
		}

		.content .text .author {
			font-size: 12px;
			display: block;
			margin-top: 20rpx;
		}

		.content>image {
			width: 200rpx;
			height: 150rpx;
			border-radius: 10rpx;

		}
	}

	/* 列表结束 */
</style>