<template>
	<view class="index">
		<!-- 顶部 -->
		<view class="top">
			<view class="">
				<view class="topTop">
					<view class="topHi">
						<text class="titleTop">Hi!</text>
					</view>
					<view class="topButton">
						<view class="topBtn" @click="gotoNotice">
							<image src="@/static/image/notice1.png" mode=""></image>
						</view>
						<view class="topBtn" @click="gotoMy">
							<image src="@/static/image/my1.png" mode=""></image>
						</view>
					</view>
				</view>
				<text class="titleBottom">{{hiText}}</text>
			</view>
			<view class="topBottom">
				<input class="search" v-model="input" placeholder="搜索科普/课堂/识别" />
				<image @click="sendSearch" src="@/static/image/icon/search.png" mode=""></image>
			</view>
		</view>
		<!-- 卡片轮播 -->
		<view class="carousal">
			<swiper class="swiper" circular easeInOutCubic autoplay="true" interval="4500" duration="500">
				<swiper-item>
					<image @click="banner1" class="carImg" src="@/static/image/days1.png" mode="aspectFit" alt="" />
				</swiper-item>
				<swiper-item>
					<image class="carImg" src="@/static/image/banner3.png" mode="aspectFit" alt="" />
				</swiper-item>
				<swiper-item>
					<image class="carImg" src="@/static/image/banner2.png" mode="aspectFit" alt="" />
				</swiper-item>
			</swiper>
		</view>
		<!-- 功能 -->
		<view class="tool">
			<!-- <view justify="space-between"> -->
			<view class="toolImg" @click="gotoAItalk">
				<image src="@/static/image/tool23.png" alt="" />
				<text class="toolItem">AI对话</text>
			</view>
			<view class="toolImg" @click="gotoIntelligent">
				<image src="@/static/image/tool21.png" alt="" />
				<text class="toolItem">智能识别</text>
			</view>
			<view class="toolImg" @click="gotoClass">
				<image src="@/static/image/tool22.png" alt="" />
				<text class="toolItem">问答测验</text>
			</view>
			<view class="toolImg" @click="goPoDepth">
				<image src="@/static/image/tool24.png" alt="" />
				<text class="toolItem">深度体验</text>
			</view>
			<view class="toolImg" @click="goPopularize">
				<image src="@/static/image/tool25.png" alt="" />
				<text class="toolItem">知识科普</text>
			</view>
			<!-- </view> -->
		</view>
		<!-- 学习课堂 -->
		<view class="class">
			<!-- 标题 -->
			<titleItem :title="title[0]"></titleItem>
			<!-- 滚动视图 -->
			<scroll-view class="navscroll" scroll-x>
				<view class="content card" v-for="(item, index) in classItem" :key="index">
					<image :src="item.lessonImage" class="image" />
					<!-- <image src="@/static/image/class1.png" class="image" /> -->
					<view class="text" @click="gotoCourse(item.lessonId)">
						<text class="className">{{item.lessonTitle}}</text>
						<view class="row">
							<view>
								<image src="@/static/image/icon/user_grey.svg" mode="" />
								<text class="name">{{item.lessonTeacher}}</text>
								<!-- 热门推荐标签 -->
								<text class="hot">热门推荐</text>
							</view>
							<text class="value">￥150</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 推荐新闻 -->
		<view class="news">
			<!-- 标题 -->
			<titleItem :title="title[1]" @click='gotoNewsList'></titleItem>
			<!-- 新闻内容 -->
			<view class="content" v-for="(item, index) in news" :key="index" @click="gotoNews(item.newId)">
				<view class="newsItem">
					<image class="img" :src="item.newImg" mode="aspectFit"
						:style="'background-image:url('+item.newImg+') ;'" alt="" />
					<view class="uContent">
						<image class="uimg" :src="item.userAvatar" mode="aspectFill" />
						<view class="userName">
							<text>{{item.userNickName}}</text>
						</view>
					</view>
					<text class="time">{{item.createTime}}</text>
				</view>
				<view class="newsDetail">
					<view class="conTitle">
						{{item.newTitle}}
					</view>
					<view class="conText">
						{{item.newDetail}}
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
		onMounted,
		reactive,
		ref
	} from 'vue';

	import {
		Search,
		ArrowRight,
		Avatar,
		UserFilled,
		View as IconView
	} from '@element-plus/icons-vue'
	import titleItem from './component/title.vue'
	import {
		onInit,
		onLoad,
		onReady,
		onShow
	} from '@dcloudio/uni-app';

	const input = ref('')
	const hiText = "Here is artificial intelligence"
	const imgHeight = "150px"
	// const news = "@/static/image/news.png"
	const value = "$150"
	const title = ["学习课堂", "特别新闻"]

	const news = ref([])
	const userName = ref([])
	const classItem = ref([])
	const avatar = ref([])

	onLoad(() => {
		getNews().then(res => {
			console.log(res)
			for (let j = 0; j < res.length; j++) {
				getUser(res[j].newUser).then(user => {
					console.log(user.userAvatar)
					userName.value.push(user.userNickName)
					avatar.value.push(user.userAvatar)
					news.value.push({
						newId: res[j].newId,
						newImg: res[j].newImg,
						createTime: res[j].createTime.substring(0, 10),
						newTitle: res[j].newTitle,
						newDetail: res[j].newDetail,
						userAvatar: user.userAvatar,
						userNickName: user.userNickName
					})
				})
			}
		})
		// 获取课程
		getList().then(res => {
			for (let i = 0; i < res.length; i++) {
				classItem.value.push(res[i])
				console.log(classItem.value[i].lessonImage)
			}
		})

	})
	// 搜索按钮
	let sendSearch = () => {
		console.log(input.value)
		uni.navigateTo({
			url: '/pages/index/search?text=' + input.value
		})
	}
	// 查询部分课程
	let getList = () => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/Lesson/getList',
				method: 'GET',
				data: {
					start: 0,
					limit: 2
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
					// console.log(res.data);
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
	// 获取新闻列表
	let getNews = () => {
		console.log("开始调用查询新闻接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/New/selectAllNews',
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
						// console.log(news);
						console.log("selectAllNews请求成功");
						resolve(res.data.data)
					} else {

						console.log("selectAllNews请求失败");
					}
				},
				fail() {
					// console.log("接口请求失败");
				}
			})
		})
	}
	// 根据新闻用户id获取用户名
	let getUser = (userid) => {
		console.log("开始调用查询用户接口")
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
				method: 'GET',
				data: {
					userId: userid
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("getUser请求成功");
						resolve(res.data.data)
					} else {
						console.log("getUser请求失败");
						// console.log(res.data);
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}

	// 右上角【通知】和【我的】
	let gotoNotice = () => {
		uni.navigateTo({
			url: '/pages/public/notice'
		});
	};
	let gotoMy = () => {
		uni.navigateTo({
			url: '/pages/public/my'
		});
	};
	// 轮播跳转
	let banner1 = () => {
		uni.navigateTo({
			url: '/pages/index/banner/timtalk'
		});
	};
	// 工具栏跳转
	let gotoAItalk = () => {
		uni.navigateTo({
			//AI对话
			url: '/pages/talk/talk'
		});
	};
	let gotoIntelligent = () => {
		uni.navigateTo({
			//智能识别
			url: '/pages/tools/intelligent'
		});
	};
	let gotoClass = () => {
		uni.navigateTo({
			// 问答测验
			url: '/pages/tools/test'
		});
	};
	let goPoDepth = () => {
		uni.navigateTo({
			// 深度体验
			url: '/pages/tools/depth'
		});
	};
	let goPopularize = () => {
		uni.navigateTo({
			// 知识科普
			url: '/pages/tools/popularize'
		});
	};
	// 课堂跳转
	let gotoCourse = (id) => {
		uni.navigateTo({
			url: '/pages/class/course?id=' + id
		})
	};
	// 新闻列表跳转
	let gotoNewsList = () => {
		uni.navigateTo({
			url: '/pages/index/newsList'
		})
	};
	// 新闻跳转
	let gotoNews = (newsId) => {
		uni.navigateTo({
			url: '/pages/index/news?id=' + newsId
		})
	};
</script>

<style scoped>
	.index {
		padding: 0;
		margin: 0;
		background-color: #f3efee;
		/* font-size: 14px; */
		font-size: 12px;
		font-weight: 500;
		padding-bottom: 40rpx;
	}

	/* 顶部开始 */
	.top {
		background-color: #15a0ac;
		margin: 0;
		padding: 2%;
		padding-left: 4%;
		padding-right: 4%;
		border-end-start-radius: 36px;
		border-end-end-radius: 36px;
		padding-top: 30px;
	}

	.top .topTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin: 20rpx 0; */
	}

	.top .topHi {
		/* display: flex; */
		/* justify-content: baseline; */
	}

	.top .titleTop {
		color: white;
		font-size: 38px;
	}

	.top .titleBottom {
		font-size: 16px;
		display: block;
		color: white;
	}

	.top .topButton {
		margin-top: 2%;
		padding: 1%;
		display: flex;
		justify-content: flex-end;
		/* padding-right: 0; */
	}

	.top .topBtn {
		width: 40px;
		height: 40px;
		margin: 0 10rpx;
	}

	.top .topBtn image {
		width: 100%;
		height: 100%;
	}

	/* 下搜索框 */
	.top .topBottom {
		width: auto;
		height: 70rpx;
		background-color: #ffffff;
		margin: 30rpx auto;
		padding: 0 20rpx;
		border-radius: 40px !important;
		overflow: hidden;
		display: flex;
		align-items: center;
	}


	.top .topBottom .search {
		/* background-color: #909090; */
		width: 100%;
		/* margin-left: 20rpx; */
	}

	.top .topBottom image {
		/* background-color: #90c9b4; */
		margin-left: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}


	/* 顶部结束 */

	/* 轮播开始 */
	.carousal {
		margin: 30rpx auto;
		width: 680rpx;
	}

	.carousal image {
		width: 99%;
		height: 99%;
	}

	.carousal .carImg {
		border-radius: 22rpx;
		overflow: hidden;
		/* border: #e3e3e3 2rpx solid; */
	}


	/* 轮播结束 */

	/* 工具开始 */
	.tool {
		margin: 0 30rpx;
		padding: 0 10rpx;
		display: flex;
		justify-content: space-between;
	}

	.tool .toolImg {
		width: 100rpx;
		display: flex;
		flex-wrap: wrap;
		justify-items: center;
	}

	.tool .toolImg image {
		width: 100rpx;
		height: 100rpx;
	}

	.tool .toolItem {
		width: 100%;
		margin-top: 8rpx;
		display: inline-block;
		font-size: 14px;
		white-space: nowrap;
		text-align: center;
	}

	/* 工具结束 */

	/* 学习课堂开始 */
	.class {
		margin: 30rpx;
	}

	/* 滚动 */
	.class .navscroll {
		white-space: nowrap;
		width: 100%;
		/* height: 194px; */
	}

	.class .content {
		display: inline-block;
		margin-top: 20rpx;
		/* 斜体 */
		/* font-style: italic; */
		width: 440rpx;
		margin-right: 40rpx;
		border-radius: 14px;
		/* background-color: #ffffff; */
		overflow: hidden;
	}

	.class .content .image {
		width: 100%;
		height: 250rpx;
		display: block;
	}

	.class .content .text {
		padding: 10rpx 20rpx;
		background-color: #ffffff;
	}

	.class .content .className {
		font-size: 14px;
		font-weight: 600;
	}

	.class .content .row {
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
	}


	.class .content image {
		display: inline-block;
		width: 20rpx;
		height: 20rpx;
		margin-right: 4rpx;
	}

	.class .content .icon {
		color: #909090;
		/* font-size: 13px; */
		margin-right: 1%;
	}

	.class .content .name {
		color: #909090;
	}

	.class .content .value {
		color: #90c9b4;
		font-size: 14px;
		font-weight: 600;
	}

	.class .content .hot {
		background-color: #ff606030;
		color: #c85833;
		display: inline-block;
		padding: 2rpx 12rpx;
		margin-left: 10rpx;
		border-radius: 20rpx;
		font-size: 10px !important;
	}

	/* 学习课堂结束 */
	/* 推荐新闻开始 */
	.news {
		margin: 30rpx;
		margin-bottom: 0;
		padding-bottom: 20rpx;
	}


	.news .content {
		background-color: #ffffff;
		width: 680rpx;
		min-height: 250rpx;
		margin: 50rpx auto;
		border-radius: 10px;
		padding: 10rpx 0;
		position: relative;
		display: flex;
		z-index: 9;
	}

	/* 大图和用户详情 */
	.news .newsItem {
		margin-left: 18rpx;
		position: absolute;
		top: -40rpx;
		z-index: 10;
		font-size: 12px;
	}

	.news .content .img {
		width: 160rpx;
		border-radius: 10px;
		height: 160rpx;
		margin-top: 10px;
		/* filter: blur(1px); */
		/* background-color: #539898; */
	}

	.news .content .time {
		display: block;
		width: 120rpx;
		white-space: nowrap;
		/* overflow: hidden; */
		margin: 8rpx 10rpx;
	}

	.news .content .uContent {
		margin-top: 10px;
		display: flex;
		align-items: center;
	}

	/* 头像 */
	.news .content .uimg {
		/* margin-top: 20px; */
		border-radius: 50%;
		width: 32px;
		height: 32px;
		display: inline-block;
		margin-bottom: -2%;
	}

	.news .content .userName {
		margin-left: 2rpx;
		word-wrap: normal;
		display: inline-block;
	}

	.news .content .userName :nth-child(1) {
		display: block;
		margin-left: 4rpx;
	}


	/* 新闻详情 */
	.news .newsDetail {
		padding: 10rpx 12rpx;
		margin-left: 190rpx;
	}

	.news .content .conTitle {
		display: block;
		font-size: 16px;
		color: #90c9b4;
		margin-bottom: 6rpx;
	}

	.news .content .conText {
		display: block;
		line-height: 1.2rem;
		font-size: 13px;
		max-height: 200rpx;
		/* width: 200rpx; */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;

	}

	/* 推荐新闻结束 */
</style>