<template>
	<view class="index">
		<!-- 顶部 -->
		<view class="top">
			<view>
				<el-row justify="space-between">
					<el-col :span="6" class="topHi">
						<el-text class="titleTop" size="large">Hi!</el-text>
					</el-col>
					<el-col :span="7" class="topButton">
						<el-button class="topBtn" plain @click="gotoNotice">
							<image src="http://www.a-puppy-c.top/smartLearning/news.png" alt=""
								style="width: 40px;height: 40px;" />
							<!-- <el-image :src="news" alt=""/> -->
						</el-button>
						<el-button class="topBtn" plain @click="gotoMy">
							<image src="http://www.a-puppy-c.top/smartLearning/my.png" alt=""
								style="width: 40px;height: 40px;" />
						</el-button>
					</el-col>
				</el-row>
				<el-text class="titleBottom" size="large">{{hiText}}</el-text>
			</view>

			<view class="topBottom">
				<!-- <el-input v-model="input" class="topInput" size="large" placeholder="搜索科普/课堂/识别" :suffix-icon="Search" /> -->
				<div class="topInput">
					<el-input v-model="input" size="large" placeholder="搜索科普/课堂/识别">
						<template #append class="p-0">
							<el-button class="searchBtn" :icon="Search" />
						</template>
					</el-input>
				</div>
			</view>
		</view>
		<!-- 卡片轮播 -->
		<view class="carousal">
			<el-carousel trigger="click" indicator-position="none" :height="imgHeight">
				<el-carousel-item @click="banner1">
					<image class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" mode="aspectFit"
						alt="" />
				</el-carousel-item>
				<el-carousel-item @click="banner1">
					<image class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" mode="aspectFit"
						alt="" />
				</el-carousel-item>
				<el-carousel-item @click="banner1">
					<image class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" mode="aspectFit"
						alt="" />
				</el-carousel-item>
			</el-carousel>
		</view>
		<!-- 功能 -->
		<view class="tool">
			<el-row justify="space-between">
				<el-col :span="3">
					<view class="toolImg" @click="gotoAItalk">
						<image src="@/static/image/tool1-2.png" alt="" />
						<text class="toolItem">AI对话</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="gotoIntelligent">
						<image src="@/static/image/tool2.png" alt="" />
						<text class="toolItem">智能识别</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="gotoClass">
						<image src="@/static/image/tool3.png" alt="" />
						<text class="toolItem">问答测验</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="">
						<image src="@/static/image/tool4-un.png" alt="" />
						<text class="toolItem">实践体验</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="">
						<image src="@/static/image/tool5-un.png" alt="" />
						<text class="toolItem">知识科普</text>
					</view>

				</el-col>
			</el-row>
		</view>
		<!-- 学习课堂 -->
		<view class="class">
			<!-- 标题 -->
			<titleItem :title="title[0]"></titleItem>
			<!-- 滚动视图 -->
			<scroll-view class="navscroll" scroll-x>
				<view class="content" v-for="(item, index) in classItem" :key="index">
					<el-card class="card" shadow="never" :body-style="{ padding: '0px' }">
						<image :src="item.lessonImage" class="image" />
						<view class="text" @click="gotoCourse(item.lessonId-1)">
							<text class="className">{{item.lessonTitle}}</text>
							<el-row class="row">
								<el-col :span="18">
									<el-icon class="icon">
										<UserFilled />
									</el-icon>
									<text class="name">{{item.lessonTeacher}}</text>
									<!-- 热门推荐标签 -->
								</el-col>
								<el-col :span="5" :offset="1">
									<text class="value">￥150</text>
								</el-col>
							</el-row>
						</view>
					</el-card>
				</view>
			</scroll-view>
		</view>
		<!-- 推荐新闻 -->
		<view class="news">
			<!-- 标题 -->
			<titleItem :title="title[1]" @click='gotoNewsList'></titleItem>
			<!-- 新闻内容 -->
			<view class="content" v-for="(item, index) in news" :key="index" @click="gotoNews(index)">
				<view class="newsItem">
					<image class="img" :src="item.newImg" alt="" />
					<view class="uContent">
						<image class="uimg" :src="avatar[index]" alt="" />
						<view class="userName">
							<text>{{userName[index]}}</text>

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
			for (let j = 0; j < res.length; j++) {
				news.value.push(res[j])
				console.log(news.value[j].newImg)
			}
			// 根据新闻的用户id获取用户名
			for (var i = 0; i < news.value.length; i++) {
				getUser(news.value[i].newUser).then(res => {
					console.log(res.userAvatar)
					userName.value.push(res.userNickName)
					avatar.value.push(res.userAvatar)
				})
			}
			// console.log(news.value)
		})
		// 获取课程
		getList().then(res => {
			for (let i = 0; i < res.length; i++) {
				classItem.value.push(res[i])
				console.log(classItem.value[i].lessonImage)
			}
		})

	})
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
					limit: 2
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
			url: '/pages/index/intelligent'
		});
	};
	let gotoClass = () => {
		uni.navigateTo({ //普通页面跳转
			url: '/pages/class/class'
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
		padding-top: 20px;
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
		background-color: #15a0ac;
		border: none;
		border-radius: 10px;
	}

	.top .topBtn img {
		width: 40px;
	}

	/* 下搜索框 */
	.top .topBottom {
		width: 680rpx;
		margin: 20rpx auto;
	}

	.top .topInput {
		border-radius: 40px !important;
		overflow: hidden;
	}

	/* .top .n-border {
border: none !important;
box-shadow: 0 0 0 0px;
} */

	.top .topInput :deep(.el-input__wrapper) {
		/* // 如果没有下面这一行样式的话 无法对border进行自定义修改 */
		box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
		border: none;
		/* 对border进行样式修改 */
	}

	.top .topInput :deep(.el-input-group__append) {
		box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
		background-color: transparent !important;
		border: none !important;
	}


	.top .searchBtn {
		height: 100%;
		border-radius: 0 40px 40px 0;
		border: none;
		font-size: 20px;
		padding: 9px 12px 7px 12px;
	}

	.top .searchBtn:hover,
	.searchBtn:checked {
		/* color: #f3efee; */
		background-color: #ffffff;
		color: #15a0ac;
	}


	/* 顶部结束 */

	/* 轮播开始 */
	.carousal {
		margin: 30rpx auto;
		width: 680rpx;
	}

	.carousal image {
		width: 100%;
		height: 100%;
	}

	/* 轮播结束 */

	/* 工具开始 */
	.tool {
		margin: 0 30rpx;
		padding: 0 0.4rem;
	}

	.tool .toolImg {
		width: 100%;
	}

	.tool .toolImg image {
		width: 100rpx;
		height: 100rpx;
	}

	.tool .toolItem {
		width: 100%;
		display: inline-block;
		font-size: 14px;
		white-space: nowrap;
		text-align: center;
		font-weight: bold;
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
		height: 194px;
	}

	.class .content {
		display: inline-block;
		margin-top: 3%;
		/* 斜体 */
		font-style: italic;
		width: 64%;
		margin-right: 6%;
	}

	.class .content .card {
		border-radius: 14px;
	}

	.class .content .image {
		width: 100%;
		height: 250rpx;
		display: block;
	}

	.class .content .text {
		margin: 2% 4%;
	}

	.class .content .className {
		/* font-size: 14px; */
		font-weight: 600;
	}

	.class .content .row {
		margin-top: 2%;
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
	}

	.news .content .time {
		display: block;
		width: 124rpx;
		white-space: nowrap;
		overflow: hidden;
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
		margin-left: 2%;
		display: inline-block;
	}

	.news .content .userName :nth-child(1) {
		display: block;
		margin-left: 4rpx;
	}


	/* 新闻详情 */
	.news .newsDetail {
		padding: 10rpx 12rpx;
		margin-left: 210rpx;
	}

	.news .content .conTitle {
		display: block;
		font-size: 14px;
		color: #90c9b4;
		/* margin: 4rpx 0; */
		margin-bottom: 6rpx;
		font-weight: 600;
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
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;

	}

	/* 推荐新闻结束 */
</style>