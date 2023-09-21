<template>
	<!-- 主页 -->
	<view class="user">
		<!-- 顶部 -->
		<view class="header">
			<view link class="btn">
				<image src="@/static/image/icon/back.png" alt="" />
			</view>
			<view class="my">
				<text>个人中心</text>
			</view>
			<view link class="btn">
				<image src="@/static/image/icon/more.png" alt="" />
			</view>
		</view>
		<!-- 个人信息 -->
		<view class="details">
			<!-- <el-avatar :size="50" src="@/static/image/userImg1.png" /> -->
			<!-- <image @click="modify" class="uimg" src="@/static/image/userImg1.png" alt="" /> -->
			<image @click="modify" class="uimg" :src="user.userAvatar" alt="" />
			<view @click="modify">
				<view class="udetail">
					<text class="uname">{{user.userNickName}}</text>
					<text class="ulv">lv.{{user.userVip}}</text>
				</view>
				<text class="uid">ID:{{user.userNumber}}</text>
			</view>
			<view class="sign  btn-flex">
				<!-- <view class="content"> -->
				<image src="@/static/image/icon/day.png" mode="">

				</image>
				<text class="text">签到赢好礼</text>
				<!-- </view> -->
			</view>
		</view>
		<!-- 会员 -->
		<view class="vip">
			<view class="level">
				<image class="icon" src="@/static/image/icon/v.png" mode=""></image>
				<text class="text">普通会员</text>
			</view>
			<view class="upgrade btn-flex" link>
				<text class="text">升级智能VIP</text>
				<image src="@/static/image/icon/right_brown.png" mode=""></image>
			</view>

		</view>
		<!-- 背景渐变 -->
		<view class="bg">
			<view class="left">

			</view>
			<view class="right">

			</view>
		</view>
		<!-- 积分 -->
		<view class="score">
			<view class="btn btn-flex" link>
				<view class="info">
					<text>积分</text>
					<text>{{user.userPoints}}</text>
				</view>
			</view>
			<view class="btn btn-flex" link @click='history'>
				<view class="info">
					<text>足迹</text>
					<text>{{historynum}}</text>
				</view>
			</view>
			<view class="btn btn-flex" link @click="collect">
				<view class="info">
					<text>收藏</text>
					<text>{{collectnum}}</text>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="tool">
			<view class="btn btn-flex" link>
				<view class="box">
					<view class="title">
						<image src="@/static/image/icon/vip.svg" alt="" />
						<text>会员积分</text>
					</view>
					<image src="@/static/image/icon/right_grey.png" mode=""></image>
				</view>
			</view>
			<view class="btn btn-flex" link>
				<view class="box">
					<view class="title">
						<image src="@/static/image/icon/score.svg" alt="" />
						<text>积分兑换</text>
					</view>
					<image src="@/static/image/icon/right_grey.png" mode=""></image>
				</view>
			</view>
			<!-- 图片推广start -->
			<view class="img">
				<image src="@/static/image/userdata.png" @click="myData" alt="" />
			</view>
			<!-- 图片推广end -->
			<view class="btn btn-flex" link @click="setup">
				<view class="box">
					<view class="title">
						<image src="@/static/image/icon/settings.svg" alt="" />
						<text>设置中心</text>
					</view>
					<image src="@/static/image/icon/right_grey.png" mode=""></image>
				</view>
			</view>
			<view class="btn btn-flex" link>
				<view class="box">
					<view class="title">
						<image src="@/static/image/icon/service.svg" alt="" />
						<text>客服中心</text>
					</view>
					<image src="@/static/image/icon/right_grey.png" mode=""></image>
				</view>
			</view>

			<view class="btn btn-flex" link>
				<view class="box">
					<view class="title">
						<image src="@/static/image/icon/comment.svg" alt="" />
						<text>意见反馈</text>
					</view>
					<image src="@/static/image/icon/right_grey.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 底部组件 -->
		<Footer></Footer>
	</view>
</template>

<script setup>
	import {
		onLaunch,
		onLoad,
		onShow
	} from '@dcloudio/uni-app';
	import {
		ArrowLeftBold,
		ArrowRightBold
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref
	} from 'vue';

	var userId = ref(1)
	var user = ref({})
	var collectnum = ref(0)
	var historynum = ref(0)


	// 跳转方法
	let setup = () => {
		uni.$emit(user)
		uni.navigateTo({
			url: '/pages/user/setup'
		})
	}
	let myData = () => {
		uni.navigateTo({
			url: '/pages/user/data'
		})
	}
	let history = () => {
		uni.navigateTo({
			url: '/pages/user/history'
		})
	}
	let modify = () => {
		uni.navigateTo({
			url: '/pages/user/modify'
		})
	}
	let collect = () => {
		uni.navigateTo({
			url: '/pages/user/collect?id=' + userId.value
		})
	}

	// // smzhouqi
	onMounted(() => {
		userId.value = getApp().globalData.userDetail.userId
		getUser(userId.value)
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/Collection/getCollection',
			method: 'GET',
			data: {
				userId: userId.value
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				console.log("用户-调用getCollection成功");
				collectnum.value = res.data.data.length;
				console.log(res.data.data);
			},
			fail() {
				console.log("调用getCollection失败");
			}
		})
	})

	// 获取用户信息
	let getUser = (userId) => {
		console.log("开始调用getUser")
		uni.request({
			url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
			method: 'GET',
			data: {
				userId: userId
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				console.log("用户-调用getUser成功");
				user.value = res.data.data;
				console.log(res.data.data);
			},
			fail() {
				console.log("调用getUser失败");
			}
		})
	}
</script>

<style scoped>
	.user {
		background-color: #15a0ac;
		padding-top: 36rpx;
		width: 750rpx;
	}

	.btn-flex {
		display: inline-flex;
		align-items: center;
		font-size: 14px;
		color: #4e4e4e;
	}

	/* 顶部开始 */
	.header {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		color: white
	}

	.header .btn image {
		width: 100%;
		height: 100%;
	}

	.header .btn {
		width: 50rpx;
		height: 50rpx;
		margin: 30rpx;
		font-size: 50rpx;
		color: white;
		display: inline-flex;
		align-items: center;
	}

	.header .my {
		font-size: 14px;
		line-height: 110rpx;
	}

	.header .my :deep(span) {
		background-color: #90c9b4;
		padding: 4rpx 6rpx;
		border-radius: 12rpx;
	}

	/* 顶部结束 */
	/* 个人信息开始 */
	.details {
		display: flex;
		justify-content: space-between;
		padding: 10rpx 0;
		margin: 20rpx 0;
	}

	.details .uimg {
		width: 130rpx;
		height: 130rpx;
		margin-left: 80rpx;
		border-radius: 50%;
	}

	.details .udetail {
		width: 260rpx;
		padding-top: 12%;
	}

	.details .udetail .uname {
		color: #ffffff;
	}

	.details .udetail .ulv {
		color: #ffffff;
		font-size: 12px;
		font-weight: 600;
		background-color: #f6e382;
		padding: 2rpx 16rpx;
		margin-left: 10rpx;
		border-radius: 5%;
	}

	.details .uid {
		font-size: 12px;
		/* font-weight: 600; */
		color: #515151;
		font-weight: 600;
	}

	/* 签到 */
	.details .sign {
		background-color: #10828890;
		height: 50rpx;
		font-size: 12px;
		padding: 6rpx 20rpx;
		border-radius: 45rpx 0 0 45rpx;
		color: #ffffff;
	}

	.details .sign image {
		width: 30rpx;
		height: 30rpx;
	}

	.details .sign .text {
		margin-left: 12rpx;
	}

	/* 个人信息结束 */
	/* 会员开始 */
	.vip {
		background-color: #373938;
		margin: 10rpx 50rpx;
		margin-bottom: 0 !important;
		padding: 0 6rpx;
		border-radius: 20rpx 20rpx 0 0;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}

	.vip .level {
		color: #b29575;
		width: auto;
		height: 20rpx;
		margin: 30rpx 20rpx;
		display: inline-flex;
		align-items: center;
	}

	.vip .level .icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}

	.vip .upgrade {
		font-size: 12px;
		height: 50rpx;
		padding: 4rpx 8rpx;
		padding-left: 12rpx;
		margin: 20rpx;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #d8cdbe, #b29575);
		color: #603011;
		border: none;
	}

	.vip .upgrade image {
		width: 30rpx;
		height: 30rpx;
	}

	/* 会员结束 */
	/* 小背景开始 */
	.bg {
		width: 750rpx;
		height: 40rpx;
		display: flex;
		flex-wrap: nowrap;
	}

	.bg .left {
		width: 375rpx;
		height: 40rpx;
		background: linear-gradient(to top right, #ffffff 57%, #373938 50%);
	}

	.bg .right {
		width: 375rpx;
		height: 40rpx;
		background: linear-gradient(to top left, #ffffff 56%, #373938 50%);
	}

	/* 小背景结束 */
	/* 积分开始 */
	.score {
		width: 100%;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		padding: 20rpx 0;
	}

	.score .btn {
		width: 240rpx;
		height: 100rpx;
		margin: 0;
		border: none;
		border-radius: 0;
		justify-content: center;
	}

	.score .btn:nth-child(2) {
		border-left: #87888e 3rpx solid;
		border-right: #87888e 3rpx solid;
	}

	.score .btn .info {
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

	}

	.score .btn .info :deep(span) {
		display: block;
	}

	/* 积分结束 */
	/* 工具开始 */
	.tool {
		background-color: #ffffff;
	}

	.tool .btn {
		width: 750rpx;
		height: 100rpx;
		border-style: none;
		padding: 0;
		margin: 0;
	}

	.tool .btn .box {
		width: 700rpx;
		margin: 0 auto;
		padding: 10rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tool .btn .box image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 6rpx;
	}

	.tool .btn .title {
		display: inline-flex;
		align-items: center;
	}

	.tool .btn :deep(i) {
		font-size: 18px;
		margin-right: 10rpx;
	}

	/* 图片 */
	.tool .img {
		width: 700rpx;
		height: 210rpx;
		margin: 0 auto;
		box-shadow: 6rpx 6rpx 10rpx #90909090;
	}

	.tool .img image {
		width: 100%;
		height: 100%;
	}

	/* .tool .btn */

	/* 工具结束 */
</style>