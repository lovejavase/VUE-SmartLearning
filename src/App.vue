<script>
export default {
	
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
body{
	/* font-size: 12px; */
}
::v-deep .uni-tabbar-bottom{
	background-color: #f3efee;
}
::v-deep .uni-tabbar{
	border-radius: 50rpx 50rpx 0 0;
}

</style>
