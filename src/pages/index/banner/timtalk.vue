<template>
	<!-- 每日智能推荐 -->
	<view class="timtalk">
		<!-- 头部 -->
		<myheader title='每日智能推荐'></myheader>
		<!-- 内容 -->
		<image src="@/static/image/page/timtalk.png" mode="widthFix" />
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style>
	.timtalk image {
		width: 100%;
	}
</style>