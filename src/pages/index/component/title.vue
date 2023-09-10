<template>
	<view class="title">
		<view class="">
			<text class="text">{{title}}</text>
			<view class="background">
			</view>
		</view>
		<view class="link">
			显示全部
			<svg t="1694358607489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
				p-id="12499" width="32" height="32">
				<path
					d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"
					p-id="12500" fill="#15a0ac"></path>
			</svg>
		</view>
	</view>
</template>

<script setup>
	import {
		Search,
		ArrowRight,
		Avatar,
		UserFilled,
		View as IconView
	} from '@element-plus/icons-vue'
	import {
		toRefs,
		defineProps
	} from 'vue'

	//子组件接收父组件传递过来的值
	const props = defineProps({
		title: String

	})
	//使用父组件传递过来的值
	const {
		title
	} = toRefs(props)
</script>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		padding: 0 4%;
		color: #15a0ac;
		position: relative;
	}

	.title .text {
		/* position: relative; */
		font-size: 16px;
		/* font-weight: 500; */
	}

	.title .link {
		font-size: 14px;
		color: #15a0ac;
		margin-top: 2px;
		display: inline-flex;
		align-items: center;
	}
	
	.title .link svg{
		width: 30rpx;
		height: 30rpx;
	}

	.title .background {
		background-color: #f6de2840;
		width: 3.6rem;
		height: 0.3rem;
		position: absolute;
		border-radius: 0.1rem;
		overflow: hidden;
		/* top: 10px; */
		left: 4%;
		bottom: 1%;
	}
</style>