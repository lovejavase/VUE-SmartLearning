<template>
	<!-- 登录页 -->
	<view class="register">
		<view class="bg">
			<text class="text1">登录</text>
			<text class="text2">欢迎回来！</text>
		</view>
		<view class="input">
			<view class="box">
				<input v-model="account" placeholder="请输入您的用户名">
			</view>
			<view class="box">
				<input v-model="pwd" :password="pwdShow" placeholder="请输入您的密码">
				<image src="../../static/image/icon/eye.svg" mode="" @click="changePassword"></image>
			</view>
		</view>
		<view class="choice">
			<label>
				<checkbox value="1" /><text>记住我</text>
			</label>
			<view text>忘记密码</view>
		</view>

		<view class="or">
			<text class="title">其它登录方式</text>
			<view class="other">
				<view class="orBtn">
					<image src="../../static/image/icon/wchat.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../static/image/icon/qq.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../static/image/icon/wb.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../static/image/icon/email.svg" mode=""></image>
				</view>
			</view>
		</view>
		<text class="login" @click="gotoRegister">没有账户？注册</text>
		<view class="btn" @click='gologin'>
			<text>登录</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		// createApp
	} from 'vue'
	import user from '../../api/user';
	const account = ref('')
	const pwd = ref('')
	const remember = ref('')
	const pwdShow = ref(true)
	var userid = 2
	// const userDetail = ref()
	// var islogin=false

	let changePassword = () => {
		pwdShow.value = !pwdShow.value
	}
	let gotoRegister = () => {
		uni.navigateTo({
			url: '/pages/user/register'
		})
	}
	let gotoUser = () => {
		uni.navigateTo({
			url: '/pages/user/user'
		})
	}
	let gotoAuthenticate = () => {
		uni.navigateTo({
			url: '/pages/user/authenticate'
		})
	}
	let gologin = () => {
		login().then(res => {
			getApp().globalData.userDetail = res.data
			if (res.code == 200) {
				//登录成功
				gotoUser()
			} else {
				//成功但是需要验证
				console.log("前往手机短信验证");
				gotoAuthenticate()
			}
		})
	}
	// 接口调用
	let login = () => {
		return new Promise((resolve, reject) => {
			console.log("开始调用login")
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/User/login',
				method: 'GET',
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					account: account.value,
					pwd: pwd.value
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("调用login成功");
					} else {
						console.log("调用login失败");
					}
					// console.log(res.data.data)
					resolve(res.data)
				},
				fail() {
					console.log("请求login失败");
				}
			})
		})
	}
</script>

<style scoped>
	body {
		/* margin-top: 20rpx; */
		font-size: 12px;
	}

	input {
		background-color: transparent;
		width: 90%;
		height: 50rpx;
		margin-left: 20rpx;
		font-size: 16px;
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
		/* padding-left: 20rpx; */
	}

	/* 输入框 */
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

	.input .box image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
		margin-left: 10rpx;
	}


	/* 记住用户名和忘记密码 */
	.choice {
		display: flex;
		width: 520rpx;
		justify-content: space-between;
		font-size: 14px;
	}

	/* 其它登录方式 */
	.or {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10rpx 0;
	}

	.title {
		color: #7a7a7a;
		width: 96%;
		text-align: center;
	}

	.other {
		margin-top: 16px;
		display: flex;
		justify-content: center;
	}

	.orBtn {
		border: none;
		width: 24px;
		height: 24px;
		font-size: 24px;
		margin: 0 14px;
	}

	.orBtn image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 注册或登录 */
	.login {
		display: block;
		margin: 30rpx 0;
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