<template>
	<!-- 好书推荐 -->
	<view class="book">
		<!-- 顶部 -->
		<myheader title=''></myheader>
		<!-- 书籍 -->
		<view class="blueb">
			<image :src="book.cover" alt="" />
			<view class="content">
				<text class="name">{{book.name}}</text>
				<text class="chapter">共{{book.total}}章</text>
				<view class="vip">
					<text>会员免费读</text>
					<image src="@/static/image/icon/right_brown.png" alt=""/>
				</view>

			</view>
		</view>
		<!-- 作者 -->
		<!-- 简介 -->
		<view class="summary">
			<!-- <img src="http://www.a-puppy-c.top/smartLearning/antro.png" alt="" class="img_author"
				style="width: 78px;height:41px;"> -->
			<titles title='作者' class="sutit"></titles>
			<text class="author">{{book.author}}</text>
			<text class="title"></text>
			<!-- <image src="http://www.a-puppy-c.top/smartLearning/intro.png" style="width: 64px;height: 38px;"></image> -->
			<titles title='简介' class="autit"></titles>
			<text class="content">{{book.intro}}</text>

		</view>
		<!-- 内容 -->
		<!-- 	<view class="substance">
			<text class="chapter">简介</text>
			<text></text>
		</view> -->
	</view>
	<button class="start" @click="gotoBook(bookId)">开始阅读</button>
</template>

<script setup>
	import myheader from "@/component/header.vue";
	import titles from "@/pages/community/component/title.vue"
	import {
		onLoad
	} from '@dcloudio/uni-app';

	import {
		onMounted,
		ref
	} from "vue";

	const author = '（美）布莱克·克里斯汀'
	var bookId = 0
	const book = ref({})

	onLoad((res) => {
		bookId = ~~res.id
		console.log("bookId" + bookId)
		getBook(bookId).then(res => {
			book.value = res
			console.log(book.value)
		})
	})


	let getBook = (id) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Book/selectBookById',
				method: 'GET',
				data: {
					bookId: id
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("主页-调用getBook成功");
						resolve(res.data.data)
					} else {
						console.log("主页-调用getBook失败");
						console.log(res.data);
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}

	// 书籍跳转
	let gotoBook = (bookId) => {
		uni.navigateTo({
			url: '/pages/class/bookRead?id=' + bookId
		})
	};
</script>

<style>
	.book {
		/* padding: 20rpx; */
		font-size: 12px;
		background-color: #90c9b4;
		padding-top: 20rpx;
	}

	/* ::v-deep .header {
		margin: 0;
		padding: 20rpx 40rpx;
		background-color: #90c9b4;
	} */
	/* 标题样式调整 */
	::v-deep .title .text {
		color: #000;
		font-size: 24px !important;
		font-family: 'AlimamaShuHeiTi-Bold';
	}

	::v-deep .title .background {
		width: 50px;
	}

	.autit :deep(.background) {
		background-color: #15a0ac;
	}


	/* 封面信息开始 */
	.blueb {
		display: flex;
		align-items: center;
		width: 650rpx;
		margin: 0 auto;
		padding-top: 20rpx;
		color: #fff;
	}

	.blueb>image {
		width: 170rpx;
		margin: 0 auto;
		height: 240rpx;
		border-radius: 4rpx;
	}

	.blueb .content {
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.blueb .content .name {
		font-size: 20px;
		/* margin: 10px auto; */
		margin-bottom: 10rpx;
		/* padding-top: 20px; */
	}

	.blueb .content .chapter {
		/* color: #909090; */
		/* margin: 0 auto; */
		font-size: 14px;
	}

	.blueb .content .vip {
		display: flex;
		align-items: center;
		color: #8F7C45;
		width: 76px;
		padding: 4rpx 16rpx;
		padding-right: 12rpx;
		background-image: linear-gradient(to right, #d8cdbe, #b29575);
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.blueb .content .vip text{
		line-height: 30rpx;
		margin-bottom: 2rpx;
	}

	.blueb .content .vip>image {
		width: 14px;
		height: 14px;
		margin-left: 2px;
	}

	/* 封面信息结束 */
	/* 简介开始 */
	.summary {
		background-color: #ffffff;
		padding: 50rpx;
		margin-top: 40rpx;
		border-radius: 60rpx 60rpx 0 0;
		display: flex;
		flex-direction: column;
	}

	.summary .title {
		font-size: 18px;
	}

	.summary .content {
		margin: 24rpx 0;
		/* color: #909090; */
		font-size: 17px;
		line-height: 1.25rem;
		font-family: system-ui;

	}

	.summary .author {
		font-size: 25px;
		display: inline-block;
		font: small-caps bold 24px/1 sans-serif;
		margin: 0 auto;
		padding-bottom: 20px;
	}

	/* 简介结束 */
	/* 内容开始 */
	.substance {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		padding: 20rpx 50rpx;
	}

	.substance .chapter {
		display: block;
		text-align: center;
		font-size: 20px;
		margin-bottom: 20rpx;
	}

	/* 内容结束 */
	/* 按钮开始*/
	.start {
		/* position: fixed; */
		bottom: 0;
		width: 300px;
		margin: 0 auto;
		font-size: 16px;
		font-weight: bold;
		color: white;
		text-shadow: grey 2px 2px 2px;
		background-color: #8BC1AE;

	}
</style>