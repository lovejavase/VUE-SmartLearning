<template>
	<view class="attention">
		<view class="item" v-for="user in mylist">
			<view class="user">
				<image src="@/static/image/userImg1.png" alt="" />
				<view class="">
					<text class="name">{{user.name}}</text>
					<text class="num">内容：{{user.num}}</text>
					<text class="fans">粉丝：{{user.fans}}</text>
				</view>
				<view class="btn">已关注</view>
			</view>
			<view class="content" @click="gotoDetail">
				<text class="text">{{user.text}}</text>
				<text class="author">作者：{{user.name}}</text>
				<view class="btnGroup" >
					<image class='btn' src="@/static/image/icon/appreciate_fill_light.svg" alt="" />
					<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
					<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
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
	
	let gotoDetail = () => {
		console.log('111')
		uni.navigateTo({
			url: '/pages/community/post'
		})
	}
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

	.attention .user image {
		width: 80rpx;
		height: 80rpx;
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
		background-color: #f6d95f20;
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

	.attention .content .btn {
		width: 40rpx;
		height: 40rpx;
		display: inline-flex;
		margin-right: 20rpx;
		border-radius: 4rpx;
		padding: 2rpx 4rpx;
	}

	/* 帖子内容结束 */
</style>