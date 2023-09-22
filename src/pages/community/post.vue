<template>
	<!-- 帖子详情 -->
	<view class="post">
		<!-- 标题 -->
		<myheader title='帖子详情'></myheader>
		<!-- 图片 -->
		<!--  -->
		<view class="img" :style="'background-image: url('+img+');'">
			<image :src="img" mode="aspectFit"></image>
		</view>
		<!-- 标题 -->
		<view class="poTitle">
			{{postDetail.title}}
		</view>
		<!-- 作者信息 -->
		<view class="author">
			<view class="uname">
				<image :src="userImg" mode="aspectFill"></image>
				<text>{{userName}}</text>
			</view>
			<view class="btn">
				关注
			</view>
		</view>
		<!-- 简介 -->
		<!-- 		<view class="blurb">
			{{postDetail.blurb}}
		</view> -->
		<!-- 正文 -->
		<view class="content">
			<!-- 小标题 -->
			<text class="title">
				{{postDetail.reTitle}}</text>
			<!-- 正文 -->
			<text class="text">
				{{postDetail.content}}</text>
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
	const img = ref('../../static/image/knowledge1.png')
	const authorImg = ref('../../static/image/userImg1.png')
	const userName = ref('')
	const userImg = ref('')
	const postDetail = ref({})
	onLoad((re) => {
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/TieZi/getAll',
			method: 'GET',
			data: {
				// userId: res.postId
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.code == 200) {
					console.log("请求成功");
					for (let i = 0; i < res.data.data.length; i++) {
						if (res.data.data[i].id == ~~re.id) {
							postDetail.value = res.data.data[i]
							// console.log(postDetail.value)
						}
					}
				} else {
					console.log("请求失败");
					// console.log(res.data);
				}
			},
			fail() {
				console.log("接口请求失败");
			}
		})
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
			method: 'GET',
			data: {
				userId: re.user
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.code == 200) {
					console.log("请求成功");
					userName.value = res.data.data.userNickName
					userImg.value = res.data.data.userAvatar
				} else {
					console.log("请求失败");
					// console.log(res.data);
				}
			},
			fail() {
				console.log("接口请求失败");
			}
		})
	})
</script>

<style>
	.post {
		padding-top: 50rpx;
	}

	/* 大图 */
	.post>.img {
		margin: 50rpx auto;
		width: 90%;
		height: 300rpx;
		box-shadow: 1rpx 1rpx 10rpx #90909090;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		z-index: -1;
	}

	.post>.img image {
		width: 100%;
		height: 340rpx;
		margin: 0 auto;
		margin-top: -20rpx;
		backdrop-filter: blur(2px) ;
		background-color: rgba(245, 245, 245, 0.2);
	}

	/* 标题 */
	.post .poTitle {
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		margin: 20rpx 0;
	}

	/* 作者 */
	.author {
		width: 80%;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.author .uname {
		display: inline-flex;
		align-items: center;
	}

	.author .uname image {
		width: 80rpx;
		height: 80rpx;
		margin-right: 14rpx;
		border-radius: 40rpx;
	}

	.author .btn {
		padding: 8rpx 10rpx;
		background-color: #90c9b4;
		border-radius: 10rpx;
		display: inline-flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 1rpx 1rpx 4rpx #5a7f71;
	}

	/* 简介 */
	.blurb {
		width: 84%;
		margin: 30rpx auto;
		padding: 8rpx;
		background-color: #f4f4f4;
		font-size: 14px;
	}

	/* 内容 */
	.content {
		width: 84%;
		margin: 40rpx auto;
		font-size: 14px;
		line-height: 1.3rem;
	}

	.content>.title {
		display: block;
		font-weight: 600;
		margin-bottom: 20rpx;
	}
</style>