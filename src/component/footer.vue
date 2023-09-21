<template>
	<view class="buttom">
		<view class="footer">
			<view class="btn" @click="gotoIndex">
				<image v-if="pageid!=1" class="img" src="@/static/image/footer/index.png" />
				<image v-if="pageid==1" class="img" src="@/static/image/footer/index2.png" />
			</view>
			<view class="btn" @click="gotoClass">
				<image v-if="pageid!=2" class="img" src="@/static/image/footer/class.png" />
				<image v-if="pageid==2" class="img" src="@/static/image/footer/class2.png" />
			</view>
			<view class="mid">

			</view>
			<view class="btn" @click='gotocommunity'>
				<image v-if="pageid!=3" class="img" src="@/static/image/footer/community.png" />
				<image v-if="pageid==3" class="img" src="@/static/image/footer/community2.png" />
			</view>
			<view class="btn" @click="gotoUser">
				<image v-if="pageid!=4" class="img" src="@/static/image/footer/user.png" />
				<image v-if="pageid==4" class="img" src="@/static/image/footer/user2.png" />
			</view>
			<view class="talk" @click='gototalk'>
				<view class="btn">
					<image class="midImg" src="@/static/image/footer/talk.png" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const pageid = ref(getApp().globalData.pageid)
	console.log(pageid.value)
	
	const gotoIndex = () => {
		getApp().globalData.pageid = 1
		uni.redirectTo({
			url: '/pages/index/index'
		});
	};
	const gotoClass = () => {
		getApp().globalData.pageid = 2
		uni.redirectTo({
			url: '/pages/class/class'
		});
	}
	const gotoUser = () => {
		getApp().globalData.pageid = 4
		uni.navigateTo({
			url: '/pages/user/user'
		})
	}
	const gotocommunity = () => {
		getApp().globalData.pageid = 3
		uni.redirectTo({
			url: '/pages/community/community'
		})
	}
	const gototalk = () => {
		uni.navigateTo({
			url: '/pages/talk/talk'
		})
	}
</script>

<style scoped>
	.buttom {
		position: fixed;
		/* buttom: 20rpx; */
		/* top: 0; */
		bottom: 0;
		width: 750rpx;
		z-index: 99;
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
		width: 80rpx;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10rpx;
		/* padding: 0; */
	}

	.footer .midImg {
		width: 50rpx;
		height: 70rpx;
	}

	.footer .img {
		width: 60rpx;
		height: 60rpx;
	}

	.footer .talk {
		position: absolute;
		top: -50%;
		width: 106rpx;
		height: 106rpx;
		border-radius: 53rpx;
		background-color: #f6e382;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>