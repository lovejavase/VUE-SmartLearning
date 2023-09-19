<template>
	<!-- 智能识别-翻译页 -->
	<view class="book">
		<!-- 标题 -->
		<myheader title='图书识别'></myheader>
		<!-- 输入内容 -->
		<view class="input">
			<view class="tip" v-if="!sucess">
				请选择您要识别的图片...
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
				测试测试测试测试测试测试测试测试测试测试测试测试测试测试1111111111111111111
			</text>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";
	const sucess = ref(false)
	const upimg = () => {
		sucess.value = true
		//下面是获取人脸比对参数的接口
		uni.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['camera'], //album 从相册选图，camera 使用相机
			success: function(res) {
				console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
				uni.uploadFile({
					url: 'http://a-puppy-c.top:9999/Smart/AI/Face', //接口地址
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
							

						} else {
							console.log("人脸识别失败")
						}
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
			padding: 6rpx 14rpx;
			margin-top: 30rpx;
		}

		.text {
			display: block;
			width: 100%;
			height: 100rpx;
			font-size: 16px;
			margin-top: 30rpx;
		}
	}


	/* 结果结束 */
</style>