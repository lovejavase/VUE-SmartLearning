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
							<img src="http://www.a-puppy-c.top/smartLearning/news.png" alt=""
								style="width: 40px;height: 40px;">
							<!-- <el-image :src="news" alt=""/> -->
						</el-button>
						<el-button class="topBtn" plain @click="gotoMy">
							<img src="http://www.a-puppy-c.top/smartLearning/my.png" alt=""
								style="width: 40px;height: 40px;">
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
					<img class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" alt=""
						style="width: 100%;">
				</el-carousel-item>
				<el-carousel-item @click="banner1">
					<img class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" alt=""
						style="width: 100%;">
				</el-carousel-item>
				<el-carousel-item @click="banner1">
					<img class="carImg" src="http://www.a-puppy-c.top/smartLearning/days1.png" alt=""
						style="width: 100%;">
				</el-carousel-item>
			</el-carousel>
		</view>
		<!-- 功能 -->
		<view class="tool">
			<el-row justify="space-between">
				<el-col :span="3">
					<view class="toolImg" @click="gotoAItalk">
						<img src="http://www.a-puppy-c.top/smartLearning/tool1-2.png" alt=""
							style="width: 100%; height: auto;">
						<text class="toolItem">AI对话</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="gotoIntelligent">
						<img src="http://www.a-puppy-c.top/smartLearning/tool2.png" alt=""
							style="width: 100%; height: auto;">
						<text class="toolItem">智能识别</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="gotoClass">
						<img src="http://www.a-puppy-c.top/smartLearning/tool3.png" alt=""
							style="width: 100%; height: auto;">
						<text class="toolItem">乐趣课堂</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="">
						<img src="http://www.a-puppy-c.top/smartLearning/tool4-un.png" alt=""
							style="width: 100%; height: auto;">
						<text class="toolItem">实践体验</text>
					</view>
				</el-col>
				<el-col :span="3">
					<view class="toolImg" @click="">
						<img src="http://www.a-puppy-c.top/smartLearning/tool5-un.png" alt=""
							style="width: 100%; height: auto;">
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
				<view class="content" v-for="(i, index) in 2" :key="i">
					<el-card class="card" shadow="never" :body-style="{ padding: '0px' }">
						<img src="@/static/image/class1.png" class="image" />
						<view class="text" @click="gotoCourse">
							<text class="className">AI实践与广泛应用</text>
							<el-row class="row">
								<el-col :span="18">
									<el-icon class="icon">
										<UserFilled />
									</el-icon>
									<text class="name">123教授</text>
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
			<view class="content" v-for="(i, index) in 2" :key="i">
				<el-row justify="space-evenly" @click="gotoNews">
					<el-col :span="7">
						<img class="img" src="@/static/image/news1.png" alt="">
						<view class="uContent">
							<img class="uimg" src="@/static/image/userImg1.png" alt="">
							<el-row class="userName" justify="center">
								<el-col :span="24">
									<text>某用户</text>
								</el-col>
								<el-col>
									<text>04-24 9.47</text>
								</el-col>
							</el-row>
						</view>
					</el-col>
					<el-col :span="14">
						<view class="conTitle">
							我们生活中有哪些人工智能？
						</view>
						<view class="conText">
							1.语音助手：如Siri、Alexa.Google Assistant等，能够回答问题、执行指令、提供信息等。
							<br>
							2.家居：如智能灯泡、智能门、智能电视等，能够通过语音进行控制。
						</view>
					</el-col>
				</el-row>
			</view>
		</view>
		<!-- 底部 -->
		<!-- <Footer></Footer> -->
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		Search,
		ArrowRight,
		Avatar,
		UserFilled,
		View as IconView
	} from '@element-plus/icons-vue'
	import titleItem from './component/title.vue'

	const input = ref('')
	const hiText = "Here is artificial intelligence"
	const imgHeight = "150px"
	// const news = "@/static/image/news.png"
	const value = "$150"
	const title = ["学习课堂", "特别新闻"]

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
		uni.switchTab({ //跳转到导航页
			//乐趣课堂
			url: '/pages/class/class'
		})
		// uni.navigateTo({  //普通页面跳转
		// 	url: '/pages/class/class'
		// });
	};
	// 课堂跳转
	let gotoCourse = () => {
		uni.navigateTo({
			url: '/pages/class/course'
		})
	};
	// 新闻列表跳转
	let gotoNewsList = () => {
		uni.navigateTo({
			url: '/pages/index/newsList'
		})
	};
	 // 新闻跳转
	let gotoNews = () => {
		uni.navigateTo({
			url: '/pages/index/news'
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

		/* .carImg {
			width: 100rpx;
			height: auto;
		} */
	}

	/* 轮播结束 */

	/* 工具开始 */
	.tool {
		margin: 0 30rpx;
		padding: 0 0.4rem;
	}

	/* background-color: aliceblue; */
	.tool .toolImg {
		width: 100%;
		/* font-size: 1rem; */

	}

	.tool .toolImg img {
		width: 100%;
	}

	.tool .toolItem {
		width: 100%;
		display: inline-block;
		font-size: 12px;
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
		margin-top: 8%;
		border-radius: 10px;
		padding: 1% 0%;
		position: relative;
		/* overflow: hidden; */
	}

	.news .content .img {
		width: 100px;
		border-radius: 10px;
		position: absolute;
		top: -22px;
		/* left: 0; */
	}

	.news .content .uContent {
		margin-top: 80px;
	}

	.uimg {
		/* background-color: black; */
		border-radius: 50%;
		width: 32px;
		display: inline-block;
		margin-bottom: -2%;
	}

	.news .content .userName {
		margin-left: 2%;
		display: inline-block;
	}

	.news .content .conTitle {
		font-size: 14px;
		color: #90c9b4;
		margin: 2% 0%;
		font-weight: 600;
	}

	.news .content .conText {
		line-height: 1.14rem;
		margin-bottom: 2%;
	}

	/* 推荐新闻结束 */
</style>