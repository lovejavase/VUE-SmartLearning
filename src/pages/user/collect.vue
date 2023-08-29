<template>
	<!-- 收藏页 -->
	<view class="collect">
		<!-- 头部 -->
		<myheader title='收藏'></myheader>
		<!-- 内容 -->
		<view class="content">
			<el-card class="card" v-for="(i,index) in 4" :key="i" shadow="never" :body-style="{ padding: '0px' }">
				<img src="@/static/image/class1.png" class="image" />
				<view class="text">
					<text class="name">AI实践与广泛应用</text>
					<view class="bottom">
						<text class="tag">文章</text>
						<img src="@/static/image/icon/favor_fill_red.svg" />
					</view>
				</view>
			</el-card>
		</view>
		<text class="tip">已全部加载完毕……</text>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
</script>

<style>
	.collect {
		padding-top: 30rpx;
	}

	.content {
		margin: 10rpx auto;
		width: 690rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/* 斜体 */
		/* font-style: italic; */
	}

	.content .card {
		border-radius: 14rpx;
		width: 300rpx;
		margin: 10rpx 0;
	}

	.content .image {
		width: 100%;
		display: block;
	}

	.content .text {
		margin: 8rpx 20rpx;
	}


	.content .name {
		font-size: 12px;
		display: block;
	}

	.content .bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 8rpx;
	}

	.content .bottom .tag {
		display: block;
		width: 50rpx;
		padding: 1rpx 6rpx;
		font-size: 10px;
		color: #e66464;
		border: #e66464 2rpx solid;
		border-radius: 4rpx;
	}

	.content .bottom>img {
		width: 34rpx;
	}

	.tip {
		color: #909090;
		font-size: 12px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		margin-top: 30rpx;
	}
</style>