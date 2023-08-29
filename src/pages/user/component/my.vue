<template>
	<!-- 主页 -->
	<view class="user">
		<!-- 顶部 -->
		<view class="header">
			<el-button link class="btn">
				<el-icon>
					<ArrowLeftBold />
				</el-icon>
			</el-button>
			<view class="my">
				<text>个人中心</text>
			</view>
			<el-button link class="btn">
				<el-icon>
					<svg t="1691140789919" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="2321" width="128" height="128">
						<path
							d="M512 299.013c54.298 0 98.34-44.011 98.34-98.309S566.298 102.4 512 102.4s-98.34 44.012-98.34 98.31c0.03 54.266 44.042 98.303 98.34 98.303z m0 425.974c-54.298 0-98.34 44.011-98.34 98.304 0 54.297 44.042 98.309 98.34 98.309s98.34-44.012 98.34-98.31-44.042-98.303-98.34-98.303z m0-311.311c-54.298 0-98.34 44.011-98.34 98.309 0 54.292 44.042 98.304 98.34 98.304s98.34-44.012 98.34-98.304c0-54.298-44.042-98.31-98.34-98.31z"
							p-id="2322" fill="#ffffff"></path>
					</svg>
				</el-icon>
			</el-button>
		</view>
		<!-- 个人信息 -->
		<view class="details">
			<!-- <el-avatar :size="50" src="@/static/image/userImg1.png" /> -->
			<img @click="modify" class="uimg" src="@/static/image/userImg1.png" alt="">
			<view @click="modify">
				<el-row class="udetail" align="bottom">
					<el-col :span="10"><text class="uname">用户名</text></el-col>
					<el-col :span="12"><text class="ulv">lv.12</text></el-col>
					<el-col :span="24"><text class="uid">ID:123456789</text></el-col>
				</el-row>
			</view>
			<el-button class="sign" link>
				<!-- <view class="content"> -->
				<el-icon class="icon">
					<svg t="1691162779395" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="7316" width="128" height="128">
						<path
							d="M896 108.032h-52.224c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72H896c16.896 0 30.72 13.824 30.72 30.72v651.776c0 16.896-13.824 30.72-30.72 30.72H129.536c-16.896 0-30.72-13.824-30.72-30.72V200.192c0-16.896 13.824-30.72 30.72-30.72h79.36c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72H129.536c-50.688 0-92.16 41.472-92.16 92.16v651.776c0 50.688 41.472 92.16 92.16 92.16H896c50.688 0 92.16-41.472 92.16-92.16V200.192c0-50.688-41.472-92.16-92.16-92.16z"
							fill="#ffffff" p-id="7317"></path>
						<path
							d="M408.576 169.472H640c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72H408.576c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72zM308.736 225.28c16.896 0 30.72-13.824 30.72-30.72V55.296c0-16.896-13.824-30.72-30.72-30.72s-30.72 13.824-30.72 30.72V194.56c0 16.896 13.824 30.72 30.72 30.72zM741.376 225.28c16.896 0 30.72-13.824 30.72-30.72V63.488c0-16.896-13.824-30.72-30.72-30.72s-30.72 13.824-30.72 30.72V194.56c0 16.896 13.824 30.72 30.72 30.72zM728.064 385.024L457.728 655.36l-123.904-123.904c-11.776-11.776-31.232-11.776-43.52 0-11.776 11.776-11.776 31.232 0 43.52l145.408 145.408c6.144 6.144 13.824 9.216 21.504 9.216 3.072 0 6.144-0.512 8.704-1.536 4.608-1.536 9.216-3.584 12.8-7.68l291.84-291.84c11.776-11.776 11.776-31.232 0-43.52-11.264-12.288-30.72-12.288-42.496 0z"
							fill="#ffffff" p-id="7318"></path>
					</svg>
				</el-icon>
				<text class="text">签到赢好礼</text>
				<!-- </view> -->
			</el-button>
		</view>
		<!-- 会员 -->
		<view class="vip">
			<view class="level">
				<el-icon class="icon">
					<svg t="1691169889571" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="2660" width="32" height="32">
						<path
							d="M167.4 69c32.6-13.6 70 1.8 83.6 34.4L512 729.6 773 103.4c13.6-32.6 51-48 83.6-34.4s48 51 34.4 83.6l-320 768c-10 23.8-33.2 39.4-59 39.4s-49.2-15.6-59-39.4l-320-768c-13.6-32.6 1.8-70 34.4-83.6z"
							p-id="2661" fill="#ffffff"></path>
					</svg>
				</el-icon>
				<text class="text">普通会员</text>
			</view>
			<view class="">
				<el-button class="upgrade" link>
					<text class="text">升级智能VIP</text>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</el-button>
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
			<el-button class="btn" link>
				<view class="info">
					<text>积分</text>
					<text>123</text>
				</view>
			</el-button>
			<el-button class="btn" link @click='history'>
				<view class="info">
					<text>足迹</text>
					<text>9</text>
				</view>
			</el-button>
			<el-button class="btn" link @click="collect">
				<view class="info">
					<text>收藏</text>
					<text>12</text>
				</view>
			</el-button>
		</view>
		<!-- 工具栏 -->
		<view class="tool">
			<el-button class="btn" link>
				<view class="box">
					<view class="title">
						<img src="@/static/image/icon/vip.svg" alt="">
						<text>会员积分</text>
					</view>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</view>
			</el-button>
			<el-button class="btn" link>
				<view class="box">
					<view class="title">
						<img src="@/static/image/icon/score.svg" alt="">
						<text>积分兑换</text>
					</view>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</view>
			</el-button>
			<!-- 图片推广start -->
			<view class="img">
				<img src="@/static/image/user_img1.png" alt="">
			</view>
			<!-- 图片推广end -->
			<el-button class="btn" link @click="setup">
				<view class="box">
					<view class="title">
						<img src="@/static/image/icon/settings.svg" alt="">
						<text>设置中心</text>
					</view>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</view>
			</el-button>
			<el-button class="btn" link>
				<view class="box">
					<view class="title">
						<img src="@/static/image/icon/service.svg" alt="">
						<text>客服中心</text>
					</view>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</view>
			</el-button>

			<el-button class="btn" link>
				<view class="box">
					<view class="title">
						<img src="@/static/image/icon/comment.svg" alt="">
						<text>意见反馈</text>
					</view>
					<el-icon class="icon">
						<ArrowRightBold />
					</el-icon>
				</view>
			</el-button>
		</view>
		<!-- 底部组件 -->
		<!-- <Footer style="background-color: #ffffff;"></Footer> -->
	</view>
</template>

<script setup>
	import {
		onLaunch
	} from '@dcloudio/uni-app';
	import {
		ArrowLeftBold,
		ArrowRightBold,
		Calendar,
		Picture
	} from '@element-plus/icons-vue'

	// onLaunch(
	// uni.hideTabBar() //隐藏原生导航栏
	// )
	let setup = () => {
		uni.navigateTo({
			url: '/pages/user/setup'
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
			url: '/pages/user/collect'
		})
	}
</script>

<style scoped>
	.user {
		background-color: #15a0ac;
		padding-top: 20rpx;
	}

	/* 顶部开始 */
	.header {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		color: white
	}

	.header .btn {
		width: 50rpx;
		height: 50rpx;
		margin: 30rpx;
		font-size: 50rpx;
		color: white;
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
	}

	.details .uimg {
		width: 130rpx;
		margin-left: 80rpx;
		border-radius: 50%;
	}

	.details .udetail {
		width: 260rpx;
		height: 90%;
		/* margin-top: 2%; */
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
		border-radius: 5%;
	}

	.details .udetail .uid {
		font-size: 12px;
		/* font-weight: 600; */
		color: #303133;
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

	.details .sign .icon {
		font-size: 14px;
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
		font-size: 18px;
		margin-right: 2rpx;
	}

	.vip .upgrade {
		font-size: 12px;
		height: 50rpx;
		padding: 4rpx 10rpx;
		margin: 20rpx;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #d8cdbe, #b29575);
		color: #603011;
		border: none;
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
	.tool .btn .box img{
		width: 50rpx;
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
		width: 730rpx;
		height: 210rpx;
		margin: auto;
		/* background-color: #90c9b4; */
	}
	
	.tool .img img{
		width: 100%;
		height: 100%;
	}

	/* .tool .btn */

	/* 工具结束 */
</style>