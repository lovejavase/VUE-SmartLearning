<template>
	<view class="community">
		<view class="tab—btns">
			<view class="">
				<text @click='clickTab(0)' class="tab-btn" :class="navIndex==0?'activite':''">关注</text>
				<view class="bg" v-if="navIndex==0"></view>
			</view>
			<view class="">
				<text @click='clickTab(1)' class="tab-btn" :class="navIndex==1?'activite':''">推荐</text>
				<view class="bg" v-if="navIndex==1"></view>
			</view>
			<view class="">
				<text @click='clickTab(2)' class="tab-btn" :class="navIndex==2?'activite':''">圈子</text>
				<view class="bg" v-if="navIndex==2"></view>
			</view>
		</view>
		<view class="tabs">
			<attention v-if="navIndex==0"></attention>
			<recommend v-if="navIndex==1"></recommend>
			<groupItem v-if="navIndex==2"></groupItem>
		</view>

		<view class="link">
				<image src="@/static/image/icon/user_top.svg" mode=""></image>
				<image src="@/static/image/icon/news_top.svg" mode=""></image>
				<image src="@/static/image/icon/history_top.svg" mode=""></image>
		</view>
		<!-- 发布按钮 -->
		<view class="upbtn" @click='upPost'>
			<image src="@/static/image/icon/add.svg" mode="" />
		</view>
		<!-- 变暗的背景 -->
		<view class="mask" v-if="showModalStatus"></view>
		<!-- 发布帖子弹出框 -->
		<view class="publishing" :animation="animationData" v-if="showPublish">
			<image @click="close" src="@/static/image/icon/close.svg" mode="" />
			<view class="item1">
				<image src="@/static/image/pub1.png" mode="" />
				<text>发布文章</text>
				<text class="t-end t-bg1">发布文章</text>
			</view>
			<view class="item1 bg2" @click='gotoPbulish'>
				<image src="@/static/image/pub2.png" mode="" />
				<text>发布帖子</text>
				<text class="t-end t-bg2">发布帖子</text>
			</view>
			<!-- </view> -->
			<view class="tip">
				没想好说什么？发起一个话题吧！
			</view>
			<view class="item2">
				<image src="@/static/image/icon/pinglun.svg" mode="" />
				<text>发起新话题</text>
				<!-- <text class="t-end t-bg3">创建新话题</text> -->
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue'
	import groupItem from "./component/group.vue"
	import attention from "./component/attention.vue"
	import recommend from "./component/recommendation.vue"

	const navIndex = ref(2)
	const bg = ref('bg0')
	const showModalStatus = ref(false)
	const showPublish = ref(false)
	const animationData = ref({})


	const gotoPbulish = () => {
		uni.navigateTo({
			url: '/pages/community/publish'
		})
	}

	const clickTab = (index) => {
		// console.log(index)
		navIndex.value = index
	}
	// 点击发布按钮
	const upPost = () => {
		showPublish.value = true
		const animation = uni.createAnimation({
			transformOrigin: "50% 50%",
			timingFunction: "ease",
			delay: 0,
			duration: 500,
		})
		animation.translateY('-390rpx').step()
		animationData.value = animation.export(),
			setTimeout(() => {
				animationData.value = animation.export(),
					// 显示遮罩层
					showModalStatus.value = true
			}, 300)
	}
	// 点击弹出层的关闭按钮
	const close = () => {
		showModalStatus.value = false
		const ani = uni.createAnimation({
			transformOrigin: "50% 50%",
			timingFunction: "ease",
			delay: 0,
			duration: 500,
		})
		ani.translateY('200rpx').step()
		animationData.value = ani.export()
		setTimeout(() => {
			showPublish.value = false
		}, 300)
	}
	let topMy = () => {
		console.log("点击了顶部按钮")
	}
</script>


<style>
	.community {
		margin: 0;
		padding-top: 30rpx;
		position: relative;
		background-color: #fff;
	}

	/* 标签页开始 */
	.tab—btns {
		width: 100%;
		padding: 30rpx;
		display: flex;
	}

	.tab—btns .tab-btn {
		display: inline-flex;
		font-size: 20px;
		color: #515151;
		padding: 10rpx;
		margin: 0 10rpx;
		font-family: 'AlimamaShuHeiTi-Bold';
	}

	.tab—btns .bg {
		margin-left: 20rpx;
		width: 40px;
		height: 4px;
		background-color: #f6e382;
		border-radius: 2px;
		/* position: fixed; */
	}

	.activite {
		/* background-color: aliceblue; */
		color: #15a0ac !important;
	}

	/* 标签页结束 */


	/* end */
	/* 右上角按钮开始 */
	.link {
		font-size: 20px;
		margin: 4rpx;
		/* width: 230rpx; */
		width: 180rpx;
		display: flex;
		justify-content: space-between;
		position: absolute;
		z-index: 99;
		top: 76rpx;
		right: 36rpx;
	}

	.link image {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
	}


	/* 右上角按钮结束 */
	.upbtn {
		background-color: #90c9b4;
		width: 90rpx;
		height: 90rpx;
		border: #ffffff 2rpx solid;
		border-radius: 50rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 10rpx;
		bottom: 300rpx;
	}

	.upbtn image {
		width: 60rpx;
		height: 60rpx;
	}

	/* 灰色遮盖层 */
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000000;
		opacity: 0.2;
		overflow: hidden;
		z-index: 9;
		color: #fff;
	}

	/* 发布按钮弹出框 */
	.publishing {
		position: fixed;
		z-index: 10;
		/* bottom: 40rpx; */
		bottom: -300rpx;
		left: 0;
		height: 400rpx;
		width: 750rpx;
		/* width: 688rpx; */
		/* padding: 30rpx 30rpx; */
		padding: 60rpx 0;
		background-color: #ffffff;
		/* border: #15a0ac90 1rpx solid; */
		border-radius: 40rpx 40rpx 0 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.publishing>image {
		width: 50rpx;
		height: 50rpx;
		position: fixed;
		right: 10rpx;
		bottom: 460rpx;
	}

	.publishing .group {
		width: 100%;
		/* background-color: #15a0ac90; */
		margin-top: 40rpx;
		display: flex;
		justify-content: space-around;
		/* align-items: center; */
	}

	.publishing .item1 {
		display: inline-flex;
		align-items: flex-end;
		flex-wrap: wrap;
		width: 300rpx;
		height: 160rpx;
		background-color: #F9EBE9;
		margin: 10rpx 20rpx;
		border-radius: 20rpx;
		margin-top: 20rpx;
		overflow: hidden;
		/* padding: 0 20rpx; */
		/* justify-content: center; */
	}

	.publishing .item1 image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
		margin-left: 20rpx;
	}

	.publishing .bg2 {
		background-color: #ECF2F8 !important;
	}
.publishing .tip{
	font-size: 14px;
	color: #a1a1a1;
	width: 85%;
	/* background-color: #000000; */
	margin: 10rpx;
}
	.publishing .item2 {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 640rpx;
		height: 120rpx;
		border-radius: 20rpx;
		overflow: hidden;
		background-color: #F4E9D0;
	}

	.publishing .item2 image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
		margin-left: 20rpx;
	}

	.publishing .t-end {
		font-size: 12px;
		/* font-weight: 400; */
		color: #ffffff;
		text-shadow: 1rpx 1rpx 1rpx #a1a1a1;
		display: block;
		width: 100%;
		height: 38rpx;
		background-color: #15a0ac;
		text-align: center;
		line-height: 38rpx;
	}

	.publishing .t-bg1 {
		background-color: #F2C6C0;
	}

	.publishing .t-bg2 {
		background-color: #BFD8ED;
	}

	/* .publishing .t-bg3 {
		background-color: #F4E9D0;
	} */
</style>