<template>
	<!-- 用户修改信息页 -->
	<view class="modify">
		<!-- 头部 -->
		<myheader title='个人资料'></myheader>
		<!-- 用户信息 -->
		<view class="content">
			<view class="item">
				<text class="text">头像</text>
				<img src="@/static/image/icon/round_people_fill.svg" alt="">
			</view>
			<view class="item">
				<text class="text">昵称</text>
				<input class="my_input" focus placeholder="输入您的昵称" />
			</view>
			<view class="item">
				<text class="text">用户名</text>
				<input class="my_input" focus placeholder="输入您的用户名" />
			</view>
			<view class="item">
				<text class="text">性别</text>
				<input class="my_input" focus placeholder="输入您的性别" />
			</view>
			<view class="item">
				<text class="text">生日</text>
				<input class="my_input" focus placeholder="输入您的生日" />
			</view>
			<view class="item">
				<text class="text">手机</text>
				<input class="my_input" focus placeholder="输入您的手机" />
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style>
	.modify {
		padding-top: 30rpx;
	}

	.modify .content {
		width: 640rpx;
		margin: 0 auto;
		padding: 20rpx;
		color: #15a0ac;
	}

	.modify .content .item .text {
		font-size: 16px;
	}

	.modify .content .item {
		padding: 10rpx 0;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		border-bottom: #eeeeee solid 4rpx;
	}
	

	.modify .content .item img {
		width: 100rpx;
		height: 100rpx;
		margin-right: 6rpx;
	}

	.modify .content .item .my_input {
		margin-top: 14rpx;
		width: 640rpx;
		color: #515151;
		/* height: 40rpx; */
		/* background-color: #15a0ac; */
	}
	::v-deep .uni-input-wrapper{
		font-size: 12px;
	}
</style>