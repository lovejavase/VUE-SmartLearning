<template>
	<view class="attention">
		<!-- 顶部样式 -->
		<view class="topStyle">
			<!-- <image class="img1" src="@/static/image/userImg1.png" alt="" />
			<image class="img2" src="@/static/image/userImg1.png" alt="" />
			<image class="img3" src="@/static/image/userImg1.png" alt="" />
			<image class="img4" src="@/static/image/userImg1.png" alt="" />
			<image class="img5" src="@/static/image/userImg1.png" alt="" /> -->
			<image class="img" src="@/static/image/attention.png" alt="" />
		</view>
		<text>和志趣相投的朋友遨游智能的海洋吧！</text>
		<view class="item" v-for="(post,index) in postList">
			<view class="user">
				<image :src="userImg[index]" alt="" />
				<view class="">
					<text class="name">{{userName[index]}}</text>
					<text class="num">内容：{{content[index]}}</text>
					<text class="fans">粉丝：{{fans[index]}}</text>
				</view>
				<view class="btn">已关注</view>
			</view>
			<view class="content" @click="gotoDetail(post.id,post.userId)">
				<text class="text">{{post.title}}</text>
				<text class="author">作者：{{userName[index]}}</text>
				<view class="btnGroup">
					<image class='btn' src="@/static/image/icon/appreciate_fill.svg" alt="" />
					<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
					<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
				</view>
			</view>
			<!-- <view class="borderbottom">
			</view> -->
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
	const postList = ref([])
	const userName = ref([])
	const userImg = ref([])
	const content = ref([])
	const fans = ref([])
	const zan = ref([0, 1, 1])
	// let click=(cla)=>{
	// 	if
	// }
	let gotoDetail = (postId, userId) => {
		uni.navigateTo({
			url: '/pages/community/post?id=' + postId + '&user=' + userId
		})
	}
	onLoad(() => {
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
					console.log("请求成功");
					for (let i = 0; i < res.data.data.length; i++) {
						postList.value.push(res.data.data[i])
						content.value.push(Math.floor(Math.random() * 5 + 1))
						fans.value.push(Math.floor(Math.random() * 5 + 1))
						// 获取用户
						uni.request({
							url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
							method: 'GET',
							data: {
								userId: res.data.data[i].userId
							},
							header: {
								'Authorization': uni.getStorageSync('Authorization'),
								'content-type': 'application/x-www-form-urlencoded'
							},
							success: (res) => {
								if (res.data.code == 200) {
									console.log("getUser请求成功");
									userName.value.push(res.data.data.userNickName)
									userImg.value.push(res.data.data.userAvatar)
								} else {
									console.log("getUser请求失败");
									// console.log(res.data);
								}
							},
							fail() {
								console.log("接口请求失败");
							}
						})
					}
				} else {
					console.log("请求失败");
				}
			},
			fail() {
				console.log("接口请求失败");
			}
		})

	})
</script>

<style scoped>
	.attention {
		padding: 20rpx;
		padding-bottom: 100rpx;
		width: 710rpx;
		font-size: 12px;
		background-color: #f3efee;
	}

	/* 顶部样式开始 */
	.topStyle {
		width: 230rpx;
		height: 80rpx;
		border-radius: 25rpx;
		overflow: hidden;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		position: relative;
	}

	/* .topStyle image {
		width: 70rpx;
		height: 70rpx;
	} */
	.topStyle .img {
		width: 100%;
		height: 85%;
	}

	.topStyle .img1 {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
	}

	.topStyle .img2 {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 40rpx;
	}

	.topStyle .img3 {
		position: absolute;
		z-index: 3;
		top: 0;
		left: 80rpx;
	}

	.topStyle .img4 {
		position: absolute;
		z-index: 4;
		top: 0;
		left: 120rpx;
	}

	.topStyle .img5 {
		position: absolute;
		z-index: 5;
		top: 0;
		left: 160rpx;
	}

	.topStyle+text {
		width: 700rpx;
		margin: 10rpx auto;
		display: block;
		text-align: center;
		color: #909090;
		margin-bottom: 30rpx;
	}

	/* 顶部样式结束 */

	/* 帖子下边框 */
	.attention .item {
		/* margin-left: -20rpx; */
		margin-top: 10rpx;
		padding-bottom: 30rpx;
		/* width: 750rpx; */
		/* height: 10rpx; */
		border-bottom: #90c0b4 dashed 3rpx;
	}

	/* 用户信息开始 */
	.attention .user {
		display: flex;
		align-items: center;
		padding: 20rpx;
		position: relative;
	}

	.attention .user image {
		width: 80rpx;
		height: 80rpx;
		margin-right: 14rpx;
		border-radius: 40rpx;
	}

	.attention .user .name {
		display: block;
		margin-bottom: 6rpx;
		font-size: 14px;
	}

	.attention .user .num,
	.fans {
		color: #909090;
	}

	.attention .user .num {
		margin-right: 23rpx;
	}

	/* 关注按钮 */
	.attention .user .btn {
		/* margin-left: 200rpx; */
		font-size: 12px;
		background-color: #15a0ac90;
		color: #ffffff;
		/* text-shadow: 1rpx 1rpx 1rpx #90909090; */
		padding: 8rpx 16rpx;
		border-radius: 20rpx;
		position: absolute;
		right: 30rpx;
	}

	/* 用户信息结束 */
	/* 帖子内容开始 */

	.attention .content {
		margin: 0 auto;
		width: 620rpx;
		padding: 20rpx;
		background-color: #f6d95f20;
		border-radius: 20rpx;
		box-shadow: 2rpx 2rpx 6rpx #d6d6d6;
		/* border: #909090 1px solid; */
	}

	.attention .content .text {
		font-size: 14px;
		display: block;
		margin-bottom: 10rpx;
		min-height: 28px;
	}

	.attention .content .author {
		color: #909090;
		display: block;
		margin-bottom: 10rpx;
	}

	.attention .content .btn {
		width: 30rpx;
		height: 30rpx;
		display: inline-flex;
		margin-right: 20rpx;
		margin-top: 10rpx;
		border-radius: 4rpx;
		padding: 2rpx 4rpx;
	}

	/* 帖子内容结束 */
</style>