<template>
	<!-- 课堂主页面 -->
	<view class="class_">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="text"></ClassHeader>
		<!-- 推广 -->
		<view class="carousal">
			<el-carousel trigger="click" indicator-position="none" height="300rpx">
				<el-carousel-item>
					<img class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;">
				</el-carousel-item>
				<el-carousel-item>
					<img class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;">
				</el-carousel-item>
				<el-carousel-item>
					<img class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;">
				</el-carousel-item>

			</el-carousel>
		</view>

		<!-- 精选好课 -->
		<view class="topClass">
			<!-- 标题 -->
			<view class="title">
				<view class=" left">
					<view class="background"> </view>
					<text class="text">精选好课</text>
				</view>
				<el-link class="link">
					<el-icon>
						<Sort />
					</el-icon>
				</el-link>
			</view>
			<!-- 内容 -->
			<view class="content">
				<el-card class="card" v-for="(i,index) in 4" :key="i" @click='gotoCourse' shadow="never"
					:body-style="{ padding: '0px' }">
					<img src="@/static/image/class1.png" class="image" />
					<view class="text">
						<text class="className">AI实践与广泛应用</text>
						<br>
						<el-icon class="icon">
							<UserFilled />
						</el-icon>
						<text class="name">123教授</text>
						<text class="value">￥150</text>
					</view>
				</el-card>
			</view>
		</view>
		<!-- 相关推荐 -->
		<view class="similar">
			<!-- 标题 -->
			<ClassTitle :title="title[0]"></ClassTitle>
			<!-- 内容 -->
			<view class="content" v-for="(i,index) in 2">
				<img src="@/static/image/similar2.png" alt="">
				<el-card class="box-card" shadow="never">
					<div class="itemTitle">人工智能觉醒之谜（上）什么是意识？</div>
					<div class="itemName">真假世界未解之谜</div>
					<div class="itemBtns">
						<el-icon class="icon">
							<svg t="1691585401288" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="6455" width="32" height="32">
								<path
									d="M859.733333 426.666667h-183.466666c14.933333-40.533333 34.133333-117.333333 23.466666-200.533334-4.266667-55.466667-38.4-98.133333-85.333333-113.066666-34.133333-10.666667-70.4-6.4-89.6 12.8-23.466667 23.466667-34.133333 70.4-46.933333 121.6-8.533333 36.266667-17.066667 72.533333-29.866667 91.733333-34.133333 59.733333-123.733333 83.2-134.4 87.466667H256c-12.8 0-21.333333 8.533333-21.333333 21.333333v448c0 12.8 8.533333 21.333333 21.333333 21.333333h68.266667c2.133333 0 6.4 0 8.533333-2.133333h394.666667c202.666667 0 213.333333-398.933333 213.333333-403.2-2.133333-46.933333-44.8-85.333333-81.066667-85.333333zM170.666667 424.533333H106.666667c-12.8 0-21.333333 8.533333-21.333334 21.333334v448c0 12.8 8.533333 21.333333 21.333334 21.333333h64c12.8 0 21.333333-8.533333 21.333333-21.333333v-448c0-10.666667-10.666667-21.333333-21.333333-21.333334z"
									fill="#707070" p-id="6456"></path>
							</svg>
						</el-icon>
						<el-icon class="icon">
							<svg t="1691585373568" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="6253" width="32" height="32">
								<path
									d="M725.333333 106.666667H256c-12.8 0-21.333333 8.533333-21.333333 21.333333v448c0 12.8 8.533333 21.333333 21.333333 21.333333h70.4c10.666667 4.266667 89.6 27.733333 123.733333 87.466667 10.666667 19.2 21.333333 55.466667 29.866667 91.733333 12.8 51.2 23.466667 98.133333 46.933333 123.733334 12.8 12.8 32 19.2 53.333334 19.2 12.8 0 23.466667-2.133333 36.266666-6.4 46.933333-17.066667 78.933333-59.733333 87.466667-115.2 10.666667-81.066667-10.666667-157.866667-23.466667-200.533334h183.466667c36.266667 0 78.933333-38.4 78.933333-85.333333-4.266667-6.4-12.8-405.333333-217.6-405.333333zM170.666667 106.666667H106.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333v448c0 12.8 8.533333 21.333333 21.333334 21.333333h64c12.8 0 21.333333-8.533333 21.333333-21.333333V128c0-12.8-10.666667-21.333333-21.333333-21.333333z"
									fill="#707070" p-id="6254"></path>
							</svg>
						</el-icon>
						<el-icon class="icon">
							<svg t="1691585431088" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="6967" width="32" height="32">
								<path
									d="M512 64C264.533333 64 64 234.666667 64 445.866667c0 204.8 226.133333 339.2 268.8 362.666666-2.133333 21.333333-19.2 76.8-36.266667 121.6-2.133333 8.533333 0 17.066667 4.266667 23.466667 4.266667 4.266667 8.533333 6.4 14.933333 6.4 2.133333 0 6.4 0 8.533334-2.133333 27.733333-12.8 153.6-70.4 192-130.133334C761.6 825.6 960 654.933333 960 445.866667 960 234.666667 759.466667 64 512 64z m85.333333 469.333333H341.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h256c12.8 0 21.333333 8.533333 21.333334 21.333333s-10.666667 21.333333-21.333334 21.333333z m85.333334-128H341.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h341.333334c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z"
									fill="#707070" p-id="6968"></path>
							</svg>
						</el-icon>
					</div>
				</el-card>
			</view>

		</view>
		<!-- 好书推荐 -->
		<view class="book">
			<!-- 标题 -->
			<ClassTitle :title="title[1]"></ClassTitle>
			<!-- 内容 -->
			<view class="content" v-for="(i,index) in 2">
				<el-card class="box-card" shadow="never">
					<view class="text">
						<text>各类智能化产品已经成为人类生活当中不可或缺的一部分智能手机、电脑、数控电器，甚至是已经逐渐形成规模化生产制造的各类机器人.....所有的这一切表明:人工智能来了人工智能的时代到来了!</text>
					</view>
					<view class="item">
						<img src="@/static/image/book1.png" alt="">
						<view class="">
							<div class="itemBook">地平线2025:人工智能来了</div>
							<div class="itemAuthor">共12章</div>
						</view>
						<el-button class="itemBtn" link @click='gotoBook'>
							<el-icon class="icon">
								<ArrowRight></ArrowRight>
							</el-icon>
							前往阅读
						</el-button>
					</view>

				</el-card>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		Search,
		ArrowRight,
		Sort,
		UserFilled,
		View as IconView
	} from '@element-plus/icons-vue'
	import {
		ref
	} from 'vue';

	import ClassTitle from './component/title.vue'
	import ClassHeader from './component/header.vue'

	const input = ''
	const text = "乐趣课堂"
	const searchText = "搜索课堂"
	const title = ["相关推荐", "好书推荐"]

	// 课堂跳转
	let gotoCourse = () => {
		uni.navigateTo({
			url: '/pages/class/course'
		})
	};
	// 书籍跳转
	let gotoBook = () => {
		uni.navigateTo({
			url: '/pages/class/book'
		})
	};
</script>

<style scoped>
	.class_ {
		margin: 0;
		padding: 0;
		background-color: #f3efee;
		font-size: 12px;
	}

	/* 推广开始 */
	.carousal {
		margin: 30rpx auto;
		width: 680rpx;
		/* margin-top: 0; */

		/* .carImg {
			width: 100rpx;
			height: auto;
		} */
	}

	/* 推广结束 */
	/* 精选好课开始 */
	.topClass {
		margin: 0 10rpx;
	}

	/* 标题 */
	.topClass .title {
		width: 680rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 0 4%;
		color: #15a0ac;
		position: relative;

	}

	.topClass .title .text {
		/* position: relative; */
		font-size: 14px;
		/* font-weight: 500; */
	}

	.topClass .title .link {
		font-size: 16px;
		color: #15a0ac;
		margin-top: 2px;
	}


	.topClass .title .left {
		display: inline-flex;
		align-items: center;
	}

	.topClass .title .background {
		background-color: #f6de2840;
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 0.1rem;
		margin-right: 0.1rem;
		/* 	overflow: hidden;
		position: absolute;
		top: 10px;
		left: 4%;
		bottom: 1%; */
	}

	/* 内容 */

	.topClass .content {
		margin: 10rpx auto;
		width: 700rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/* 斜体 */
		/* font-style: italic; */
	}

	.topClass .content .card {
		border-radius: 14rpx;
		width: 320rpx;
		margin: 10rpx 0;
	}

	.topClass .content .image {
		width: 100%;
		display: block;
	}

	.topClass .content .text {
		margin: 2% 4%;
		font-size: 12px;
	}

	.topClass .content .icon {
		color: #909090;
		margin-right: 1%;
	}

	.topClass .content .name {
		color: #909090;
		font-size: 10px;
	}

	.topClass .content .value {
		color: #15a0ac;
		font-size: 12px;
		font-weight: 600;
		display: block;
	}

	/* 精选好课结束 */
	/* 相关推荐开始 */
	.similar {
		margin: 20rpx;
	}

	.similar .content {
		width: 670rpx;
		margin: 10rpx auto;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 20rpx 10rpx;
	}

	.similar .content img {
		width: 240rpx;
		height: auto;
		max-height: 210rpx;
	}

	.similar .box-card {
		width: 410rpx;
		height: 210rpx;
		border: none;
	}

	.similar .box-card :deep(.el-card__body) {
		padding: 20rpx;
	}

	.similar .itemTitle {
		font-size: 13px;
		/* margin: 4rpx 0; */
	}

	.similar .itemName {
		font-size: 12px;
		color: #909090;
		margin: 12rpx 0;
	}

	.similar .itemBtns {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: flex-end;
	}

	.similar .itemBtns .icon {
		/* margin: 10rpx; */
		font-size: 20px;
	}

	.similar .itemBtns :nth-child(2) {
		margin: 0 10px;
	}

	/* 相关推荐结束 */
	/* 好书推荐开始 */
	.book {
		margin: 10rpx 10rpx 0rpx 10rpx;
		padding-bottom: 10rpx;
	}

	.book .content {
		margin: 20rpx auto;
		/* margin-bottom: 0; */
		width: 690rpx;
	}

	.book .text {
		font-size: 12px;
	}

	.book .item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 16rpx;
	}

	.book .item img {
		width: 100rpx;
		border-radius: 10rpx;
	}

	.book .item .itemBook {
		font-size: 13px;
		margin-bottom: 14rpx;
	}

	.book .item .itemAuthor {
		font-size: 12px;
		color: #909090;
	}

	.book .item .itemBtn {
		background-color: #f3efee;
		padding: 6rpx 2rpx;
		padding-right: 10rpx;
		margin-left: 20rpx;
		font-size: 12px;
		border-radius: 20rpx;
	}

	/* 好书推荐结束 */
</style>