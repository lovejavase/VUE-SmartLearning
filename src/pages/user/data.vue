<template>
	<view class="data">
		<myheader title='数据分析'></myheader>
		<view class="top">
			<image src="@/static/image/peo1.png" mode="aspectFill"></image>
			<view class="right">
				<text class="left">“</text>
				<text class="title">坚持</text>
				<text class="text">持之以恒的学习</text>
			</view>
		</view>
		<view class="dtitle">
			<text>个人数据分析</text>
			<view class="bg"></view>
		</view>
		
		<view class="datas">
			<view class="midtitle">
				本周学习数据
			</view>
			<!-- 核心知识点 -->
			<view class="text">掌握核心知识点情况</view>
			<!-- force-use-old-canvas="true" -->
			<view @click="echarts.onClick" :prop="radar2" id="radar2" :change:prop="echarts.updateEcharts">
			</view>
			<!-- 知识点分布 -->
			<view class="text">本周知识点分布</view>
			<view @click="echarts.onClick" :prop="radar1" id="radar1" :change:prop="echarts.updateEcharts"></view>
			<!-- 视频类型分布 -->
			<view class="text">喜爱视频类型分布</view>
			<view @click="echarts.onClick" :prop="pie" id="pie" :change:prop="echarts.updateEcharts">
			</view>
			<!-- 学习时长 -->
			<view class="text">总共学习时长
				<text>
					{{sum[1]}}
				</text>
				分钟
			</view>
			<view @click="echarts.onClick" :prop="bar" id="bar" :change:prop="echarts.updateEcharts">
			</view>
			<!-- 积分统计 -->
			<view class="text">本周活跃度分析</view>
			<view @click="echarts.onClick" :prop="polylines" id="polylines" :change:prop="echarts.updateEcharts">
			</view>
		</view>
	</view>
</template>

<script>
	import myheader from "@/component/header.vue"
	export default {
		components: {
			myheader: myheader
		},
		data() {
			return {
				sum: [78, 389],
				radar1: {},
				radar2: {},
				pie: {},
				bar: {},
				polylines: {}
			}
		},
		onLoad() {
			this.echart()
		},
		methods: {
			echart() {
				// 核心知识点和学习时间统计
				let sum = [78, 389]
				// 核心知识点发布 雷达图
				let key = [345, 724, 665, 615, 455]
				// 科普知识点分布 雷达图
				let science = [345, 725, 665, 615, 455]
				// 喜爱视频类型  饼图
				let favor = [10, 10, 10, 10, 10, 10]
				// 学习时间  柱状图
				let study = [39, 52, 49, 47, 19, 41, 31]
				// 本周活跃度分析  折线图
				let score = [150, 180, 175, 170, 55, 156, 99]
				//日期数据
				let data = ['9-18', '9-19', '9-20', '9-21', '9-22', '9-23', '9-24']

				this.radar1 = { // 饼图：本周知识点分布
					tooltip: {
						trigger: 'item'
					},
					legend: {
						top: '5%',
						left: 'center'
					},
					series: [{
						name: 'Access From',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: 40,
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 90,
								name: '发展'
							},
							{
								value: 50,
								name: '历史'
							},
							{
								value: 55,
								name: '风险'
							},
							{
								value: 80,
								name: '原理'
							},
							{
								value: 75,
								name: '应用'
							}
						]
					}]
				}
				this.radar2 = { // 雷达图：核心知识点掌握情况
					color: '#83b6a2',
					title: {
						text: ''
					},
					legend: {},
					radar: [{
						indicator: [{
								name: '历史',
								max: 1000
							},
							{
								name: '发展',
								max: 1000
							},
							{
								name: '原理',
								max: 1000
							},
							{
								name: '应用',
								max: 1000
							},
							{
								name: '风险',
								max: 1000
							},
						],
						radius: 100,
						// top: 90,
						startAngle: 90,
						splitNumber: 4,
						// shape: 'circle',
						axisName: {
							// formatter: '【{value}】',
							fontSize: 14,
							color: '#15a0ac',
						},
						splitArea: {
							areaStyle: {
								color: '#90c9b430',
								shadowColor: 'none',
								// shadowBlur: 10
							}
						},
						axisLine: {
							lineStyle: {
								color: '#90c9b400'
							}
						},
						splitLine: {
							lineStyle: {
								color: '#90c9b400'
							}
						}
					}],
					series: [{
						name: 'Budget vs spending',
						type: 'radar',
						data: [{
							value: key,
							color: '#fff'
						}]
					}]
				}
				this.pie = { // 饼图：喜爱视频分布
					title: {

						//  subtext: 'Fake Data',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left'
					},
					series: [{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						data: [{
								value: 999,
								name: '发展'
							},
							{
								value: 735,
								name: '应用'
							},
							{
								value: 580,
								name: '原理'
							},
							{
								value: 400,
								name: '历史'
							},
							{
								value: 400,
								name: '风险'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				}
				this.bar = { // 柱状图：学习时长
					color: ['#90c9b4'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						top: '10%',
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: data,
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: 'Direct',
						type: 'bar',
						barWidth: '60%',
						data: study,
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							// formatter: '{c}',//显示百分号
							textStyle: { //数值样式
								color: '#80b29f', //字体颜色
								fontSize: 14 //字体大小
							}
						}
					}]
				}
				this.polylines = { // 折线图：本周活跃度分析
					visualMap: [{
						show: false,
						type: 'continuous',
						seriesIndex: 0,
						min: 0,
						max: 400
					}],
					title: {
						// left: 'center',
						// text: 'Gradient along the y axis'
					},
					tooltip: {
						trigger: 'axis'
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: data
					},
					yAxis: {},
					grid: {
						top: '14%',
						bottom: '16%'
					},
					series: {
						type: 'line',
						showSymbol: false,
						data: score,
						lineStyle: {
							normal: {
								width: 4,
								color: {
									type: 'linear', // radial   linear
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
											offset: 0,
											color: '#118a90' // 0% 处的颜色 
										},
										{
											offset: 1,
											color: '#a1e0c8' // 100% 处的颜色 
										}
									],
									global: false // 缺省为 false 
								}
							}

						}
					}
				}
			},

			onViewClick(options) {
				console.log(options)
			}
		}

	}
</script>
<script module="echarts" lang="renderjs">
	let radar1
	let radar2
	let pie
	let bar
	let polylines
	export default {
		mounted() {
			if (typeof window.echarts === 'function') {
				this.initEcharts()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/js/echarts.js'
				script.onload = this.initEcharts.bind(this)
				document.head.appendChild(script)
			}
		},
		methods: {
			initEcharts() {
				radar1 = echarts.init(document.getElementById('radar1'))
				radar2 = echarts.init(document.getElementById('radar2'))
				pie = echarts.init(document.getElementById('pie'))
				bar = echarts.init(document.getElementById('bar'))
				polylines = echarts.init(document.getElementById('polylines'))
				// 观测更新的数据在 view 层可以直接访问到
				radar1.setOption(this.radar1)
				radar2.setOption(this.radar2)
				pie.setOption(this.pie)
				bar.setOption(this.bar)
				polylines.setOption(this.polylines)
				// 	//自适应大小
				// radar1.resize();
				// radar2.resize();
				// pie.resize();
				// bar.resize();
				// polylines.resize();
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				// if (myChart != undefined) {
				// 	myChart.setOption(newValue)
				// }
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
	}
</script>


<style lang="scss">
	.data {
		background-color: #e5f3ef;
		padding-top: 40rpx;
		padding-bottom: 30rpx;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin: 40rpx auto;

		image {
			width: 350rpx;
			height: 260rpx;
		}

		.right {
			background-color: #f6e382;
			height: 260rpx;
			width: 260rpx;
			border-radius: 20rpx;
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;

			.left {
				height: 40rpx;
				width: 50rpx;
				margin-left: -30rpx;
				margin-top: -20rpx;
				font-size: 50px;
			}

			.title {
				font-size: 24px;
				margin: 10rpx auto;
			}

			.text {
				margin: 0 auto;
				font-size: 14px;
			}
		}
	}

	.dtitle {
		margin: 30rpx 40rpx;
		font-size: 24px;
		color: #fff;
		text-shadow: 2rpx 2rpx 6rpx #4a675c;

		.bg {
			width: 144px;
			height: 14rpx;
			background-color: #f6e382bb;
			border-radius: 5rpx;
		}
	}

	.datas {
		background-color: #fff;
		padding: 0;
		// padding: 70rpx;
		width: 680rpx;
		margin: auto;
		// position: relative;

		#radar1,
		#radar2,
		#pie,
		#bar,
		#polylines {
			width: 640rpx;
			height: 530rpx;
			background-color: #fff;
			margin: 20rpx auto;
		}

		.text {
			font-size: 18px;
			font-family: AlimamaShuHeiTi-Bold;
			color: #333;
			margin-left: 30rpx;

			text {
				color: #f6e382;
			}
		}

		.midtitle {
			background-color: #90c9b4;
			font-size: 16px;
			display: block;
			margin: 0 auto;
			margin-bottom: 40rpx;
			width: 240rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			border-radius: 0 0 20rpx 20rpx;
			color: #fff;
			text-shadow: 1rpx 1rpx 3rpx #999;
		}
	}
</style>