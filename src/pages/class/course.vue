<template>
	<!-- 课程详情页 -->
	<view class="course">
		<!-- 视频播放器 -->
		<video src="" controls class="video"></video>
		<!-- 后退和分享按钮 -->
		<view class="back">
			<el-button class="btn" link @click="back">
				<img src="@/static/image/icon/back_android.svg" alt="">
			</el-button>
			<el-button class="btn" link>
				<img src="@/static/image/icon/share.svg" alt="">
			</el-button>
		</view>
		<!-- 简介 -->
		<view class="content">
			<text class="title">AI实践与广泛应用</text>
			<view class="name">
				<!-- 图标 -->
				<img src="@/static/image/icon/people_fill.svg" alt="">
				<text>123教授</text>
				<!-- 收藏功能 -->
				<el-button class="favor" link>
					<img src="@/static/image/icon/favor_fill.svg" alt="">
					{{favor_score}}
				</el-button>
			</view>
			<text>在实践和应用中，人工智能技术都扮演着重要的角色，但是它们的目的和重点略有不同。在实践和应用中，人工智能技术都扮演着重要的角色，但是它们的目的和重点略有不同。</text>
			<view class="info">
				<img src="@/static/image/icon/attention_fill.svg" alt="">
				<text>{{info_watch}}</text>
				<text>语言：{{info_language}}</text>
				<text>发布时间：{{info_time}}</text>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="comment">
			<view class="input">
				<text class="title">热门评论</text>
				<!-- 输入框 -->
				<el-input class="item" v-model="input" size="small" placeholder="写条评论吧...">
					<template #append class="p-0">
						<el-button class="send">
							<img src="@/static/image/icon/check.svg" alt="">
						</el-button>
					</template>
				</el-input>
				<el-button class="more" link>
					查看更多
					<img src="@/static/image/icon/right.svg" alt="">
				</el-button>
			</view>
			<!-- 用户评论 -->
			<view class="box">
				<view class="item" v-for="i in 3">
					<img src="@/static/image/userImg1.png" alt="">
					<view class="info">
						<text class="name">{{name}}</text>
						<text class="time">{{time}}</text>
						<text class="text">{{text}}</text>
						<view class="btnGroup">
							<el-button class="btn" link>
								<img src="@/static/image/icon/appreciate_fill_light.svg" alt="">
							</el-button>
							<el-button class="btn" link>
								<img src="@/static/image/icon/oppose_fill_light.svg" alt="">
							</el-button>
							<el-button class="btn" link>
								<img src="@/static/image/icon/message_fill_light.svg" alt="">
							</el-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const favor_score = "5.1"
	const info_watch = "1223"
	const info_language = "中文"
	const info_time = "2023.8.8 18:08"
	const input = ref("")
	const name = "用户123"
	const time = "08-09 18:08"
	const text = "人工智能的实践和应用应该是两个不同的概念。"
	
	let back=()=>{
		uni.navigateBack({
			delta:2
		})
	}
</script>

<style>
	.course {
		background-color: #f3efee;
		font-size: 12px;
	}


	/* 视频开始 */

	.video {
		width: 100%;
	}

	/* 视频结束 */

	/* 分享和后退按钮开始 */
	.back {
		position: fixed;
		top: 0;
		width: 710rpx;
		margin: 20rpx 20rpx;
		display: flex;
		justify-content: space-between;
		background-color: transparent;
	}
	.back .btn{
		background-color:#9e9e9e60;
	}
	.back .btn img{
		width: 50rpx;
	}

	/* 分享和后退按钮结束 */
	/* 简介开始 */
	.content {
		width: 690rpx;
		margin: 20rpx auto;
	}

	.content .title {
		font-size: 20px;
		font-weight: 600;
		display: block;
		margin: 20rpx 0;
	}

	.content .name {
		margin: 10rpx 0;
		color: #15a0ac;
		font-weight: 600;
		font-size: 16px;
		display: flex;
		width: 280rpx;
		justify-content: space-between;
		align-content: center;
	}

	.content .name img {
		width: 20px;
	}

	.content .name .favor {
		background-color: #ffffff;
	}

	.content .name .favor img {
		width: 14px;
		margin-right: 6rpx;
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

	/* 简介结束 */
	/* 评论区开始 */
	.comment {
		width: 690rpx;
		margin: 20rpx auto;
		font-size: 12px;
	}

	.comment .input {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30rpx 0;
	}

	.comment .input .title {
		font-weight: 600;
		display: block;
		width: auto;
		font-size: 13px;
	}

	/* 输入框 */
	.comment .input .item {
		width: 400rpx;
		height: 50rpx;
		border-radius: 25rpx !important;
		overflow: hidden;
	}

	.comment .input .item :deep(.el-input__wrapper) {
		/* 如果没有下面这一行样式的话 无法对border进行自定义修改 */
		box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
		border: none;
	}

	/* 发送按钮 */
	.comment .input .send {
		border: none;
		background-color: #ffffff;
		padding-top: 10rpx;
	}

	.comment .input .send img {
		width: 40rpx;
	}

	/* 查看更多按钮 */
	.comment .input .more {
		font-size: 12px;
		color: #15a0ac;
	}

	.comment .input .more img {
		width: 14px;
	}

	/* 用户评论 */
	.comment .box .item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}

	.comment .box .item img {
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
	}

	.comment .box .item .info .btn img {
		width: 100%;
		height: 100%;
	}

	/* 评论区结束 */
</style>