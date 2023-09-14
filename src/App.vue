<script setup>
	import {
		onHide,
		onLaunch,
		onShow
	} from '@dcloudio/uni-app';

	const userDetail = ''

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