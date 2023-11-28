<template>
	<view class="data">
		<myheader title='数据分析'></myheader>
		<iframe id="iframe_id" src="static/html/data.html" frameborder="0" style="width:100%;" scrolling="no"  onload="this.height=this.contentWindow.document.documentElement.scrollHeight"></iframe>
		<!-- <web-view src="/static/html/data.html"></web-view> -->
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style lang="scss">
	.data {
		background-color: #e5f3ef;
		padding-top: 40rpx;
		padding-bottom: 30rpx;
	}
</style>