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
			<view class="text">
				掌握
				<text>
					{{sum[0]}}
				</text>
				个核心知识点
			</view>
			<view id="radar1"></view>
			<view class="text">喜爱视频类型分布</view>
			<view id="radar2"></view>
			<view class="text">科普知识点分布</view>
			<view id="pie"></view>
			<view class="text">总共学习时长
				<text>
					{{sum[1]}}
				</text>
				分钟
			</view>
			<view id="bar"></view>
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

	const sum = ref([364, 1023])

	/// 声明定义一下echart
	let echart = echarts;

	onMounted(() => {
		initChart()
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
		// 把配置和数据放这里
		radar1.setOption({
			color: '#83b6a2',
			title: {
				text: ''
			},
			legend: {},
			radar: [{
				indicator: [{
						name: '智能',
						max: 1000
					},
					{
						name: '研究',
						max: 1000
					},
					{
						name: '学科',
						max: 1000
					},
					{
						name: '历史',
						max: 1000
					},
					{
						name: '科技',
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
					fontSize: 16,
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
					value: [345, 725, 665, 615, 455],
					areaStyle: {
						color: '#90c9b4'
					}
				}]
			}]
		});

		radar2.setOption({
			color: '#83b6a2',
			title: {
				text: ''
			},
			legend: {},
			radar: [{
				indicator: [{
						name: '创新类',
						max: 1000
					},
					{
						name: '娱乐类',
						max: 1000
					},
					{
						name: '专家讲坛',
						max: 1000
					},
					{
						name: '解析类',
						max: 1000
					},
					{
						name: '科普类',
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
					fontSize: 16,
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
					value: [345, 725, 665, 615, 455],
					color: '#fff'
				}]
			}]
		})

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
						value: 323,
						name: '技术'
					},
					{
						value: 161,
						name: '科普'
					},
					{
						value: 100,
						name: '实践'
					},
					{
						value: 253,
						name: '答题'
					},
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}]
		})

		bar.setOption({
			color: ['#90c9b4'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: ['9-18', '9-19', '9-20', '9-21', '9-22', '9-23'],
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
				data: [104, 52, 142, 187, 297, 241, 231],
				label: {
					show: true, //开启显示
					position: 'top', //在上方显示
					// formatter: '{c}',//显示百分号
					textStyle: { //数值样式
						color: '#333', //字体颜色
						fontSize: 14 //字体大小
					}
				}
			}]
		})

		window.onresize = function() {
			//自适应大小
			chart.resize();
			chart2.resize();
			pie.resize();
			bar.resize();
		};
	}

</script>

<style lang="scss">
	.data {
		background-color: #e5f3ef;
		padding-top: 40rpx;
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
		#bar {
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