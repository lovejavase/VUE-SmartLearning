<template>
	<!-- 未登录页面 -->
	<visit v-if="!login"></visit>
	<!-- 登录后的主页 -->
	<my v-if="login"></my>
	
</template>

<script setup>
	import visit from "./component/visit.vue"
	import my from "./component/my.vue"
	
	// var login = false
	var login = true
</script>

<style>

</style>