<template>
	<view class="post">
		<myheader title='热门话题'></myheader>
		<image src="../../static/image/page/aiPost1.png" mode="widthFix"></image>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style>
	.post{
		width: 100%;
		padding-top: 40rpx;
	}
	.post image{
		width: 100%;
		/* height: 100%; */
	}
</style>