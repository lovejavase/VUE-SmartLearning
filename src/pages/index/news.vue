<template>
	<!-- 新闻页 -->
	<view class="news">
		<!-- 头部 -->
		<myheader title='新闻详情'></myheader>
		<view class="content">
			<!-- 标题 -->
			<text class="title">{{news.newTitle}}</text>
			<!-- 图片 -->
			<image src="@/static/image/user_img1.png" alt="" />
			<text class="tip">图片备注七个字</text>
			<!-- 正文 -->
			<view class="text">
				<!-- <text class="line">{{news[0].newTitle}}</text> -->
				<text class="info">{{news.newDetail}}</text>
			</view>
			<!-- 评价 -->
			<view class="comment">
				<!-- 输入框 -->
				<el-input class="input" v-model="input" size="small" placeholder="写条评论吧...">
					<template #append class="p-0">
						<el-button class="send">
							<image src="@/static/image/icon/send_white.svg" alt="" />
						</el-button>
					</template>
				</el-input>
				<!-- 按钮 -->
				<view class="btnGroup">
					<image src="@/static/image/icon/comment_.svg" alt="" />
					<image src="@/static/image/icon/share_.svg" alt="" />
					<image src="@/static/image/icon/favor_fill_red.svg" alt="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		onMounted,
		ref
	} from "vue";
	const input = ''
	var newsId = -1
	// const news = ref([{newTitle:'0',newDetail:'1'}])
	const news = ref({})


	onLoad((res) => {
		// console.log(~~res.id)
		newsId = ~~res.id + 1 //id字符串转数字类型
		getNew(newsId).then(res => {
			news.value = res
		})
	})

	let getNew = (id) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://a-puppy-c.top:9999/Smart/New/selectNewDetail',
				method: 'GET',
				data: {
					newId: id
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("主页-调用selectNewDetail成功");
						console.log(res.data);
						resolve(res.data.data)
					} else {
						console.log("主页-调用selectNewDetail失败");
						console.log(res.data);
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}
</script>

<style>
	.news {
		padding-top: 30rpx;
	}

	.content {
		padding: 20rpx 50rpx;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	/* 标题 */
	.title {
		display: block;
		font-size: 20px;
	}

	/* 大图 */
	.content>image {
		width: 100%;
		height: 200rpx;
		margin: 20rpx auto;
		margin-top: 30rpx;
		/* border: #909090 1px solid; */
	}

	/* 大图备注 */
	.tip {
		font-size: 12px;
		color: #909090;
		text-align: center;
	}

	/* 正文 */
	.text {
		margin-top: 40rpx;
	}

	.text .line {
		display: block;
		font-size: 16px;
	}

	.text .info {
		display: block;
		font-size: 14px;
		margin-top: 20rpx;
	}

	/* 评论区开始 */
	/* 输入框 */
	.comment {
		margin-top: 50rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-top: #909090 1px solid;
		padding: 20rpx 0;
	}

	.comment .input {
		width: 300rpx;
		height: 60rpx;
		border-radius: 30rpx !important;
		overflow: hidden;
		color: #ffffff;

	}

	.comment .input :deep(.el-input__wrapper) {
		/* 如果没有下面这一行样式的话 无法对border进行自定义修改 */
		box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
		border: none;
		background-color: #f3efee;
	}

	::v-deep .el-button {
		border-radius: 0;
	}

	/* 发送按钮 */
	.comment .input .send {
		border: none;
		background-color: #ffffff;
		padding-top: 10rpx;
		background-color: #f3efee;
	}

	.comment .input .send image {
		width: 40rpx;
	}

	/* 点赞按钮 */

	.comment .btnGroup {
		width: 260rpx;
		display: flex;
		justify-content: space-around;
	}

	.comment .btnGroup image {
		width: 50rpx;
		height: 50rpx;
	}

	/* 评论区结束 */
</style>