<template>
	<view class="lzRedBook" :style="[{height:set.screenHeight+'px'},bookStyle]" @click.stop="clickCenter">
		<view class="center">{{chapter}}</view>
		<swiper class="swiper-box" @change="change" @animationfinish="animationfinish" :current="0"
			:vertical="scrollDirection=='leftRight'?false:true" :skip-hidden-item-layout="true"
			:style="{height:set.screenHeight+'px'}">
			<swiper-item v-for="(item ,index) in swiper.bookTextArr" :key="index">
				<view class="swiper-item">
					<view class="swiper-text">
						{{item}}
					</view>
					<!-- 底部电池部分 -->
					<!-- <view class="item-footer" :style="bookStyle">
						<view class="f-left">
							<text class="iconfont icon-dianchi"><text class="icon-dianchi-center"
									:style="{ width: system.quantity + '%' }"></text></text>
							<text class="time">{{ system.time }}</text>
						</view>
						<view class="f-center"></view>
						<view class="f-right">
							{{swiper.pageNum}}/{{swiper.bookTextArr.length}}
						</view>
					</view> -->
				</view>
			</swiper-item>
		</swiper>
		<!-- 这里是动态计算一页多少字的 -->
		<view class="opcity">{{bookTextNew}}</view>
	</view>

</template>

<script>
	let DLTime, timeInter;
	let copyBookText = '',
		forNum = 120,
		addNum = 400,
		reduceNum = 400 //默认一页从100个字开始计算，超出就减少，少了就增加
	export default {
		props: {
			chapter: "",
			bookText: {
				type: String,
				default: "",
			},
			bookStyle: {
				//书的样式
				type: Object,
				default: function() {
					return {};
				}
			},
			scrollDirection: {
				//滚动方向leftRight左右，上下topBottom
				type: String,
				default: 'leftRight'
			},
		},
		data() {
			return {
				set: {
					screenHeight: '', //屏幕宽度
					screenWidth: '', //屏幕宽度
					boxHight: 0,
				},
				bookTextNew: '',
				swiper: {
					bookTextArr: [], //书的文本格式化（以每页多少字为数组的一项
					pageNum: 1,
					vertical: false, //滑动方向是否为纵向
					mode: 'round',
					isEnd: false, //是否滑到最后一个了触发请求下一个数据
					isStart: false, //是否滑到最开始的地方
				},
				isEndFor: false, //是否循环结束
				system: {
					quantity: 0, //系统电量
					time: '' //系统时间
				},
			};
		},

		mounted() {
			//初始化
			setTimeout(() => {
				this.init()
				// #ifdef APP-PLUS
				//每分钟获取一次电量
				this.dianliang();
				DLTime = setInterval(() => {
					this.dianliang();
				}, 60000);
				//每秒获取一次时间
				timeInter = setInterval(() => {
					this.getTimes();
				}, 1000);
				// #endif
			}, 1000)

		},
		methods: {
			//初始化
			init() {
				let that = this
				that.isEndFor = false
				copyBookText = this.bookText
				that.swiper.bookTextArr = []
				// 获取元素信息
				that.getSystemInfo();
			},
			//获取系统信息
			getSystemInfo() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						that.set.screenHeight = res.screenHeight;
						that.set.screenWidth = res.screenWidth;
						//动态计算每一页文字数
						if (copyBookText.length > 165) {
							forNum = 180
							that.forGet() //默认100个字起步
						} else {
							that.isEndFor = true
							that.swiper.bookTextArr.push(copyBookText)
						}
					}
				});
			},
			//循环获取一页多少文字，默认从100个字，然后动态获取文字内容高度与屏幕高度对比，如果文字高度小于屏幕高度，就加40个字
			forGet() {
				let that = this
				that.bookTextNew = copyBookText.substr(0, forNum)
				let String = copyBookText.substr(forNum)
				if (String.length > 0) { //如果一章大于100个字
					that.$nextTick(function() {
						var opcity = uni.createSelectorQuery().select('.opcity');
						opcity.boundingClientRect(data => {
							if (data.height < that.set.screenHeight - 10 && that.isEndFor == false) {
								forNum += 75
								that.forGet()
							} else {
								that.swiper.bookTextArr.push(that.bookTextNew)
								//拿到除去上一页的文字
								copyBookText = copyBookText.substr(forNum)
								//动态计算每一页文字数
								that.getNextPage()
							}
						}).exec();
					})
				} else {
					console.log(copyBookText);
					that.isEndFor = true
					that.swiper.bookTextArr.push(copyBookText)
				}
			},
			//动态计算每一页文字数
			getNextPage() {
				let that = this
				// debugger
				if (copyBookText.length > 105) {
					forNum = 180
					that.forGet() //默认100个字起步
				} else {
					that.isEndFor = true
					that.swiper.bookTextArr.push(copyBookText)
				}
				console.log(that.swiper.bookTextArr);
			},
			//滑动时触发
			change(e) {
				console.log(e);
				this.swiper.pageNum = e.detail.current + 1;
				this.swiper.isEnd = false
				this.swiper.isStart = false
			},
			animationfinish() {
				if (this.swiper.isEnd) {
					console.log('已经划到最后一个了');
					this.$emit('scrollEnd');
				}
				if (this.swiper.isStart) {
					console.log('已经划到最开始');
					this.$emit('scrollStart');
				}
				if (this.swiper.pageNum == this.swiper.bookTextArr.length) {
					this.swiper.isEnd = true //已经划到最后
				} else {
					this.swiper.isEnd = false
				}
				if (this.swiper.pageNum == 1) {
					this.swiper.isStart = true //已经划到最开始
				} else {
					this.swiper.isStart = false
				}
			},
			//获取系统电量
			dianliang() {
				var that = this;
				if (uni.getSystemInfoSync().platform != 'ios') {
					var main = plus.android.runtimeMainActivity();
					var Intent = plus.android.importClass('android.content.Intent');
					var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
						onReceive: function(context, intent) {
							var action = intent.getAction();
							if (action == Intent.ACTION_BATTERY_CHANGED) {
								var level = intent.getIntExtra('level', 0); //电量
								var voltage = intent.getIntExtra('voltage', 0); //电池电压
								var temperature = intent.getIntExtra('temperature', 0); //电池温度
								that.system.quantity = level; //电量
							}
						}
					});
					var IntentFilter = plus.android.importClass('android.content.IntentFilter');
					var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
					main.registerReceiver(recevier, filter);
				} else {
					var UIDevice = plus.ios.import('UIDevice');
					var dev = UIDevice.currentDevice();
					if (!dev.isBatteryMonitoringEnabled()) {
						dev.setBatteryMonitoringEnabled(true);
					}
					var level = dev.batteryLevel();
					that.system.quantity = level * 100;
				}
			},
			getTimes() {
				var times = new Date();
				this.system.time =
					(times.getHours() < 10 ? '0' + times.getHours() : times.getHours()) + ':' + (times.getMinutes() < 10 ?
						'0' + times.getMinutes() : times.getMinutes());
			},
			//点击中间位置
			clickCenter() {
				this.swiper.isStart = false
				this.$emit('clickCenter');
			},

		}
	};
</script>

<style scoped>
	.lzRedBook {
		font-size: 18px;
		overflow: hidden;

		.center {
			text-align: center;
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
			font-size: 22px;
		}

		.opcity {
			background: red;
			overflow: hidden;
			padding: 30px;
			box-sizing: border-box;
			opacity: 0;
		}

		.swiper-text {
			padding: 20px;
			padding-top: 10px;
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 20px;
			box-sizing: border-box;
		}

		.swiper-box {
			width: 100%;
		}

		.item-footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			font-size: 10px !important;

		}
	}
</style>