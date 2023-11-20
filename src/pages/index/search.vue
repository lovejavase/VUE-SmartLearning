<template>
	<!-- 搜索列表 -->
	<view class="search">
		<view class="content" v-for="(item,index) in news" @click="gotoClass(item.lessonId)">
			<view class="text">
				<text class="title">{{item.lessonTitle}}</text>
				<text class="author">作者：{{item.lessonTeacher}}</text>
			</view>
			<image :src="item.lessonImage" alt="" mode="heightFix" />
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
	import request from '../../api/request.js'

	const news = ref([])
	const posts = ref([])

	onLoad((res) => {
		const text = res.text
		// 根据关键词查询课堂
		request({
			url: '/Smart/Lesson/getAllLesson'
		}).then(res => {
			if (res.code == 200) {
				const results = res.data
				// console.log(results)
				for (let i = 0; i < results.length; i++) {
					if (results[i].lessonTitle.indexOf(text) != -1) {
						news.value.push({
							'lessonTitle': results[i].lessonTitle,
							'lessonTeacher': results[i].lessonTeacher,
							'lessonId': results[i].lessonId,
							'lessonImage': results[i].lessonImage || ''
						})
					}
				}
			}
		})
		// 根据关键词获取帖子
		request({
			url: '/Smart/TieZi/getAll'
		}).then(res => {
			if (res.code == 200) {
				const results = res.data
				// console.log(results)
				for (let i = 0; i < results.length; i++) {
					if (results[i].title.indexOf(text) != -1) {
						// 获取用户
						request({
							url: '/Smart/User/getUser',
							data: {
								userId: results[i].id
							}
						}).then(user => {
							if (user.code == 200) {
								// console.log(res.data);
								posts.value.push({
									'postTitle': results[i].title,
									'postAuthor': user.data.userNickName,
									'postImage': user.data.userAvatar
								})
							}
						})
					}
				}
			}
		})

	})
	const gotoClass = (classId) => {
		uni.navigateTo({
			url: '/pages/class/course?id=' + classId
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

		.post {
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
			border-radius: 20rpx;
			overflow: hidden;

		}
	}

	/* 列表结束 */
</style>