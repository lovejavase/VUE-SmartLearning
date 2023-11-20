<template>
	<view class="redBook" :style="{ height: set.screenHeight,background:set.background, }">
		<lz-red-book ref="lzRedBook" :chapter="chapter" :bookText="content_text" :scrollDirection="set.scrollDirection"
			:bookStyle="{ background:set.background,'font-size':set.fontSize+'px','line-height':set.lineHeight+'px','color':set.fontColor}"
			@clickCenter="clickCenter" @scrollEnd="scrollEnd" @scrollStart="scrollStart"></lz-red-book>

		<!-- 遮罩层上部分 -->

		<!-- 遮罩层下部分 -->
		<view class="mask-bottom" :style="{bottom:mask.showMask?0:-300+'upx','background':mask.background}">
			<view class="v1">
				<view class="slider-warp">
					字体：
					<slider class="slider" block-size="20" activeColor="#FFCC33" :step="2" backgroundColor="#000000"
						block-color="#8A6DE9" :value="set.fontSize" @change="sliderChange($event,'fontSize')" min="18"
						max="30" />
				</view>
				<view class="slider-warp">
					间距：
					<slider class="slider" block-size="20" activeColor="#FFCC33" :step="2" backgroundColor="#000000"
						block-color="#8A6DE9" :value="set.lineHeight" @change="sliderChange($event,'padding')" min="26"
						max="40" />
				</view>
			</view>
			<view class="v1">
				滚动方向：
				<uni-tag text="左右" :inverted="set.scrollDirection=='topBottom' ? true : false" type="primary"
					@click="changeScrollDirection('leftRight')" size="small" />
				<uni-tag text="上下" :inverted="set.scrollDirection=='leftRight' ? true : false" type="primary"
					@click="changeScrollDirection('topBottom')" size="small"
					style="color: #333333; margin-left: 10px;" />
			</view>
			<view class="v2">
				<view v-for="(item,index) in arr" :key="index" :class="mask.backgroundIndex==index?'color-warp':''"
					class="v1-color" @click="changeBackground(index)">
					<uni-icons type="smallcircle-filled" size="26" :color="item.color"></uni-icons>
				</view>
			</view>
			<view class="v3">
				<view class="v3-item">
					<uni-icons type="settings" size="20"></uni-icons>目录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mask: { //遮罩层
					showMask: false,
					background: '#fff',
					backgroundIndex: 0,
				},
				set: {
					background: '#f0f0f0', //页面背景颜色
					fontSize: 18, //字体大小
					lineHeight: 33, //字体间距
					fontColor: '#000', //字体颜色
					scrollDirection: 'leftRight', //滚动方向leftRight左右，上下topBottom
				},
				arr: [{
						background: '#f0f0f0', //背景色
						maskBg: '#fff', //遮罩层色
						fontColor: '#524d51', //字体颜色
						color: '#f5f5f5', //选择圆圈颜色
					},
					{
						background: '#d8c9aa', //背景色
						maskBg: '#f3e4c3', //遮罩层色
						fontColor: '#3c2506', //字体颜色
						color: '#e0d1aa', //选择圆圈颜色
					},
					{
						background: '#daba94', //背景色
						maskBg: '#f8dcb4', //遮罩层色
						fontColor: '#3c2506', //字体颜色
						color: '#d8b784', //选择圆圈颜色
					},
					{
						background: '#cfb793', //背景色
						maskBg: '#f8dcb4', //遮罩层色
						fontColor: '#674923', //字体颜色
						color: '#d6b781', //选择圆圈颜色
					},
					{
						background: '#aac9aa', //背景色
						maskBg: '#cdeccd', //遮罩层色
						fontColor: '#2c1e1e', //字体颜色
						color: '#abcaab', //选择圆圈颜色
					},
					{
						background: '#333b3d', //背景色
						maskBg: '#313439', //遮罩层色
						fontColor: '#7e8894', //字体颜色
						color: '#626a75', //选择圆圈颜色
					}
				],
			};

		},
		methods: {

			//点击中间
			clickCenter() {
				let that = this
				that.mask.showMask = !that.mask.showMask
			},
			//滚动到最后一页
			scrollEnd() {
				uni.showToast({
					title: '最后一页了'
				});
			},
			//滚动到第一页
			scrollStart() {
				uni.showToast({
					title: '第一页'
				});
			},
			//滑块设置字体间距或大小
			sliderChange(e, type) {
				let that = this
				that.$refs.lzRedBook.init()
				if (type == 'fontSize') {
					console.log('value 发生变化：' + e.detail.value)
					that.set.fontSize = e.detail.value
				} else {
					that.set.lineHeight = e.detail.value
				}
				//重新计算页面页数
				uni.$emit('lz-red-book-change')
			},

			//修改滚动方向
			changeScrollDirection(text) {
				let that = this
				that.set.scrollDirection = text
				//重新计算页面页数
				uni.$emit('lz-red-book-change', 'changeScrollDirection')
			},
			//修改背景颜色
			changeBackground(index) {
				let that = this
				that.mask.backgroundIndex = index
				that.set.background = that.arr[index].background //背景颜色
				that.set.fontColor = that.arr[index].fontColor //字体颜色
				that.mask.background = that.arr[index].maskBg //遮罩背景色
			},

		}
	};
</script>

<script setup>
	import myheader from "@/component/header.vue";
	import titles from "@/pages/community/component/title.vue"
	import {
		onLoad
	} from '@dcloudio/uni-app';

	import {
		onMounted,
		ref
	} from "vue";
	import request from "../../api/request";

	var bookId = 0
	const book = ref({})
	const chapter = ref('')
	const content = ref({})
	const content_text = ref('')
	onLoad((res) => {
		bookId = ~~res.id
		getBookContent(bookId).then(res => {
			console.log(content_text.value)
			console.log(chapter.value)
		})

	})


	let getBookContent = (id) => {
		//从后端获取书籍详细信息
		// return new Promise((resolve, reject) => {
		request({
			url: "/Smart/Book/selectAllByContent",
			method: 'GET',
			data: {
				bookId: id
			}
		}).then(res => {
			if (res.code == 200) {
				console.log("主页-调用getBook成功");
				content_text.value = res.data[1].content
				chapter.value = res.data[1].chapter
			} else {
				console.log("主页-调用getBook失败");
				console.log(res.data);
			}
		})
		// })
	}
</script>

<style scoped lang="scss">
	.redBook {
		width: 100%;
		height: 100%;

		.mask-top {
			position: fixed;
			height: 40upx;
			transition: all 0.2s;
			width: 100%;
			z-index: 1000;
			margin: auto;
			border-radius: 0 0 4px 4px;
		}

		.mask-bottom {
			position: fixed;
			height: 300upx;
			transition: all 0.2s;
			width: 100%;
			z-index: 1000;
			margin: auto;
			border-radius: 10px 10px 0 0;
			padding: 10px;
			box-sizing: border-box;

			.v1 {
				width: 100%;
				display: flex;
				align-items: center;

				.slider-warp {
					display: flex;
					flex: 1;
					align-items: center;

					.slider {
						flex: 1;
					}
				}
			}

			.v2 {
				display: flex;
				width: 100%;
				justify-content: space-around;
				margin-top: 10px;

				.color-warp {
					border: 1px solid #6d583b;
					border-radius: 50%;
					width: 26px;
					height: 26px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.v3 {
				margin-top: 10px;

				.v3-item {
					width: 100px;
					height: 30px;
					background: #f7f7f7;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>