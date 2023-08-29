<template>
	<view class="attention">
		<view class="item" v-for="user in mylist">
			<view class="user">
				<img src="@/static/image/userImg1.png" alt="">
				<view class="">
					<text class="name">{{user.name}}</text>
					<text class="num">内容：{{user.num}}</text>
					<text class="fans">粉丝：{{user.fans}}</text>
				</view>
				<el-button class="btn" link>已关注</el-button>
			</view>
			<view class="content">
				<text class="text">{{user.text}}</text>
				<text class="author">作者：{{user.name}}</text>
				<view class="btnGroup">
					<el-button link>11</el-button>
					<el-button link>11</el-button>
					<el-button link>11</el-button>
				</view>
			</view>
			<view class="borderbottom">
			</view>
		</view>
	</view>
</template>

<script setup>
	const mylist = [{
		name: "张遥",
		img: "",
		num: "142",
		fans: "1284",
		text: "揭秘中国AI创投的隐秘力量：中科院如何批量复制独角兽？"
	}, {
		name: "张遥",
		img: "",
		num: "142",
		fans: "1284",
		text: "揭秘中国AI创投的隐秘力量：中科院如何批量复制独角兽？"
	}, {
		name: "张遥",
		img: "",
		num: "142",
		fans: "1284",
		text: "未来的强人工智能是什么样的呢？"
	}]
</script>

<style scoped>
	.attention {
		padding: 20rpx;
		padding-bottom: 0;
		width: 710rpx;
		font-size: 12px;
	}

	.attention .item .borderbottom {
		margin-left: -20rpx;
		margin-top: 20rpx;
		width: 750rpx;
		height: 10rpx;
		background-color: #e6e2cf60;
	}

	/* 用户信息开始 */
	.attention .user {
		display: flex;
		align-items: center;
		padding: 20rpx;
	}

	.attention .user img {
		width: 80rpx;
		margin-right: 14rpx;
	}

	.attention .user .name {
		display: block;
		margin-bottom: 6rpx;
		font-size: 14px;
	}

	.attention .user .num,
	.fans {
		color: #909090;
	}

	.attention .user .num {
		margin-right: 23rpx;
	}

	/* 关注按钮 */
	.attention .user .btn {
		margin-left: 200rpx;
		font-size: 12px;
		background-color: #15a0ac90;
		color: #ffffff;
		/* text-shadow: 1rpx 1rpx 1rpx #90909090; */
		padding: 8rpx 16rpx;
		border-radius: 20rpx;
	}

	/* 用户信息结束 */
	/* 帖子内容开始 */

	.attention .content {
		margin: 0 auto;
		width: 620rpx;
		padding: 20rpx;
		background-color: #fef5e3;
		border-radius: 20rpx;
		/* border: #909090 1px solid; */
	}

	.attention .content .text {
		font-size: 14px;
		display: block;
		margin-bottom: 10rpx;
		min-height: 28px;
	}

	.attention .content .author {
		color: #909090;
		display: block;
		margin-bottom: 10rpx;
	}

	/* 帖子内容结束 */
</style>