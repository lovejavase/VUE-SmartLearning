<template>
	<!-- 帖子发布页 -->
	<view class="publish" :style="'min-height:'+windowHeight+'rpx;'">
		<view class="pubBtn" @click="publish">
			发布
		</view>
		<view class="">
			<textarea v-model="title" :class="colorValue" maxlength="30" class="input title"
				placeholder="请输入标题!"></textarea>
			<textarea v-model="input" :class="colorValue" maxlength="400" auto-height class="input"
				placeholder="请输入您想说的内容吧!"></textarea>
		</view>
		<view class="colorBtn">
			<view class="c-btn co1" @click='color("color1")'></view>
			<view class="c-btn co2" @click='color("color2")'></view>
			<view class="c-btn co3" @click='color("color3")'></view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLaunch,
		onLoad,
		onShow
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	// 获取屏幕高度宽度
	const systemHeight = ref(getApp().globalData.systemInfo.windowHeight)
	const systemWidth = ref(getApp().globalData.systemInfo.windowWidth)
	// 由于设置了padding占了40rpx（20*2）所以最后要减40
	const windowHeight = ref(0)
	console.log(windowHeight.value)
	const title = ref('')
	const input = ref('')
	const colorValue = ref('')
	const userAvatar = getApp().globalData.userDetail.userAvatar;
	
	
	
	// 改变颜色
	const color = (num) => {
		colorValue.value = colorValue.value != num ? num : ''
	}
	onShow(() => {
		windowHeight.value = Math.floor((750 / Number(systemWidth.value)) * Number(systemHeight.value) - 40)
		if (userAvatar == undefined) {
			uni.showToast({
				title: "请先登录!",
				duration: 1700,
				icon: 'error',
			})
			setTimeout(() => {
				// 跳转等登录页面
				uni.navigateTo({
					url: '/pages/user/user'
				})
			}, 1800)
		}
	})
	const publish = () => {
		if(title.value.includes('微信') || input.value.includes('微信')){
			
			uni.showToast({
				title:"含有敏感词"
			})
			title.value = ''
			input.value = ''
		}else{
			uni.request({
			url: 'http://8.130.21.88:9999/Smart/TieZi/addNew',
			method: 'PUT',
			data: {
				title: title.value,
				content: input.value,
				userId: getApp().globalData.userDetail.userId,
				keyWord: '接口测试'
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*'
			},
			success: (res) => {
				if (res.data.code == 0) {
					console.log("请求成功");
					uni.showToast({
						title: "发布成功！"
					})
				} else {
					console.log("请求失败");
					uni.showToast({
						title: "发布失败！"
					})
				}
			},
			fail() {
				console.log("接口请求失败");
			}
		})
		}
		


	}
	// 文字颜色按钮
</script>

<style>
	.publish {
		width: 750rpx;
		background: url('@/static/image/bg.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20rpx 0;

		.pubBtn {
			background-color: #e2d178;
			width: 140rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 30rpx;
			color: #fff;
			font-size: 18px;
			font-weight: 600;
			text-shadow: 1rpx 1rpx 2rpx #95894f;
			margin-left: 580rpx;
			margin-top: 40rpx;
		}

		.input {
			background-color: #fff;
			width: 580rpx;
			margin: 0 auto;
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #ffffff90;
		}

		.title {
			height: 50rpx;
			margin-bottom: 20rpx;
		}

		.color1 {
			color: #ff5930;
		}

		.color2 {
			color: #698cff;
		}

		.color3 {
			color: #90c9b4;
		}

		.colorBtn {
			width: 300rpx;
			height: 120rpx;
			background-color: #ffffff90;
			margin: 0 auto;
			border-radius: 20rpx;
			margin-bottom: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			.c-btn {
				width: 60rpx;
				height: 60rpx;
				border-radius: 30rpx;
				/* background-color: #ff5930; */
			}

			.co1 {
				background-color: #ff5930;
			}

			.co2 {
				background-color: #698cff;
			}

			.co3 {
				background-color: #90c9b4;
			}

		}

	}
</style>