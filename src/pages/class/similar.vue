<template>
	<!-- 相关推荐页 -->
	<view class="course">
		<myheader title='相关推荐'></myheader>
		<!-- 音频播放器 -->
		<view class="audio">
			<image class="ear" @click="playAudio" src="../../static/image/icon/ear.png" mode="aspectFit"></image>
			<image class="bgimg" src="@/static/image/similar2.png" mode="aspectFit"></image>
			<view class="bg">

			</view>
			<view class="look">
				<image src="@/static/image/icon/eye_w.svg" mode="aspectFit"></image>
				{{similar[id].eyes}}
			</view>
		</view>
		<!-- 简介 -->
		<view class="content">
			<text class="title">{{similar[id].sTitle}}</text>
			<view class="name">
				<!-- 图标 -->
				<!-- <image src="@/static/image/icon/people_fill.svg" alt="" /> -->
				<text>{{similar[id].sTip}}</text>
				<!-- 收藏功能 -->
				<image src="@/static/image/icon/favor_fill.svg" mode="scaleToFill" />
			</view>
			<text class="detail">{{similar[id].lessonDetail}}</text>
			<view class="info">
				<img src="@/static/image/icon/attention_fill.svg" alt="">
				<text>{{similar[id].eyes}}</text>
				<text>语言：{{similar[id].language}}</text>
				<text>发布时间：{{similar[id].time}}</text>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="comment">
			<view class="input">
				<text class="title">热门评论</text>
				<!-- 输入框 -->
				<view class="topBottom">
					<input class="search" v-model="input" placeholder="写条评论吧" placeholder-style="font-size:14px" />
					<image @click="" src="@/static/image/icon/check.svg" mode=""></image>
				</view>
				<view class="more" link>
					查看更多
					<image src="@/static/image/icon/right.svg" alt="" />
				</view>
			</view>
			<!-- 用户评论 -->
			<view class="box">
				<view class="item" v-for="(re,index) in remark" :key="index">
					<image :src="re.userimg" alt="" class="remarkImg" />
					<view class="info">
						<text class="name">{{re.userName}}</text>
						<text class="time">{{re.time}}</text>
						<text class="text">{{re.text}}</text>
						<view class="btnGroup">
							<image class='btn' src="@/static/image/icon/appreciate_fill.svg" alt="" />
							<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
							<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onHide,
		onLoad,
		onShow
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	import myheader from "@/component/header.vue"
	const input = ref("")
	const id = ref(0)
	const audioShow = ref(false)
	const similar = [{
		sTitle: '人工智能觉醒之迷（上）什么是意识？',
		sTip: '真假世界之迷',
		content: '音频介绍',
		time: '2023-7-16 14:30',
		eyes: 1942,
		language: '中文'
	}, {
		sTitle: '计算机的演化算法如何模拟生命？',
		sTip: '真假世界之迷',
		content: '音频介绍',
		time: '2023-8-21 18:21',
		eyes: 1823,
		language: '中文'
	}]
	const remark = [{
		userName: '志海',
		time: '2023-7-17 20:06',
		text: '不仅表达了我们对人工智能和意识的理解，也提出了对未来科技发展的独特看法。',
		userimg: 'http://www.a-puppy-c.top/smartLearning/avatar/avatar8.jpg'
	}, {
		userName: '行舟',
		time: '2023-7-17 20:06',
		text: '在我看来，意识是无法被模拟或复制的，因为它包含了我们对世界的独特感受和理解。',
		userimg: 'http://www.a-puppy-c.top/smartLearning/avatar/avatar12.png'
	}, {
		userName: '木林',
		time: '2023-7-17 20:06',
		text: '对人工智能是否具有意识的探讨，引发了我深深的思考。这个问题不仅涉及到科技的发展，还牵涉到伦理、法律以及社会等多个层面。',
		userimg: 'http://www.a-puppy-c.top/smartLearning/avatar/avatar6.jpg'
	}]

	// 音频
	const audio = uni.createInnerAudioContext();
	audio.autoplay = true;
	audio.src = 'http://www.a-puppy-c.top/smartLearning/tuijian.MP3';
	audio.stop()
	audio.onError((res) => {
		console.log(res.errMsg);
	});
	const playAudio = () => {
		console.log(99)
		if (audioShow.value) {
			audio.play()
			audioShow.value = false
		} else {
			audio.pause()
			audioShow.value = true
		}
	}

	onLoad((res) => {
		id.value = ~~res.id
	})
	onHide(() => {
		audio.stop()
	})
</script>

<style lang="scss">
	.course {
		background-color: #f3f3f3;
		font-size: 12px;
		padding-top: 20rpx;
	}

	/* 视频开始 */

	.audio {
		width: 100%;
		z-index: 0;
		position: relative;
		display: flex;
		justify-content: center;

		.bg {
			background-color: #90c9b4;
			position: absolute;
			z-index: 10;
			width: 100%;
			height: 370rpx;
			top: 80rpx;
		}

		.bgimg {
			margin: 30rpx 0;
			z-index: 90;
			width: 700rpx;
		}

		.ear {
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			z-index: 100;
			top: 200rpx;
			left: 44%;
		}

		.look {
			display: flex;
			align-items: center;
			z-index: 100;
			position: absolute;
			bottom: 30rpx;
			left: 90rpx;
			color: #fff;
		}

		.look image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 10rpx;
		}

	}

	/* 视频结束 */


	/* 简介开始 */
	.content {
		width: 690rpx;
		margin: 20rpx auto;
	}

	.content .title {
		font-size: 20px;
		font-weight: 600;
		display: block;
		font-weight: bolder;
		margin: 20rpx 0;
	}

	.content .name {
		margin: 10rpx 6rpx;
		color: #15a0ac;
		font-weight: 600;
		font-size: 16px;
		width: 320rpx;
		display: flex;
		justify-content: left;
		align-content: center;
	}

	.content .name text {
		/* margin: 0 26rpx; */
		font-size: 14px;
		color: #9e9e9e;
	}

	.content .name image {
		width: 16px;
		height: 16px;
		margin-top: 6rpx;
	}

	.content .name .favor {
		background-color: #ffffff;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		font-size: 14px;
		padding: 4rpx 6rpx;
	}

	.content .name .favor image {
		width: 14px;
		height: 14px;
		margin-right: 6rpx;
		margin-bottom: 2rpx;
	}

	.content .info {
		color: #9e9e9e;
		display: flex;
		margin: 14rpx 0;
	}

	.content .info img {
		width: 12px;
	}

	.content .info :nth-child(3) {
		margin-left: 30rpx;
		margin-right: 60rpx;
	}

	.detail {
		display: block;
		width: 21rem;
		margin: 0 auto;
		font-size: 14px;
		line-height: 1.3rem;

	}

	/* 简介结束 */
	/* 评论区开始 */
	.comment {
		width: 690rpx;
		margin: 20rpx auto;
		font-size: 16px;
	}

	.comment .input {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin: 30rpx 0; */
	}

	.comment .input .title {
		font-weight: 600;
		display: block;
		width: auto;
		font-size: 15px;
	}

	/* 输入框 */
	.comment .topBottom {
		width: 340rpx;
		height: 50rpx;
		background-color: #ffffff;
		margin: 30rpx 10rpx;
		padding: 0 20rpx;
		border-radius: 25rpx !important;
		overflow: hidden;
		display: flex;
		align-items: center;
		font-size: 12px;
	}

	.comment .topBottom .search {
		width: 100%;
	}

	.comment .topBottom image {
		/* background-color: #90c9b4; */
		margin-left: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}

	/* 查看更多按钮 */
	.comment .input .more {
		font-size: 14px;
		color: #15a0ac;
	}

	.comment .input .more image {
		width: 14px;
		height: 14px;
	}

	/* 用户评论 */
	.comment .box .item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}

	.comment .box .item image {
		width: 80rpx;
		height: 80rpx;

	}

	.comment .box .item .info {
		width: 600rpx;
	}

	.comment .box .item .info .name,
	.time,
	.text {
		display: block;
		margin-left: 10rpx;
		font-size: 13px;
		line-height: 1.3rem;
	}


	.comment .box .item .info .time {
		color: #9e9e9e;
		margin-bottom: 10rpx;
	}

	/* 按钮组 */
	.comment .box .item .info .btnGroup {
		margin-top: 20rpx;

	}

	.comment .box .item .info .btn {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	.comment .box .item .info .btn img {
		width: 100%;
		height: 100%;
	}

	.remarkImg {
		border-radius: 20px;
	}

	/* 评论区结束 */
</style>