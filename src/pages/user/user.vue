<template>
	<!-- 未登录页面 -->
	<visit v-if="!isLogin"></visit>
	<!-- 登录后的主页 -->
	<my v-if="isLogin"></my>

</template>

<script setup>
	import visit from "./component/visit.vue"
	import my from "./component/my.vue"
	import {
		onLoad,
		onUnload
	} from "@dcloudio/uni-app";
	import {
		ref
	} from "vue";

	const isLogin = ref(false)
	// var login = true
	onLoad(() => {
		// 判断是否登录
		isLogin.value = getApp().globalData.userDetail.userId >= 0 ? true : false
		console.log('登录？' + isLogin.value)
	})
</script>

<style>

</style>