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
	body {}

	/* 	::v-deep .uni-tabbar-bottom {
		background-color: #f3efee;
	}

	::v-deep .uni-tabbar {
		border-radius: 50rpx 50rpx 0 0;
	} */

	/* 中间按钮 */
	/* ::v-deep .uni-tabbar__mid {
		background-color: #f6e382;
		border-radius: 50rpx;
		bottom: 40rpx;
		align-items: center;
	}
	
	::v-deep .uni-tabbar__mid img{
		width: 40rpx !important;
		height: auto !important;
	} */
</style>