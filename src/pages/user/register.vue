<template>
	<!-- 注册页 -->
	<view class="register">
		<view class="bg">
			<text class="text1">注册</text>
			<text class="text2">欢迎加入！</text>
		</view>
		<!-- 		<view class="text">
			<text>欢迎加入！</text>
		</view> -->
		<view class="input">
			<view class="box">
				<input v-model="account" placeholder="请输入您的邮箱或手机号">

			</view>
			<view class="box">
				<input v-model="pwd" :password="pwdShow" placeholder="请输入您的密码">
				<image src="@/static/image/icon/eye.svg" mode="" @click="changePassword"></image>
			</view>
			<view class="box">
				<input v-model="rePwd" :password="rePwdShow" placeholder="请输入您的密码">
				<image src="@/static/image/icon/eye.svg" mode="" @click="changeRePassword"></image>
			</view>
		</view>
		<text class="login" @click="gotoLogin">已有账户？登录</text>
		<view class="btn" @click='register'>
			<text>注册</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import request from '../../api/request';
	const account = ref('')
	const pwd = ref('')
	const rePwd = ref('')
	const rePwdShow = ref(true)
	const pwdShow = ref(true)

	let changeRePassword = () => {
		rePwdShow.value = !rePwdShow.value
	}
	let changePassword = () => {
		pwdShow.value = !pwdShow.value
	}
	let gotoLogin = () => {
		uni.navigateTo({
			url: '/pages/user/login'
		})
	}
	const register = () => {
		if (account.value == '' || pwd.value == '') {
			console.log("账号或密码不能为空");
			uni.showToast({
				title: '账号或密码不能为空！',
				icon: "error"
			})
		} else {
			if (pwd.value == rePwd.value) {
				request({
					url: '/Smart/User/register',
					method: 'POST',
					data: {
						account: account.value,
						pwd: pwd.value
					}
				}).then(res => {
					if (res.code == 0) {
						console.log("调用register成功");
						// 根据id获取用户信息
						request({
							url: '/Smart/User/getUser',
							data: {
								userId: res.data
							}
						}).then(user => {
							getApp().globalData.userDetail = user.data
						})
						uni.showToast({
							icon: 'success',
							title: '注册成功！'
						})
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/user/modify'
							})
						}, 400)
					} else if (res.code == -10007) {
						uni.showToast({
							title: '该账号已被注册！',
							icon: "error"
						})
					} else {
						console.log("调用register失败");
						// console.log(res);
					}
				})
			} else {
				console.log('密码不一致')
				uni.showToast({
					title: '密码不一致',
					duration: 1500,
					icon: 'error'
				})
			}
		}
	}
</script>

<style scoped>
	body {
		/* margin-top: 20rpx; */
	}

	.register {
		display: flex;
		align-items: center;
		flex-direction: column;
	}


	.bg {
		margin-top: 160rpx;
		padding-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.bg .text1 {
		margin-bottom: 20rpx;
		width: 300rpx;
		height: 300rpx;
		display: block;
		font-size: 90rpx;
		text-align: center;
		line-height: 300rpx;
		background: #15a0ac;
		border-radius: 250rpx;
		color: white;
	}

	.bg .text2 {
		color: black;
		display: block;
		/* width: 300rpx; */
		font-size: 60rpx;
		text-align: center;
		padding-left: 40rpx;
	}

	.input {
		margin-top: 70rpx;
		width: 560rpx;
	}

	.input .box {
		border-radius: 45rpx !important;
		overflow: hidden;
		border: #d6d6d6 1px solid;
		height: 90rpx;
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
	}

	.input .box input {
		width: 80%;
		margin: 0 20rpx;
	}

	.input .box image {
		width: 40rpx;
		height: 40rpx;
	}


	.login {
		display: block;
		margin-bottom: 30rpx;
		font-size: 12px;
	}

	.btn {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 560rpx;
		height: 70rpx;
		background-color: #f6e382;
		border: none;
		border-radius: 30rpx;
		color: white;
		font-size: 20px;
		text-shadow: 1rpx 1rpx 2rpx #b1a35e;
		font-weight: 600;
	}
</style>