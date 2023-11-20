<template>
	<!-- 收藏页 -->
	<view class="collect">
		<!-- 头部 -->
		<myheader title='收藏'></myheader>
		<!-- 内容 -->
		<view class="content">
			<view class="card" v-for="(item,index) in classItem" :key="index" shadow="never"
				:body-style="{ padding: '0px' }">
				<image :src="item.lessonImage" mode="" class="image" />
				<view class="text">
					<text class="name">{{item.lessonTitle}}</text>
					<view class="bottom">
						<text class="tag">文章</text>
						<image src="@/static/image/icon/favor_fill_red.svg" mode="aspectFit" />
					</view>
				</view>
			</view>
		</view>
		<text class="tip">已全部加载完毕……</text>
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
	const collect = ref([])
	const classItem = ref([])

	onLoad((res) => {
		console.log(~~res.id)
		getCollection(~~res.id).then(res => {
			// console.log(res)
			for (let i = 0; i < res.length; i++) {
				collect.value.push(res[i]) //存id
				// 查询所有课程中id与页面传入id相同的课程
				getAllLesson().then(all => {
					for (let j = 0; j < all.length; j++) {
						if (all[j].lessonId == res[i].collectionLessonId) {
							// console.log(all[j])
							classItem.value.push(all[j])
						}
					}
					// console.log(classItem.value);
				})
			}
		})

	})
	// 查询课程  后续再根据id存储
	let getAllLesson = () => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://8.130.21.88:9999/Smart/Lesson/getAllLesson',
				method: 'GET',
				data: {},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("getAllLesson请求成功");
						resolve(res.data.data)
					} else {
						console.log("getAllLesson请求失败");
					}
					// console.log(res.data);
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
	// 根据id查询收藏列表
	let getCollection = (id) => {
		return new Promise((resolve, reject) => {
			console.log("开始调用getCollection")
			uni.request({
				url: 'http://8.130.21.88:9999/Smart/Collection/getCollection',
				method: 'GET',
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					userId: id
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("调用getCollection成功");
						resolve(res.data.data)
					} else {
						console.log("调用getCollection失败");
					}
					// console.log(res.data.data)
				},
				fail() {
					console.log("请求login失败");
				}
			})
		})
	}
</script>

<style>
	.collect {
		padding-top: 30rpx;
	}

	.content {
		margin: 10rpx auto;
		width: 690rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/* 斜体 */
		/* font-style: italic; */
	}

	.content .card {
		border-radius: 14rpx;
		width: 300rpx;
		margin: 10rpx 0;
		background-color: #ffffff;
		border: #c1c1c160 1rpx solid;
	}

	.content .image {
		width: 100%;
		height: 190rpx;
		display: block;
	}

	.content .text {
		margin: 8rpx 20rpx;
	}


	.content .name {
		font-size: 12px;
		display: block;
	}

	.content .bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 8rpx;
	}

	.content .bottom .tag {
		display: block;
		width: 50rpx;
		padding: 1rpx 6rpx;
		font-size: 10px;
		color: #e66464;
		border: #e66464 2rpx solid;
		border-radius: 4rpx;
	}

	.content .bottom>image {
		width: 34rpx;
		height: 34rpx;
	}

	.tip {
		color: #909090;
		font-size: 12px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		margin-top: 30rpx;
	}
</style>