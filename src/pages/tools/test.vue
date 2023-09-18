<template>
	<view class="test">
		<!-- 顶部 -->
		<ClassHeader searchText="" text="答题测验"></ClassHeader>
		<!-- 小标题 -->
		<title-item class="ti" title='答题练习'></title-item>
		<text class="bTitle">坚持练习，掌握知识！</text>
		<!-- 答题练习 -->
		<view class="practice">
			<view class="day" @click="gotoTest">
				<text class="title">每日答题</text>
				<text>天天掌握新知识</text>
				<image src='@/static/image/icon/scoreA_white.svg' class="image" />
			</view>
			<view class="day quiz" @click="gotoTest">
				<text class="title">测试</text>
				<text>看看掌握了多少</text>
				<image src='@/static/image/icon/test.svg' class="image" />
			</view>
		</view>
		<!-- 小标题 -->
		<title-item class="ti" title='答题竞赛'></title-item>
		<text class="bTitle">挑战对抗，磨练技能！</text>
		<view class="pvp">
			<view class="p4">
				<text>四人赛</text>
				<image src='@/static/image/icon/bg1.png' class="bg1" />
				<image src='@/static/image/icon/bg11.png' class="bg2" />
			</view>
			<view class="pGroup">
				<view class="p2">
					<text>双人赛</text>
				<image src='@/static/image/icon/bg2.png' class="bg1" />
				<image src='@/static/image/icon/bg22.png' class="bg2" />
				</view>
				<view class="p2 p3">
					<text>挑战赛</text>
				<image src='@/static/image/icon/bg3.png' class="bg1" />
				<image src='@/static/image/icon/bg33.png' class="bg2" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import ClassHeader from '../class/component/header.vue'
	import titleItem from '../class/component/title.vue'
	let gotoTest=()=>{
		uni.navigateTo({
			url:'/pages/tools/quiz'
		})
	}
</script>

<style>
	.ti :deep(.background) {
		display: none;
	}

	.ti :deep(.text) {
		font-size: 18px;
		color: #383838;
		font-weight: 600;
		margin-left: 10rpx;
		margin-bottom: 20rpx;
	}

	::v-deep .topBottom {
		display: none;
	}

	::v-deep .title {
		margin-top: 40rpx;
	}

	.test {
		margin-top: 50rpx;
	}

	.practice {
		margin: 20rpx 50rpx;
	}

	/* 小标题下标语 */
	.bTitle {
		display: block;
		margin-left: 40rpx;
		color: #909090;
		margin-bottom: 20rpx;
	}

	/* 答题练习开始 */
	.practice {
		width: 670rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
	}

	.practice .day {
		width: 280rpx;
		height: 220rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #90c9b4;
	}

	/* 测验紫色背景 */
	.practice .quiz {
		background-color: #949bb8;
	}

	.practice .day text {
		display: block;
		color: #ffffff;
	}

	.practice .day>.title {
		margin: 10rpx 0;
		font-size: 18px;
		font-weight: 600;
		text-shadow: 1rpx 1rpx 2rpx #909090;
	}

	.practice .day image {
		width: 100rpx;
		height: 100rpx;
		margin-left: 68%;
		margin-top: 30rpx;
	}

	/* 答题练习结束 */
	/* 答题竞赛开始 */
	.pvp {
		width: 670rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
	}

	.pvp .p4 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 280rpx;
		height: 420rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #F4EBCC;
		position: relative;
	}

	.pvp .p4>image {
		width: 40rpx;
		height: 40rpx;
	}

	
	/* 字体 */
	.pvp text {
		font-size: 20px;
		color: #ffffff;
		text-shadow: 4rpx 4rpx 4rpx #6b6b6b;
		z-index: 2;
	}

	.pvp .pGroup {
		width: 320rpx;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
	}

	.pvp .pGroup .p2 {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 280rpx;
		height: 176rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #A7D6D1;
	}

	.pvp .pGroup .p3 {
		position: relative;
		background-color: #FDF8EC;
	}
	/* 背景四叶草 */
	.pvp .p4>.bg1 {
		width: 200rpx;
		height: 200rpx;
		position: absolute;
		top: 29%;
		left: 19.3%;
		z-index: 0;
	}
	
	.pvp .p4>.bg2 {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 5%;
		left: 5%;
		z-index: 0;
	}
	/* 右边背景 */
	.pvp .p2>.bg1 {
		width: 120rpx;
		height: 120rpx;
		position: absolute;
		top: 22%;
		left: 31.5%;
		z-index: 0;
	}
	
	.pvp .p2>.bg2 {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 5%;
		left: 5%;
		z-index: 0;
	}
	

	/* 答题竞赛结束 */
</style>