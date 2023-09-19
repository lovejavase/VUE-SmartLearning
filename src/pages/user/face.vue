<template>
	<!-- 登录页 -->
	<view class="register">
		<view class="bg">
			<text class="text1">登录</text>
			<text class="text2">欢迎回来！</text>
		</view>
		<view class="input">
			<view class="box">
				<input v-model="name" placeholder="请输入您的用户名">
			</view>
		</view>
		<view class="btn" @click='gologin'>
			<text>人脸识别</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		// createApp
	} from 'vue'
	const img = ref('')
	const name = ref('')
	const userId = ref('')
	let gologin = () => {
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/User/selectFace',
			method: 'Post',
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			data: {
				name: name.value
			},
			success: (res) => {
				if (res.data.code == 200) {
					userId.value = res.data.data.userId
					console.log(userId.value)
					img.value = res.data.data.img
					console.log(img.value)
				}
			}
		})
		//下面是获取人脸比对参数的接口
		uni.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['camera'], //album 从相册选图，camera 使用相机
			success: function(res) {
				console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
				uni.uploadFile({
					url: 'http://a-puppy-c.top:9999/Smart/AI/Face', //仅为示例，非真实的接口地址
					filePath: res.tempFilePaths[0],
					header: {
						'Authorization': uni.getStorageSync('Authorization'),
					},
					name: 'file1',
					formData: {
						file2: img.value // 后端接收的其他参数
					},
					success: (uploadFileRes) => {
						var obj = JSON.parse(uploadFileRes.data)
						console.log(obj.data.result.score)
						if (obj.data.result.score > 70) {
							console.log("人脸识别成功")
							//根据用户id获取用户详情保存在全局中
							uni.request({
								url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
								method: 'GET',
								header: {
									'Authorization': uni.getStorageSync(
										'Authorization'),
									'content-type': 'application/x-www-form-urlencoded'
								},
								data: {
									userId: userId.value
								},
								success: (res) => {
									// 保存到全局文件
									getApp().globalData.userDetail = res.data.data
									// 弹窗和延迟跳转
									uni.showToast({
										title: '人脸识别成功',
										icon: 'success'
									})
									setTimeout(() => {
										uni.redirectTo({
											url: '/pages/user/user'
										})
									}, 700)
								},
								fail() {
									console.log("请求login失败");
								}
							})

						} else {
							console.log("人脸识别失败")
						}
					}
				})
			},
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