<template>
	<!-- 课堂主页面 -->
	<view class="class_">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="text"></ClassHeader>
		<!-- 推广 -->
		<view class="carousal">
			<swiper class="swiper" circular easeInOutCubic autoplay="true" interval="4500" duration="500">
				<swiper-item>
					<image class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;" />
				</swiper-item>
				<swiper-item>
					<image class="carImg" src="@/static/image/classBanner1.png" alt="" style="width: 100%;" />
				</swiper-item>
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
				<svg t="1694354402942" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="12296" width="32" height="32">
					<path
						d="M332.256 162.432c-12-4.992-25.728-2.24-34.88 6.944l-192 192c-12.512 12.512-12.512 32.736 0 45.248s32.736 12.512 45.248 0L288 269.248 288 800c0 17.696 14.336 32 32 32s32-14.304 32-32L352 192C352 179.072 344.192 167.392 332.256 162.432z"
						p-id="12297" fill="#15a0ac"></path>
					<path
						d="M918.624 617.376c-12.512-12.512-32.736-12.512-45.248 0L768 722.752 768 192c0-17.664-14.304-32-32-32s-32 14.336-32 32l0 608c0 12.928 7.776 24.64 19.744 29.568C727.712 831.232 731.872 832 736 832c8.32 0 16.512-3.264 22.624-9.376l160-160C931.136 650.112 931.136 629.888 918.624 617.376z"
						p-id="12298" fill="#15a0ac"></path>
				</svg>
			</view>
			<!-- 内容 -->
			<view class="content">
				<view class="card" v-for="(item,index) in classes" :key="index" @click='gotoCourse(item.lessonId)'>
					<image :src="item.lessonImage" class="image" />
					<view class="text">
						<text class="className">{{item.lessonTitle}}</text>
						<view class="mid">
							<svg t="1691561700747" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="43482" width="32" height="32">
								<path
									d="M497.664 0.512c-150.016 0-271.36 121.344-271.36 271.36s121.344 271.36 271.36 271.36 271.36-121.344 271.36-271.36c0-149.504-121.856-271.36-271.36-271.36z m0 471.04c-110.08 0-199.68-89.6-199.68-199.68s89.6-199.68 199.68-199.68 199.68 89.6 199.68 199.68c0 110.592-89.6 199.68-199.68 199.68zM771.584 630.784H242.176C133.632 630.784 46.08 718.336 46.08 826.88c0 108.032 87.552 196.096 196.096 196.096h529.408c108.032 0 196.096-87.552 196.096-196.096 0-108.544-88.064-196.096-196.096-196.096z m119.296 196.096c0 65.024-57.856 117.76-129.024 117.76H251.904c-71.168 0-129.024-52.736-129.024-117.76s57.856-117.76 129.024-117.76h509.952c71.168 0 129.024 52.736 129.024 117.76z"
									p-id="43483" fill="#515151"></path>
							</svg>
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
			<view class="content" v-for="(i,index) in 2">
				<image src="@/static/image/similar2.png" alt="" />
				<view class="box-card">
					<div class="itemTitle">人工智能觉醒之谜（上）什么是意识？</div>
					<div class="itemName">真假世界未解之谜</div>
					<div class="itemBtns">
						<svg t="1691585401288" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="6455" width="32" height="32">
							<path
								d="M859.733333 426.666667h-183.466666c14.933333-40.533333 34.133333-117.333333 23.466666-200.533334-4.266667-55.466667-38.4-98.133333-85.333333-113.066666-34.133333-10.666667-70.4-6.4-89.6 12.8-23.466667 23.466667-34.133333 70.4-46.933333 121.6-8.533333 36.266667-17.066667 72.533333-29.866667 91.733333-34.133333 59.733333-123.733333 83.2-134.4 87.466667H256c-12.8 0-21.333333 8.533333-21.333333 21.333333v448c0 12.8 8.533333 21.333333 21.333333 21.333333h68.266667c2.133333 0 6.4 0 8.533333-2.133333h394.666667c202.666667 0 213.333333-398.933333 213.333333-403.2-2.133333-46.933333-44.8-85.333333-81.066667-85.333333zM170.666667 424.533333H106.666667c-12.8 0-21.333333 8.533333-21.333334 21.333334v448c0 12.8 8.533333 21.333333 21.333334 21.333333h64c12.8 0 21.333333-8.533333 21.333333-21.333333v-448c0-10.666667-10.666667-21.333333-21.333333-21.333334z"
								fill="#707070" p-id="6456"></path>
						</svg>
						<svg t="1691585373568" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="6253" width="32" height="32">
							<path
								d="M725.333333 106.666667H256c-12.8 0-21.333333 8.533333-21.333333 21.333333v448c0 12.8 8.533333 21.333333 21.333333 21.333333h70.4c10.666667 4.266667 89.6 27.733333 123.733333 87.466667 10.666667 19.2 21.333333 55.466667 29.866667 91.733333 12.8 51.2 23.466667 98.133333 46.933333 123.733334 12.8 12.8 32 19.2 53.333334 19.2 12.8 0 23.466667-2.133333 36.266666-6.4 46.933333-17.066667 78.933333-59.733333 87.466667-115.2 10.666667-81.066667-10.666667-157.866667-23.466667-200.533334h183.466667c36.266667 0 78.933333-38.4 78.933333-85.333333-4.266667-6.4-12.8-405.333333-217.6-405.333333zM170.666667 106.666667H106.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333v448c0 12.8 8.533333 21.333333 21.333334 21.333333h64c12.8 0 21.333333-8.533333 21.333333-21.333333V128c0-12.8-10.666667-21.333333-21.333333-21.333333z"
								fill="#707070" p-id="6254"></path>
						</svg>
						<svg t="1691585431088" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="6967" width="32" height="32">
							<path
								d="M512 64C264.533333 64 64 234.666667 64 445.866667c0 204.8 226.133333 339.2 268.8 362.666666-2.133333 21.333333-19.2 76.8-36.266667 121.6-2.133333 8.533333 0 17.066667 4.266667 23.466667 4.266667 4.266667 8.533333 6.4 14.933333 6.4 2.133333 0 6.4 0 8.533334-2.133333 27.733333-12.8 153.6-70.4 192-130.133334C761.6 825.6 960 654.933333 960 445.866667 960 234.666667 759.466667 64 512 64z m85.333333 469.333333H341.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h256c12.8 0 21.333333 8.533333 21.333334 21.333333s-10.666667 21.333333-21.333334 21.333333z m85.333334-128H341.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h341.333334c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z"
								fill="#707070" p-id="6968"></path>
						</svg>
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
						<image src="../../static/image/icon/right_grey.png" mode=""></image>
						前往阅读
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
		font-size: 14px;
		/* font-weight: 500; */
	}

	.topClass .title svg {
		width: 36rpx;
		height: 36rpx;
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
		background-color: #ffffff;
	}

	.topClass .content .image {
		width: 100%;
		height: 180rpx;
		display: block;
	}

	.topClass .content .text {
		margin: 2% 4%;
		font-size: 12px;
	}

	.topClass .content .mid {
		display: flex;
		align-items: center;
		height: 30rpx;
	}

	.topClass .content .mid svg {
		margin-right: 4rpx;
		width: 20rpx;
		height: 20rpx;
	}

	.topClass .content .className {
		display: block;
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
		justify-content: space-evenly;
		flex-wrap: nowrap;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 20rpx 10rpx;
	}

	.similar .content image {
		width: 240rpx;
		height: auto;
		max-height: 210rpx;
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
		font-size: 13px;
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

	.similar .itemBtns svg {
		width: 40rpx;
		height: 40rpx;
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
		margin: 40rpx auto;
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
		padding-right: 10rpx;
		margin-left: 90rpx;
		font-size: 12px;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
	}


	.book .item .itemBtn image {
		width: 24rpx;
		height: 24rpx;
	}

	/* 好书推荐结束 */
</style>