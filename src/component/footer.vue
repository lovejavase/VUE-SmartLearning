<template>
	<view class="footer">
		<block>
			<view class="tabbar-item" v-for="(item, index) in list" :class="[item.centerItem ? ' center-item' : '']"
				@click="changeItem(item)">
				<view class="item-top">
					<image :src="currentItem == item.id ? item.selectIcon : item.icon"></image>
				</view>
				<view class="item-bottom" :class="[currentItem == item.id ? 'item-active' : '']">
				</view>
			</view>
		</block>

		<!-- <view class="talk">
			<el-button plain class="btn">
				<img class="img" src="@/static/image/footer/talk.png" mode="" />
			</el-button>
		</view> -->
	</view>
	<!-- <el-affix position="bottom" :offset="30"> -->
	<!-- <view class="buttom"> -->
	<!-- <view class="footer">
			<el-button plain class="btn" >
				<img class="img" src="@/static/image/footer/index.png" mode="" />
			</el-button>
			<el-button plain class="btn">
				<img class="img" src="@/static/image/footer/class.png" mode="" />
			</el-button>
			<el-button plain class="btn">
				<img class="img" src="@/static/image/footer/community.png" mode="" />
			</el-button>
			<el-button plain class="btn">
				<img class="img" src="@/static/image/footer/user.png" mode="" />
			</el-button>
			<view class="talk">
				<el-button plain class="btn">
					<img class="img" src="@/static/image/footer/talk.png" mode="" />
				</el-button>
			</view>
		</view> -->
	<!-- </view> -->
	<!-- </el-affix> -->
</template>


<script setup>
	import {
		onMounted,
		ref,
		defineProps,
		toRefs
	} from 'vue'
	const props = defineProps({
		currentPage: Number,
	})
	const currentPage = toRefs(props)
	let currentItem = 0
	let list = [{
			id: 0,
			text: "", //首页
			pagePath: "pages/index/index",
			iconPath: "static/image/footer/index.png",
			selectedIconPath: "static/image/footer/index2.png",
			centerItem: false
		},
		{
			id: 1,
			text: "", //课堂
			pagePath: "pages/class/class",
			iconPath: "static/image/footer/class.png",
			selectedIconPath: "static/image/footer/class2.png",
			centerItem: false
		},
		{
			id: 2,
			text: "", //智能对话
			pagePath: "pages/talk/talk",
			iconPath: "static/image/footer/talk.png",
			selectedIconPath: "static/image/footer/talk2.png",
			centerItem: true
		},
		{
			id: 3,
			text: "", //社区
			pagePath: "pages/community/community",
			iconPath: "static/image/footer/community.png",
			selectedIconPath: "static/image/footer/community2.png",
			centerItem: false
		},
		{
			id: 4,
			text: "", //用户
			pagePath: "pages/user/user",
			iconPath: "static/image/footer/user.png",
			selectedIconPath: "static/image/footer/user2.png",
			centerItem: false
		}
	]

	onMounted(() => {
		this.currentItem = this.currentPage;
		console.log(currentItem);
		uni.hideTabBar();
	})

	// mounted() {

	// 	},

	let changeItem = (item) => {
		let _this = this;
		//_this.currentItem = item.id;
		uni.switchTab({
			url: item.path
		});
	}
</script>

<style scoped>
	.buttom {
		position: fixed;
		buttom: 0;
		width: 750rpx;
		height: auto;
	}

	.footer {
		/* margin-top: 6%; */
		background-color: #90c9b4;
		height: auto;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		border-radius: 28px 28px 0 0;
		padding: 1% 4%;
		position: relative;
	}

	.footer .btn {
		background-color: transparent;
		border: none;
		width: 18%;
		height: auto;
		/* padding: 0; */
	}

	.footer .img {
		width: 100%;
	}

	.footer .talk {
		position: absolute;
		top: -50%;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #f6e382;
	}

	.footer .talk .btn {
		width: 100rpx;
		height: auto;
	}
</style>