<template>
	<!-- 课堂主页面 -->
	<view class="class_">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="text"></ClassHeader>
		<!-- 推广 -->
		<view class="carousal">
			<swiper class="swiper" circular easeInOutCubic autoplay="false" interval="4500" duration="500">
				<swiper-item>
					<image class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;" />
				</swiper-item>
			</swiper>
		</view>
		<!-- 精选好课 -->
		<view class="topClass">
			<!-- 标题 -->
			<view class="title">
				<view class=" left">
					<view class="background"> </view>
					<text class="text">精选好课</text>
				</view>
				<image src="@/static/image/icon/sort.svg" alt="" />
			</view>
			<!-- 内容 -->
			<view class="content">
				<view class="card" v-for="(item,index) in classes" :key="index" @click='gotoCourse(item.lessonId)'>
					<image :src="item.lessonImage" class="image" />
					<view class="text">
						<text class="className">{{item.lessonTitle}}</text>
						<view class="mid">
							<image src="@/static/image/icon/user.svg" mode="" />
							<text class="name">{{item.lessonTeacher}}</text>
						</view>
						<text class="value">￥{{item.lessonPrice}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 相关推荐 -->
		<view class="similar">
			<!-- 标题 -->
			<ClassTitle :title="title[0]"></ClassTitle>
			<!-- 内容 -->
			<view class="content" v-for="(item,index) in similar" @click="gotoSimilar(index)">
				<image class="link" :src="item.link" alt="" />
				<image class='ear' src="@/static/image/icon/ear.png" mode="aspectFit"/>
				<view class="box-card">
					<div class="itemTitle">{{item.title}}</div>
					<div class="itemName">{{item.tip}}</div>
					<div class="itemBtns">
						<image class='btn' src="@/static/image/icon/appreciate_fill.svg" alt="" />
						<image class='btn' src="@/static/image/icon/oppose_fill_light.svg" alt="" />
						<image class='btn' src="@/static/image/icon/message_fill_light.svg" alt="" />
					</div>
				</view>
			</view>
		</view>

		<!-- 好书推荐 -->
		<view class="book">
			<!-- 标题 -->
			<ClassTitle :title="title[1]"></ClassTitle>
			<!-- 内容 -->
			<view class="content" v-for="(item,index) in ArrayList">
				<view class="text">
					<text>{{item.header}}</text>
				</view>
				<view class="item">
					<image :src="item.link" alt="" />
					<view class="">
						<div class="itemBook">{{item.name}}</div>
						<div class="itemAuthor">{{item.total}}</div>
					</view>
					<view class="itemBtn" link @click='gotoBook(item.id)'>
						前往阅读
						<image src="../../static/image/icon/right_grey.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部 -->
		<Footer></Footer>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
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
	import {
		onLoad
	} from '@dcloudio/uni-app';

	const ArrayList = reactive([{
			id: 1,
			link: 'http://www.a-puppy-c.top/smartLearning/book1.jpg',
			total: '共十章',
			header: '人工智能时代来临，将带来划时代的变革。人工智能正改变我们的社会、经济、政治和外交政策，这一切影响远远超过任何领域的传统范畴，而我们做好准备了吗？',
			name: "人工智能时代",
		},
		{
			id: 2,
			link: 'http://www.a-puppy-c.top/smartLearning/book2.jpg',
			total: '共十二章',
			header: '本书全面讲述人工智能的发展史，涵盖人工智能的起源、自动定理证明、专家系统、神经网络、自然语言处理、遗传算法、深度学习、强化学习、超级智能、哲学问题和未来趋势等。',
			name: "人工智能简史",
		},
	]);
	const similar = reactive([{
			id: 1,
			link: '../../static/image/similar2.png',
			title: '人工智能觉醒之谜（上）什么是意识？',
			tip: "真假世界之谜",
		},
		{
			id: 2,
			link: '../../static/image/similar1.png',
			title: '计算机的演化算法如何模拟生命？',
			tip: "真假世界之谜",
		},

	]);

	const input = ''
	const text = "乐趣课堂"
	const searchText = "搜索课堂"
	const title = ["相关推荐", "好书推荐"]
	const classes = ref([])

	onLoad(() => {
		getList().then(res => {
			for (let j = 0; j < res.length; j++) {
				classes.value.push(res[j])
			}
			// console.log(classes.value)
		})
	})

	let getList = () => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Lesson/getList',
				method: 'GET',
				data: {
					start: 0,
					limit: 4
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("getList请求成功");
						resolve(res.data.data)
					} else {
						console.log("getList请求失败");
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}


	// 课堂跳转
	let gotoCourse = (id) => {
		uni.navigateTo({
			url: '/pages/class/course?id=' + id
		})
	};
	// 课堂跳转
	let gotoSimilar = (id) => {
		uni.navigateTo({
			url: '/pages/class/similar?id=' + id
		})
	};
	// 书籍跳转
	let gotoBook = (id) => {
		uni.navigateTo({
			url: '/pages/class/book?id=' + id
		})
	};
</script>

<style scoped>
	.class_ {
		margin: 0;
		padding: 0;
		padding-top: 30rpx;
		background-color: #f3efee;
		font-size: 12px;
		padding-bottom: 80rpx;
		font-weight: 500;
	}

	/* 推广开始 */
	.carousal {
		margin: 30rpx auto;
		width: 680rpx;
	}

	.carousal image {
		width: 100%;
		height: 100%;
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
		align-items: center;
		flex-wrap: nowrap;
		padding: 0 4%;
		color: #15a0ac;
		position: relative;

	}

	.topClass .title .text {
		/* position: relative; */
		font-size: 18px;
		font-family: AlimamaShuHeiTi-Bold !important;
		/* font-weight: 500; */
	}

	.topClass .title>image {
		width: 40rpx;
		height: 40rpx;
	}


	.topClass .title>.left {
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
		width: 320rpx;
		margin: 10rpx 0;
		background-color: transparent;
		border-radius: 20rpx;
		overflow: hidden;

	}

	.topClass .content .image {
		width: 100%;
		height: 180rpx;
		display: block;
		background-color: transparent;
	}

	.topClass .content .text {
		padding: 8rpx 14rpx;
		font-size: 12px;
		background-color: #ffffff;
	}

	.topClass .content .mid {
		display: flex;
		align-items: center;
		height: 30rpx;
	}

	.topClass .content .mid>image {
		margin-right: 4rpx;
		width: 20rpx;
		height: 20rpx;
	}

	.topClass .content .className {
		display: block;
		font-size: 14px;
		font-weight: 500;
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
		margin: 30rpx 20rpx;
	}

	.similar .content {
		position: relative;
		width: 670rpx;
		margin: 10rpx auto;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: nowrap;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 20rpx 10rpx;
	}

	.similar .content .link {
		position: relative;
		width: 240rpx;
		height: auto;
		max-height: 210rpx;
		z-index: 10;
	}

	.similar .content .ear {
		position: absolute;
		z-index: 100;
		left: 100rpx;
		top: 90rpx;
		width: 70rpx;
		height: 70rpx;
	}

	.similar .box-card {
		width: 400rpx;
		height: 210rpx;
		border: none;
		display: flex;
		margin-left: 10rpx;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.similar .itemTitle {
		font-size: 16px;
		/* margin: 4rpx 0; */
	}

	.similar .itemName {
		font-size: 12px;
		color: #909090;
		margin: 12rpx 0;
	}

	.similar .itemBtns {
		/* width: 100%; */
		padding-right: 10rpx;
		height: auto;
		display: flex;
		justify-content: flex-end;

	}

	.similar .itemBtns .btn {
		width: 34rpx;
		height: 34rpx;
	}

	.similar .itemBtns :nth-child(2) {
		margin: 0 10px;
	}

	/* 相关推荐结束 */
	/* 好书推荐开始 */
	.book {
		margin: 40rpx 10rpx 0rpx 10rpx;
		padding-bottom: 10rpx;
	}

	.book .content {
		margin: 20rpx auto;
		/* margin-bottom: 0; */
		padding: 20rpx;
		width: 660rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
	}

	.book .text {
		font-size: 14px;
		line-height: 18px;
	}

	.book .item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 16rpx;
	}

	.book .item image {
		width: 100rpx;
		height: 130rpx;
		border-radius: 10rpx;
	}

	.book .item .itemBook {
		font-size: 15px;
		margin-bottom: 14rpx;
	}

	.book .item .itemAuthor {
		font-size: 13px;
		color: #909090;
	}

	.book .item .itemBtn {
		background-color: #f3efee;
		padding: 6rpx 4rpx;
		padding-left: 10rpx;
		padding-bottom: 8rpx;
		margin-left: 190rpx;
		font-size: 12px;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
	}


	.book .item .itemBtn image {
		width: 24rpx;
		height: 24rpx;
	}

	/* 好书推荐结束 */
</style>