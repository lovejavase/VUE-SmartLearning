<template>
	<!-- 智能识别-翻译页 -->
	<view class="translate">
		<!-- 标题 -->
		<myheader title='文本识译'></myheader>
		<!-- 输入内容 -->
		<view class="input">
			<textarea v-model="input" confirm-type="done" @confirm="gotranslate" placeholder="请输入需要翻译的内容......"
				maxlength="-1" auto-focus="true" adjust-position='true'></textarea>
		</view>
		<!-- 翻译结果 -->
		<view class="result">
			<view class="tabs" v-if="gototranslate">
				<text @click='click(0)' :class="id==0?'bg':''">翻译1</text>
				<text @click='click(1)' :class="id==1?'bg':''">翻译2</text>
				<text @click='click(2)' :class="id==2?'bg':''">翻译3</text>
			</view>
			<view class="tab-item" v-if="gototranslate">
				<text v-if='gototranslate'>{{result[id]}}</text>
				<!-- <text v-if='id==1'></text> -->
				<!-- <text v-if='id==2'></text> -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		ref
	} from "vue";

	const input = ref('')
	const id = ref(0)
	const gototranslate = ref(false)
	const result = ref([])
	let click = (chickId) => {
		id.value = chickId
	}
	let gotranslate = () => {
		gototranslate.value = true
		// console.log(input.value)
		// 判断语言类型
		const SourceLanguage = ref('en') //输入语言类型
		const TargetLanguage = ref('zh') //目标语言类型
		// 调用接口
		result.value = []
		for (let i = 0; i < 3; i++) {
			AITranslate(SourceLanguage.value, TargetLanguage.value, input.value).then(res => {
				console.log(res)
				result.value.push(res)
			})
		}
	}
	let AITranslate = (SourceLanguage, TargetLanguage, SourceText) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://8.130.21.88:9999/Smart/AI/AITranslate',
				method: 'POST',
				data: {
					SourceLanguage: SourceLanguage,
					TargetLanguage: TargetLanguage,
					SourceText: SourceText
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("AITranslate请求成功");
						resolve(res.data.data)
					} else {
						console.log("AITranslate请求失败");
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
</script>

<style>
	.translate {
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
	}

	.input textarea {
		width: 90%;
		height: 460rpx;
		margin: 0 auto;
		padding: 30rpx 40rpx;
		padding-bottom: 0;
		/* background-color: #f6d95f20; */
		color: #434343;
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
		
	}

	.result .tabs {
		margin: 20rpx 0;
	}

	.result .tabs text {
		display: inline-block;
		font-size: 16px;
		background-color: #90c9b4;
		border-radius: 30rpx;
		padding: 6rpx 14rpx;
		margin-right: 36rpx;
		margin-left: 0;
	}
	.bg{
		background-color: #f6e382 !important;
	}

	.result .tab-item {
		margin: 20rpx auto;
		width: 100%;
	}

	.result .tab-item text {
		word-wrap: break-word;
	}

	/* 结果结束 */
</style>