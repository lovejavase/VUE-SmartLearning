<script setup>
	import {
		onHide,
		onLaunch,
		onShow
	} from '@dcloudio/uni-app';
	// 存储用户信息
	const userDetail = ''
	// 获取设备信息
	// const systemInfo = uni.getSystemInfoSync()
	// 
	onLaunch(() => {
		console.log('App Launch')
	})
	onShow(() => {
		console.log('App onShow')
	})
	onHide(() => {
		console.log('App onHide')
	})
</script>
<script>
	export default {
		globalData: {
			userDetail: {},
			pageid: 1, //底部导航栏id
			systemInfo: uni.getSystemInfoSync(), //获取设备信息
		},
	};
</script>

<style>
	/*每个页面公共css */

	/* 解决小程序和app滚动条的问题 */
	/* #ifdef MP-WEIXIN || APP-PLUS */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */

	/* 解决H5 的问题 */
	/* #ifdef H5 */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */

	@font-face {
		font-family: AlimamaShuHeiTi-Bold;
		src: url('@/static/font/AlimamaShuHeiTi-Bold.ttf');
	}

	@font-face {
		font-family: SourceHanSansCN-VF;
		src: url('@/static/font/SourceHanSansCN-VF.otf');
	}

	view,
	text {
		font-family: 'SourceHanSansCN-VF';
		font-weight: 500;
	}
</style>