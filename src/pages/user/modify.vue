<template>
	<!-- 用户修改信息页 -->
	<view class="modify">
		<!-- 头部 -->
		<myheader title='个人资料'></myheader>
		<!-- 用户信息 -->
		<view class="content">
			<view class="item">
				<text class="text">头像</text>
				<image src="@/static/image/icon/round_people_fill.svg" alt="" />
			</view>
			<view class="item">
				<text class="text">用户名</text>
				<input class="my_input" v-model="uname" focus placeholder="输入您的用户名" />
			</view>
			<view class="item">
				<text class="text">id</text>
				<input class="my_input" v-model="uNumber" focus placeholder="修改您的id号" />
			</view>
			<view class="item">
				<text class="text">邮箱</text>
				<input class="my_input" v-model="uemail" focus placeholder="邮箱" />
			</view>
			<view class="item">
				<text class="text">电话</text>
				<input class="my_input" v-model="uphone" focus placeholder="输入您的电话" />
			</view>
		</view>
		<view class="btn" @click='modify'>
			保存
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";
	const userDetail = ref(getApp().globalData.userDetail)
	const userid = ref(userDetail.value.userId)
	const uname = ref(userDetail.value.userNickName)
	const uemail = ref(userDetail.value.userEmail)
	const uNumber = ref(userDetail.value.userNumber)
	const uphone = ref(userDetail.value.userPhone)
	const modify = () => {
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/User/updateUser',
			method: 'PUT',
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			data: {
				userId: userid.value,
				nickName: uname.value,
				number: uNumber.value || '2023090321',
				avatar: 'http://www.a-puppy-c.top/smartLearning/avatar.jpg',
				email: uNumber.value || '',
				phone: uphone.value || '',
				interest: '',
				grade: 1

			},
			success: (res) => {
				if (res.data.code == 0) {
					console.log("调用updateUser成功");
					uni.showToast({
						icon: 'success',
						title: '保存成功！'
					})
					setTimeout(() => {
						uni.redirectTo({
							url: '/pages/user/user'
						})
					}, 1000)
				} else {
					console.log("调用updateUser失败");
					console.log(res.data);
				}
			},
			fail() {
				console.log("请求失败");
			}
		})
	}
</script>

<style lang="scss">
	.modify {
		padding-top: 30rpx;

		.btn {
			width: 220rpx;
			height: 60rpx;
			background-color: #90c9b4;
			line-height: 60rpx;
			text-align: center;
			margin: 20rpx auto;
			border-radius: 30rpx;
			color: #fff;
			font-size: 18px;
		}

		.content {
			width: 640rpx;
			margin: 0 auto;
			padding: 20rpx;
			color: #15a0ac;

			.item .text {
				font-size: 16px;
			}

			.item {
				padding: 10rpx 0;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				border-bottom: #eeeeee solid 4rpx;
			}


			.item image {
				width: 100rpx;
				height: 100rpx;
				margin-right: 6rpx;
			}

			.item .my_input {
				margin-top: 14rpx;
				width: 640rpx;
				color: #515151;
				/* height: 40rpx; */
				/* background-color: #15a0ac; */
			}
		}
	}

	::v-deep .uni-input-wrapper {
		font-size: 12px;
	}
</style>