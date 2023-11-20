<template>
	<!-- 智能识别-图书识别 -->
	<view class="book">
		<!-- 标题 -->
		<myheader title='图书识源'></myheader>
		<!-- 输入内容 -->
		<view class="input" :style="bgimg==''?'':'background-image: url('+bgimg+');'">
			<view class="tip" v-if="!sucess">
				{{tip}}
			</view>
			<view class="btn" v-if="!sucess" @click="upimg">
				上传图片
			</view>
		</view>
		<!-- 翻译结果 -->
		<view class="result">
			<view class="tit" v-if="sucess">
				结果
			</view>
			<text class="text" v-if="sucess">
				{{result}}
			</text>
			<view class="rebtn" v-if="sucess" @click="refresh">
				继续识别
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";
	const sucess = ref(false)
	const bgimg = ref('')
	const result = ref('')
	const tip = ref('请选择您要识别的图片...')
	const refresh = () => {
		tip.value = '请选择您要识别的图片...'
		result.value = ''
		bgimg.value = ''
		sucess.value = false
	}
	const upimg = () => {
		tip.value = '正在识别...'
		//下面是获取人脸比对参数的接口
		uni.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['camera'], //album 从相册选图，camera 使用相机
			success: function(res) {
				console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
				uni.uploadFile({
					url: 'http://8.130.21.88:9999/Smart/AI/OCR', //接口地址
					filePath: res.tempFilePaths[0],
					header: {
						'Authorization': uni.getStorageSync('Authorization'),
					},
					name: 'file',
					success: (uploadFileRes) => {
						var obj = JSON.parse(uploadFileRes.data)
						bgimg.value = res.tempFilePaths[0]
						console.log(bgimg.value.slice(5))
						result.value = obj.data
						sucess.value = true //隐藏识别按钮
					}
				})
			},
		})
	}
</script>

<style lang="scss">
	.book {
		padding-top: 50rpx;
	}


	/* 输入内容开始 */
	.input {
		width: 100%;
		margin: 20rpx 0;
		padding-bottom: 40rpx;
		min-height: 500rpx;
		overflow: hidden;
		background-color: #f6d95f20;
		background-size: 100%;
		background-position:  center; 
		background-repeat: no-repeat;

		.tip {
			width: 100%;
			margin-top: 180rpx;
			text-align: center;
			color: #909090;
			font-weight: 400;
		}

		.btn {
			width: 200rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			margin: 0 auto;
			margin-top: 100rpx;
			background-color: #90c9b4;
			border-radius: 10rpx;
		}
	}

	/* 输入内容结束*/
	/* 结果开始 */
	.result {
		margin-top: -60rpx;
		min-height: 900rpx;
		padding: 30rpx 40rpx;
		background-color: #ffffff;
		border-radius: 50rpx 50rpx 0 0;
		border-top: #90909040 2rpx solid;

		.tit {
			display: inline-block;
			font-size: 16px;
			background-color: #90c9b4;
			border-radius: 30rpx;
			padding: 6rpx 20rpx;
			margin-top: 30rpx;
		}

		.text {
			display: block;
			width: 100%;
			min-height: 100rpx;
			font-size: 16px;
			margin-top: 30rpx;
		}

		.rebtn {
			background-color: #f6e382;
			color: #ffffff;
			font-size: 18px;
			text-shadow: 1px 1px 2px #978b50;
			width: 230rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			margin: 0 auto;
			margin-top: 90rpx;
			border-radius: 33rpx;
		}
	}


	/* 结果结束 */
</style>