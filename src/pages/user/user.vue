<template>
	<!-- 未登录页面 -->
	<visit v-if="!login"></visit>
	<!-- 登录后的主页 -->
	<my v-if="login"></my>

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

	const login = ref(false)
	// var login = true
	onLoad(() => {
		// console.log('11')
		uni.$on('userid', function(res) {
			console.log(res)
			login.value = res > 0 ? true : false
		})
	})
	// onUnload() {
	// 	// 移除监听事件  
	// 	uni.$off('userid');
	// }
	console.log('登录？' + login.value)
</script>

<style>

</style>