<template>
	<!-- 手机短信验证页 -->
	<view class="authenticate">
		<!-- 大标题 -->
		<view class="bg">
			<text class="text1">欢迎</text>
			<text class="text2">验证登录</text>
		</view>
		<!-- 验证功能 -->
		<view class="input">
			<view class="box">
				<input class="uni-input" v-model="account" maxlength="11" placeholder="请输入您的手机号"
					placeholder-style="font-size:14px" />
			</view>
			<view class="box">
				<input class="uni-input" v-model="code" maxlength="8" placeholder="请输入验证码"
					placeholder-style="font-size:14px" />
				<text class="sendCode" @click="msg">获取验证码</text>
			</view>
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
		<!-- 按钮 -->
		<text class="send" @click="login">登录</text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const account = ref()
	const code = ref()
	// const code = ref('')

	let msg = () => {
		console.log('发送验证码')
		if ((account.value).toString().length == 11) {
			console.log(account.value)
			SendSms(account.value).then(res => {
				console.log(res)
			})
		}
	}
	let login = () => {
		console.log('登录')
		console.log(code.value)
		checkCode(account.value, code.value).then(res => {
			console.log(res)
		})
	}
	// 获取验证码
	let SendSms = (phone) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Send/SendSms',
				method: 'GET',
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					phone: phone
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("调用SendSms成功");
						resolve(res.data.msg)
					} else {
						console.log("调用SendSms失败");
						if (res.data.code == -10006) {

						}
					}

				},
				fail() {
					console.log("请求失败");
				}
			})
		})
	}
	// 验证码登录
	let checkCode = (phone, code) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Send/checkCode',
				method: 'POST',
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					account: phone,
					code: code
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("调用checkCode成功");
					} else {
						console.log("调用checkCode失败");
					}
					resolve(res.data.msg)

				},
				fail() {
					console.log("请求失败");
				}
			})
		})
	}
</script>

<style>
	.authenticate {
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
		position: relative;
	}

	.input .uni-input {
		margin: 20rpx 12rpx;
		margin-left: 30rpx;
		z-index: 0;
	}

	/* 发送验证码 */
	.sendCode {
		font-size: 12px;
		color: #7a7a7a;
		position: absolute;
		top: 30rpx;
		right: 20rpx;
		z-index: 10;
	}

	/* 其它登录方式 */
	.or {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10rpx 0;
		font-size: 12px;
	}

	.title {
		color: #7a7a7a;
		/* width: 96%; */
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


	/* 按钮 */

	.send {
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
		margin-top: 50rpx;
	}
</style>