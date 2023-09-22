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
			<view class="text">
				掌握
				<text>
					{{sum[0]}}
				</text>
				个核心知识点
			</view>
			<view id="radar2"></view>
			<!-- 知识点分布 -->
			<view class="text">科普知识点分布</view>
			<view id="radar1"></view>
			<!-- 视频类型分布 -->
			<view class="text">喜爱视频类型分布</view>
			<view id="pie"></view>
			<!-- 学习时长 -->
			<view class="text">总共学习时长
				<text>
					{{sum[1]}}
				</text>
				分钟
			</view>
			<view id="bar"></view>
			<!-- 积分统计 -->
			<view class="text">本周活跃度分析</view>
			<view id="polylines"></view>
		</view>
	</view>
</template>

<script setup>
	import myheader from "@/component/header.vue"
	import * as echarts from "echarts";
	import {
		onMounted,
		onUnmounted,
		ref
	} from "vue";
	// 核心知识点和学习时间统计
	const sum = ref([78, 389])
	// 核心知识点发布 雷达图
	const key = ref([345, 724, 665, 615, 455])
	// 科普知识点分布 雷达图
	const science = ref([345, 725, 665, 615, 455])
	// 喜爱视频类型  饼图
	const favor = ref([128, 389, 200, 161, 251])
	// 学习时间  柱状图
	const study = ref([60, 52, 69, 57, 39, 41, 71])
	// 本周活跃度分析  折线图
	const score = ref([141, 222, 134, 206, 366, 156, 218]);
	//日期数据
	const data = ref(['9-18', '9-19', '9-20', '9-21', '9-22', '9-23', '9-24'])

	/// 声明定义一下echart
	let echart = echarts;

	onMounted(() => {
		initChart()
		sum.value = [0, 0]
		// 核心知识点统计
		for (var i = 0; i < key.value.length; i++) {
			sum.value[0] += ~~key.value[i]
		}
		// 学习时间统计
		for (var i = 0; i < study.value.length; i++) {
			sum.value[1] += ~~study.value[i]
		}
	})
	onUnmounted(() => {
		echart.dispose
	})

	// 基础配置一下Echarts
	function initChart() {
		let radar1 = echart.init(document.getElementById("radar1"));
		let radar2 = echart.init(document.getElementById("radar2"));
		let pie = echart.init(document.getElementById("pie"));
		let bar = echart.init(document.getElementById("bar"));
		let polylines = echart.init(document.getElementById("polylines"));
		// 把配置和数据放这里
		// 雷达图：科普知识点
		radar1.setOption({
			color: '#83b6a2',
			title: {
				text: ''
			},
			legend: {},
			radar: [{
				indicator: [{
						name: '计算',
						max: 1000
					},
					{
						name: '传感',
						max: 1000
					},
					{
						name: '概览',
						max: 1000
					},
					{
						name: '伦理',
						max: 1000
					},
					{
						name: '逻辑',
						max: 1000
					}
				],
				radius: 100,
				// top: 90,
				startAngle: 90,
				splitNumber: 4,
				shape: 'circle',
				axisName: {
					// formatter: '【{value}】',
					fontSize: 14,
					color: '#15a0ac',
				},
				splitArea: {
					areaStyle: {
						color: ['#fff'],
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(211, 253, 250, 0.8)'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#15a0ac80'
					}
				}
			}],
			series: [{
				type: 'radar',
				emphasis: {
					lineStyle: {
						width: 5
					}
				},
				data: [{
					value: key.value,
					areaStyle: {
						color: '#90c9b4'
					}
				}]
			}]
		});
		// 雷达图：核心知识点
		radar2.setOption({
			color: '#83b6a2',
			title: {
				text: ''
			},
			legend: {},
			radar: [{
				indicator: [{
						name: '发展',
						max: 1000
					},
					{
						name: '风险',
						max: 1000
					},
					{
						name: '历史',
						max: 1000
					},
					{
						name: '应用',
						max: 1000
					},
					{
						name: '历史',
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
					value: key.value,
					color: '#fff'
				}]
			}]
		})
		// 饼图：喜爱视频分布
		pie.setOption({
			color: ['#90c9b4', '#90c9b490', '#90c9b460', '#90c990cc'],
			title: "",
			tooltip: {
				trigger: 'item'
			},
			// legend: {
			// orient: 'vertical',
			// left: 'left'
			// },
			series: [{
				// name: 'Access From',
				type: 'pie',
				radius: '60%',
				data: [{
						value: favor.value[0],
						name: '发展'
					},
					{
						value: favor.value[1],
						name: '科普'
					},
					{
						value: favor.value[2],
						name: '历史'
					},
					{
						value: favor.value[3],
						name: '原理'
					},
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: '#15a0ac'
					}
				},
				label: {
					textStyle: { //数值样式
						color: '#15a0ac', //字体颜色
						fontSize: 14 //字体大小
					}
				}
			}]
		})
		// 柱状图：学习时长
		bar.setOption({
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
				data: data.value,
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
				data: study.value,
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
		})
		// 折线图：本周活跃度分析
		polylines.setOption({
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
				data: data.value
			},
			yAxis: {},
			grid: {
				top: '14%',
				bottom: '16%'
			},
			series: {
				type: 'line',
				showSymbol: false,
				data: score.value,
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
		})




		window.onresize = function() {
			//自适应大小
			chart.resize();
			chart2.resize();
			pie.resize();
			bar.resize();
			polylines.resize();
		};
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
			width: 680rpx;
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