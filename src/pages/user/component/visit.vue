<template>
	<!-- 未登录页面 -->
	<view class="visit">
		<view class="title">
			<text class="hello1">HELLO!</text><br>
			<text class="hello2">欢迎回来</text>
		</view>
		<view class="content">
			<!-- 验证码登录包括手机号和邮箱验证码 -->
			<view class="btn1" style="margin-top: 50rpx;" @click='login'>登录</view>
			<!-- 验证码登录包括手机号和邮箱-->
			<view class="btn1" @click='register'>注册</view>
			<view class="btnNo">不登录，随便看看</view>
			<text class="or">OR</text>
			<view class="other">
				<view class="orBtn">
					<image src="../../../static/image/icon/wchat.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../../static/image/icon/qq.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../../static/image/icon/wb.svg" mode=""></image>
				</view>
				<view class="orBtn">
					<image src="../../../static/image/icon/email.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	let login = () => {
		uni.navigateTo({
			url: '/pages/user/login'
		})
	}
	let register = () => {
		uni.navigateTo({
			url: '/pages/user/register'
		})
	}
</script>

<style scoped>
	.visit {
		background-color: #15a0ac;
		height: auto;
		margin: 0;
		padding: 0;
		font-size: 12px;
	}

	.title {
		padding: 4% 7%;
		color: white;
		padding-top: 120rpx;
		/* margin-top: 70px; */
		/* background-color: #15a0ac; */
	}

	.title .hello1 {
		font-size: 50px;
	}

	.title .hello2 {
		font-size: 22px;
		display: block;
		margin-top: 20rpx;
	}

	.content {
		background-color: white;
		border-radius: 40px 40px 0 0;
		padding: 10% 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* height: 400px; */
		height: 800rpx;
	}

	.content .btn1 {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #90c9b4;
		color: white;
		border: none;
		font-size: 14px;
		height: 42px;
		font-weight: 600;
		margin: 10px;
		width: 80%;
		border-radius: 50rpx;
	}

	.content .btnNo {
		margin-top: 40px;
		border: none;
		color: #7a7a7a;
	}

	.content .or {
		color: #7a7a7a;
		width: 96%;
		text-align: center;
		margin-top: 16px;
		/* height: 0; */
		/* border: #f6e382 solid 4px; */
	}

	.content .other {
		margin-top: 16px;
		display: flex;
		justify-content: center;
	}

	.content .orBtn {
		border: none;
		width: 24px;
		height: 24px;
		font-size: 24px;
		margin: 0 14px;
	}
	
	.content .orBtn image{
		width: 50rpx;
		height: 50rpx;
	}
</style>