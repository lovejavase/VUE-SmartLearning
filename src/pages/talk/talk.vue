<template>
	<view class="chat">
		<!-- 顶部 -->
		<myheader title='智能交流'></myheader>
		<scroll-view :style="{height: `${windowHeight-inputHeight-120}rpx`}" id="scrollview" scroll-y="true"
			:scroll-top="scrollTop" class="scroll-view">
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<view class="item self" v-if="item.userContent != ''">
						<!-- 文字内容 -->
						<view class="content right">
							{{item.userContent}}
						</view>
						<!-- 头像 -->
						<view class="avatar">
							<image :src="userAvatar" mode="" class="uimg"></image>
						</view>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 头像 -->
						<view class="avatar">
							<image src="@/static/image/robot.png" mode=""></image>
						</view>
						<!-- 文字内容 -->
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<view class="chat-bottom" :style="{height: `${inputHeight}rpx`}">
			<view class="send-msg" :style="{bottom:`${keyboardHeight}rpx`}">
				<!-- 左边语音输入的按钮 -->
				<image src="../../static/image/icon/mkf.svg" class="mkf" @touchstart="startLuyin"></image>
				<view class="uni-textarea">
					<textarea v-model="chatMsg" maxlength="300" confirm-type="send" @confirm="handleSend"
						:show-confirm-bar="false" :adjust-position="false" @linechange="sendHeight" @focus="focus"
						@blur="blur" auto-height placeholder="发消息..."
						placeholder-style="color:#c5c5c5">{{searchText}}</textarea>
				</view>
				<button @click="handleSend" class="send-btn">发送</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onUnload
	} from '@dcloudio/uni-app';
	import myheader from "@/component/header.vue"
	import {
		computed,
		onUpdated,
		ref
	} from 'vue'
	//键盘高度
	const keyboardHeight = ref(0)
	//底部消息发送高度
	const bottomHeight = ref(0)
	//滚动距离
	const scrollTop = ref(0)
	const userId = ref('')
	const userAvatar = getApp().globalData.userDetail.userAvatar;
	//发送的消息
	const chatMsg = ref("")
	const msgList = ref([{
		botContent: "你好！有什么我可以帮助您的吗？",
		recordId: 0,
		titleId: 0,
		userContent: "",
		userId: 0
	}])
	const speechEngine = 'baidu'

	// const userAvatar = getApp().globalData.userDetail.userAvatar,
	//录音
	const recorderManager = uni.getRecorderManager();
	//播放录音
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;


	onUpdated(() => { //页面更新时调用聊天消息定位到最底部
		console.log('onUpdated')
		scrollToBottom();
	})
	onLoad(() => {
		if (userAvatar == undefined) {
			console.log('请登录')
			uni.showToast({
				title: "请先登录!",
				duration: 2000,
				icon: 'error'
			})
			setTimeout(() => {
				// 跳转等登录页面
				uni.navigateTo({
					url: '/pages/user/user'
				})
			}, 2100)
		}
		console.log('avatar' + userAvatar)

		uni.onKeyboardHeightChange(res => {
			//这里正常来讲代码直接写就行了
			keyboardHeight.value = rpxTopx(res.height)
			// console.log(res.height)
			//但是之前界面ui设计聊天框的高度有点高,为了不让键盘和聊天输入框之间距离差太大所以我改动了一下。
			// keyboardHeight.value = rpxTopx(res.height + 30)
			if (keyboardHeight.value < 0) {
				keyboardHeight.value = 0;
			}
		})
	})
	onUnload(() => {
		uni.offKeyboardHeightChange()
	})

	let startLuyin = () => {
		console.log('语音输入')
		let options = {};
		options.engine = speechEngine.value
		options.punctuation = false; // 是否需要标点符号 
		options.timeout = 10 * 1000; //超时时间
		plus.speech.startRecognize(options, function(s) {
			console.log(s) //识别的结果
			chatMsg.value = s
			plus.speech.stopRecognize(); // 关闭
		}, function(e) {
			console.log("失败" + e.message)
		});


	}

	let AIDialog = (text) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://8.130.21.88:9999/Smart/AI/AIDialog',
				method: 'POST',
				data: {
					text: text
				},
				header: {
					'Authorization': uni.getStorageSync('Authorization'),
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log("AIDialog请求成功");
						resolve(res.data.data)
					} else {
						console.log("AIDialog请求失败");
					}
				},
				fail() {
					console.log("接口请求失败");
				}
			})
		})
	}


	// 计算
	let windowHeight = computed(() => {
		return rpxTopx(uni.getSystemInfoSync().windowHeight)
	})
	// 键盘弹起来的高度+发送框高度
	let inputHeight = computed(() => {
		return bottomHeight.value + keyboardHeight.value
	})

	let focus = () => {
		scrollToBottom()
	}
	let blur = () => {
		scrollToBottom()
	}
	// px转换成rpx
	let rpxTopx = (px) => {
		let deviceWidth = uni.getSystemInfoSync().windowWidth
		let rpx = (750 / deviceWidth) * Number(px)
		return Math.floor(rpx)
	}
	// 监视聊天发送栏高度
	let sendHeight = () => {
		setTimeout(() => {
			let query = uni.createSelectorQuery();
			query.select('.send-msg').boundingClientRect()
			query.exec(res => {
				bottomHeight.value = rpxTopx(res[0].height)
			})
		}, 10)
	}
	// 滚动至聊天底部
	let scrollToBottom = (e) => {
		setTimeout(() => {
			let query = uni.createSelectorQuery().in(this);
			query.select('#scrollview').boundingClientRect();
			query.select('#msglistview').boundingClientRect();
			query.exec((res) => {
				if (res[1].height > res[0].height) {
					scrollTop.value = rpxTopx(res[1].height - res[0].height);
				}
			});
		}, 15);
	}
	// 发送消息
	let handleSend = () => {
		//如果消息不为空
		if (!chatMsg.value || !/^\s+$/.test(chatMsg.value)) {
			let obj = {
				botContent: "",
				recordId: 0,
				titleId: 0,
				userContent: chatMsg.value,
				userId: 0
			}
			msgList.value.push(obj);
			const aiRes = ref({
				botContent: '正在思考中...',
				recordId: 0,
				titleId: 0,
				userContent: '',
				userId: 0
			})
			msgList.value.push(aiRes.value);
			AIDialog(chatMsg.value).then(res => {
				console.log(res)
				let len = msgList.value.length - 1
				//监听长度
				let wenlen = 0
				const time = setInterval(() => {
					msgList.value[len].botContent = res.substr(0, wenlen);
					//wenlen大于data.content的长度，停止计时器
					if (wenlen < res.length) {
						wenlen++
					} else {
						time.clearInterval();
					}
				}, 100)
			})
			chatMsg.value = '';
			scrollToBottom()
		} else {
			console.log('发送了空白消息')
		}
	}
</script>

<style scoped>
	/* button,
text,
input,
textarea {
margin: 0;
padding: 0;
box-sizing: border-box;
} */

	::v-deep .header {
		position: fixed;
		margin: 0 auto;
		padding: 30rpx 35rpx;
		padding-top: 60rpx;
		top: 0rpx;
		background-color: #EDEDED;
		width: 680rpx;
		z-index: 99;
		display: flex;
		justify-content: space-between;

	}

	/* 聊天消息 */
	.chat {
		/* margin-top: 20rpx; */
	}

	.scroll-view {
		margin-top: 120rpx;
	}

	.scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;

	}

	/* // background-color: orange; */
	/* background-color: #F6F6F6; */

	.scroll-view .chat-body {
		display: flex;
		flex-direction: column;
		padding-top: 23rpx;
	}

	.scroll-view .self {
		justify-content: flex-end;
	}

	.scroll-view .item {
		display: flex;
		padding: 23rpx 30rpx;
	}

	.scroll-view .right {
		background-color: #d6d6d690;
	}

	.scroll-view .left {
		background-color: #90c9b4ee;
	}

	/* // 聊天消息的三角形 */
	.scroll-view .right::after {
		position: absolute;
		display: inline-block;
		content: '';
		width: 0;
		height: 0;
		left: 100%;
		top: 10px;
		border: 12rpx solid transparent;
		border-left: 12rpx solid #d6d6d690;
	}

	.scroll-view .left::after {
		position: absolute;
		display: inline-block;
		content: '';
		width: 0;
		height: 0;
		top: 10px;
		right: 100%;
		border: 12rpx solid transparent;
		border-right: 12rpx solid #90c9b4ee;
	}

	.scroll-view .content {
		position: relative;
		max-width: 486rpx;
		border-radius: 8rpx;
		word-wrap: break-word;
		padding: 24rpx 24rpx;
		margin: 0 24rpx;
		border-radius: 5px;
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
		line-height: 42rpx;
	}

	.scroll-view .avatar {
		display: flex;
		justify-content: center;
		width: 78rpx;
		height: 78rpx;
		/* background: #90c9b4; */
		border-radius: 39rpx;
		overflow: hidden;
	}

	.scroll-view .avatar image {
		align-self: center;
		width: 78rpx;
		height: 78rpx;
	}



	/* 底部聊天发送栏 */
	.chat-bottom {
		width: 100%;
		/* height: 100%; */
		background: transparent;
		transition: all 0.1s ease;
		/* border: #333333 1px solid; */
	}

	.chat-bottom .send-msg {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16rpx 0;
		margin: 0 auto;

		width: 100%;
		min-height: 100rpx;
		position: fixed;
		bottom: 0;
		background: #EDEDED;
		transition: all 0.1s ease;
	}

	.chat-bottom .uni-textarea {
		/* padding-bottom: 20rpx; */
	}

	.chat-bottom .uni-textarea textarea {
		display: block;
		width: 480rpx;
		min-height: 75rpx;
		max-height: 500rpx;
		background: #FFFFFF;
		border-radius: 35rpx 0 0 35rpx;
		font-size: 32rpx;
		color: #333333;
		line-height: 75rpx;
		padding: 0 8rpx;
		padding-left: 18rpx;
		border: none;
	}

	.chat-bottom .send-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		/* margin-bottom: 70rpx; */
		/* margin-left: 25rpx; */
		margin: 0;
		/* width: 128rpx; */
		height: 75rpx;
		background: #ffffff;
		border-radius: 0 35rpx 35rpx 0;
		border: none !important;
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
		line-height: 28rpx;
	}

	uni-button:after {
		border: none;
		border-radius: 0;
	}

	.uimg {
		width: 50px;
		height: 50px;
		/* border-radius: 50%; */
	}

	.mkf {
		height: 36px;
		width: 36px;
		margin-right: 6rpx;
	}
</style>