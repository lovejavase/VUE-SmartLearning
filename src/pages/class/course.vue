<template>
	<!-- 课程详情页 -->
	<view class="course">
		<!-- 视频播放器 -->
		<video :src="classItem.lessonLink" controls class="video"></video>
		<!-- 后退和分享按钮 -->
		<view class="back">
			<view class="btn" link @click="back">
				<image src="@/static/image/icon/back_android.svg" alt="" />
			</view>
			<view class="btn" link>
				<image src="@/static/image/icon/share.svg" alt="" />
			</view>
		</view>
		<!-- 简介 -->
		<view class="content">
			<text class="title">{{classItem.lessonTitle}}</text>
			<view class="name">
				<!-- 图标 -->
				<image src="@/static/image/icon/people_fill.svg" alt="" />
				<text>{{classItem.lessonTeacher}}</text>
				<!-- 收藏功能 -->
				<view class="favor" link>
					<image src="@/static/image/icon/favor_fill.svg" alt="" />
					{{favor_score}}
				</view>
			</view>
			<text class="detail">{{classItem.lessonDetail}}</text>
			<view class="info">
				<img src="@/static/image/icon/attention_fill.svg" alt="">
				<text>{{info_watch}}</text>
				<text>语言：{{info_language}}</text>
				<text>发布时间：{{info_time}}</text>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="comment">
			<view class="input">
				<text class="title">热门评论</text>
				<!-- 输入框 -->
				<view class="topBottom">
					<input class="search" v-model="input" placeholder="写条评论吧" placeholder-style="font-size:14px" />
					<image @click="addRemark" src="@/static/image/icon/check.svg" mode=""></image>
				</view>
				<view class="more" link>
					查看更多
					<image src="@/static/image/icon/right.svg" alt="" />
				</view>
			</view>
			<!-- 用户评论 -->
			<view class="box">
				<view class="item" v-for="(item,index) in remark" :key="index">
					<image :src="item.userAvatar" alt="" class="remarkImg" />
					<view class="info">
						<text class="name">{{item.userNickName}}</text>
						<text class="time">{{item.time}}</text>
						<text class="text">{{item.text}}</text>
						<view class="btnGroup">
							<image class='btn' src="@/static/image/icon/appreciate_fill_light.svg" alt="" />
							<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
							<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
						</view>
					</view>
				</view>
			</view>
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
	const favor_score = "5.1"
	const info_watch = "1223"
	const info_language = "中文"
	const info_time = "2023.8.8 18:08"
	const input = ref("")
	const name = "用户123"
	const time = "08-09 18:08"
	const text = "人工智能的实践和应用应该是两个不同的概念。"

	// const classes = ref([])
	const classItem = ref({})
	const remark = ref([]) //评论
	const classId = ref() //课程id，实际的值应该+1
	

	let back = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	onLoad((res) => {
		classId.value = ~~res.id //id字符串转数字类型

		getAllLesson().then(res => {

			// 查询所有课程中id与页面传入id相同的课程
			for (let j = 0; j < res.length; j++) {
				console.log(res[j].lessonId)
				if (res[j].lessonId == classId.value) {
					classItem.value = res[j]
					break
				}
			}
			selectRemarkByLesson(classId.value).then(res => {
				for (let i = 0; i < res.length; i++) {
					remark.value.push(res[i])
				}
				// console.log(remark.value)
			})
		})
	})
	// 查询所有课程
	let getAllLesson = () => {
		return new Promise((resolve, reject) => {
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
	// 根据课程id查询评论
	let selectRemarkByLesson = (classId) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Lesson/selectRemarkByLesson',
				method: 'GET',
				data: {
					lessonId: classId
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(classId)
						console.log("selectRemarkByLesson请求成功");
						resolve(res.data.data)
					} else {
						console.log("selectRemarkByLesson请求失败");
					}
					// console.log(res.data);
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}

	// 增加评论接口

	let addRemark = () => {
		return new Promise((resolve, reject) => {
			const userId = getApp().globalData.userDetail.userId
			if (userId == undefined) {
				console.log('请登录')
				uni.showToast({
					title: "请先登录才能发表评价"
				})
				// 跳转等登录页面
				uni.navigateTo({
					url: '/pages/user/user'
				})
			}
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Lesson/appearRemark',
				method: 'Post',
				data: {
					lessonId: classId.value,
					lessonRemarkText: input.value,
					lessonRemarkUserId: userId
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 0) {
						console.log("addRemark请求成功");
						uni.showToast({
							title: "评价发表成功"
						})
						uni.
						resolve(res.data.data)
					} else {
						console.log("addRemark请求失败");
					}
					// console.log(res.data);
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
</script>

<style>
	.course {
		background-color: #f3f3f3;
		font-size: 12px;
	}


	/* 视频开始 */

	.video {
		width: 100%;
		height: 350px;
		z-index: 0;
	}

	/* 视频结束 */

	/* 分享和后退按钮开始 */
	.back {
		z-index: 100;
		position: fixed;
		top: 0;
		width: 710rpx;
		margin: 20rpx 20rpx;
		display: flex;
		justify-content: space-between;
		background-color: transparent;
	}

	.back .btn {
		background-color: #9e9e9e60;
		padding: 4rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
	}

	.back .btn image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 分享和后退按钮结束 */
	/* 简介开始 */
	.content {
		width: 690rpx;
		margin: 20rpx auto;
	}

	.content .title {
		font-size: 26px;
		font-weight: 600;
		display: block;
		font-weight: bolder;
		margin: 20rpx 0;
	}

	.content .name {
		margin: 10rpx 6rpx;
		color: #15a0ac;
		font-weight: 600;
		font-size: 16px;
		width: 320rpx;
		display: flex;
		justify-content: left;
		align-content: center;
	}

	.content .name text {
		margin: 0 26rpx;
	}

	.content .name image {
		width: 16px;
		height: 16px;
		margin-top: 6rpx;
	}

	.content .name .favor {
		background-color: #ffffff;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		font-size: 14px;
		padding: 4rpx 6rpx;
	}

	.content .name .favor image {
		width: 14px;
		height: 14px;
		margin-right: 6rpx;
		margin-bottom: 2rpx;
	}

	.content .info {
		color: #9e9e9e;
		display: flex;
		margin: 14rpx 0;
	}

	.content .info img {
		width: 12px;
	}

	.content .info :nth-child(3) {
		margin-left: 30rpx;
		margin-right: 60rpx;
	}

	.detail {
		display: block;
		width: 21rem;
		margin: 0 auto;
		font-size: 14px;
		line-height: 1.3rem;

	}

	/* 简介结束 */
	/* 评论区开始 */
	.comment {
		width: 690rpx;
		margin: 20rpx auto;
		font-size: 16px;
	}

	.comment .input {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin: 30rpx 0; */
	}

	.comment .input .title {
		font-weight: 600;
		display: block;
		width: auto;
		font-size: 15px;
	}

	/* 输入框 */
	.comment .topBottom {
		width: 380rpx;
		height: 50rpx;
		background-color: #ffffff;
		margin: 30rpx 10rpx;
		padding: 0 20rpx;
		border-radius: 25rpx !important;
		overflow: hidden;
		display: flex;
		align-items: center;
		font-size: 12px;
	}

	.comment .topBottom .search {
		width: 100%;
	}

	.comment .topBottom image {
		/* background-color: #90c9b4; */
		margin-left: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}

	/* 查看更多按钮 */
	.comment .input .more {
		font-size: 14px;
		color: #15a0ac;
	}

	.comment .input .more image {
		width: 14px;
		height: 14px;
	}

	/* 用户评论 */
	.comment .box .item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}

	.comment .box .item image {
		width: 80rpx;
		height: 80rpx;

	}

	.comment .box .item .info {
		width: 600rpx;
	}

	.comment .box .item .info .name,
	.time,
	.text {
		display: block;
		margin-left: 10rpx;
		font-size: 13px;
		line-height: 1.3rem;
	}


	.comment .box .item .info .time {
		color: #9e9e9e;
		margin-bottom: 10rpx;
	}

	/* 按钮组 */
	.comment .box .item .info .btnGroup {
		margin-top: 20rpx;
	}

	.comment .box .item .info .btn {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	.comment .box .item .info .btn img {
		width: 100%;
		height: 100%;
	}

	.remarkImg {
		border-radius: 20px;
	}

	/* 评论区结束 */
</style>