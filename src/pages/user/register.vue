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
				<el-input v-model="account" placeholder="请输入您的邮箱或手机号">
				</el-input>
			</view>
			<view class="box">
				<el-input v-model="pwd" type="password" placeholder="请输入您的密码" show-password />
			</view>
			<view class="box">
				<el-input v-model="rePwd" type="password" placeholder="请确认您的密码" show-password />
			</view>
		</view>
		<text class="login" @click="gotoLogin">已有账户？登录</text>
		<el-button class="btn" plain @click='register'>
			<text>注册</text>
		</el-button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const account = ref('')
	const pwd = ref('')
	const rePwd = ref('')

	let gotoLogin = () => {
		uni.navigateTo({
			url: '/pages/user/login'
		})
	}
	const register = () => {
		if (pwd.value == rePwd.value) {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/User/register',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					account: account.value,
					pwd: pwd.value
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("调用register成功");
					} else {
						console.log("调用register失败");
					}
					// console.log(res.data)

				},
				fail() {
					console.log("调用register失败");
				}
			})
		} else {
			console.log('密码不一致')
			uni.showToast({
				title: '密码不一致',
				duration: 1500.,
				icon: 'error'
			})
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
		width: 300rpx;
		font-size: 60rpx;
		text-align: center;
		padding-left: 20rpx;
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
	}

	.input .box :deep(.el-input__wrapper) {
		/* 对border进行样式修改 */
		box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
		border: none;
		height: 90rpx;
		margin: 0 5rpx;
	}

	/* .input .btn {
		width: 50rpx;
	} */
	.login {
		display: block;
		margin-bottom: 30rpx;
		font-size: 12px;
	}

	.btn {
		width: 560rpx;
		background-color: #f6e382;
		border: none;
		border-radius: 26rpx;
		color: white;
		font-size: 16px;
		font-weight: 600;
	}
</style>