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
			systemInfo: uni.getSystemInfoSync(),//获取设备信息
		},
	};
</script>

<style>
	/*每个页面公共css */
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