<template>
	<!-- 智能识别-翻译页 -->
	<view class="translate">
		<!-- 标题 -->
		<myheader title='智能翻译'></myheader>
		<!-- 输入内容 -->
		<view class="input">
			<textarea v-model="input" confirm-type="done" @confirm="gotranslate" placeholder="请输入需要翻译的内容......"
				maxlength="-1" auto-focus="true" adjust-position='true'></textarea>
		</view>
		<!-- 翻译结果 -->
		<view class="result">
			<view class="tabs" v-if="gototranslate">
				<text @click='click(0)'>翻译1</text>
				<text @click='click(1)'>翻译2</text>
				<text @click='click(2)'>翻译3</text>
			</view>
			<view class="tab-item" v-if="gototranslate">
				<text v-if='id==0'>111111111111111111111111111111111111111111111</text>
				<text v-if='id==1'>222222222222222222222\/\/\/222222222222222222222222</text>
				<text v-if='id==2'>233333333333333333333333333333333333233333333</text>
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
	const gototranslate = ref(true)
	const result = ref([])
	let click = (chickId) => {
		id.value = chickId
	}
	let gotranslate = () => {
		console.log(input.value)
		// 调用接口
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
		background-color: antiquewhite;
	}

	.input textarea {
		width: 90%;
		height: 460rpx;
		margin: 0 auto;
		padding: 30rpx 40rpx;
		padding-bottom: 0;
		background-color: antiquewhite;
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
	}

	.result .tabs {
		margin: 20rpx 0;
	}

	.result .tabs text {
		display: inline-block;
		background-color: #90c9b4;
		border-radius: 30rpx;
		padding: 4rpx 12rpx;
		margin-right: 30rpx;
		margin-left: 0;
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