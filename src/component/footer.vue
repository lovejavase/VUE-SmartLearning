<template>
	<view class="buttom">
		<view class="footer">
			<view class="btn" @click="gotoIndex">
				<image class="img" src="@/static/image/footer/index.png" />
			</view>
			<view class="btn" @click="gotoClass">
				<image class="img" src="@/static/image/footer/class.png" />
			</view>
			<view class="mid">
				
			</view>
			<view class="btn" @click='gotocommunity'>
				<image class="img" src="@/static/image/footer/community.png" />
			</view>
			<view class="btn" @click="gotoUser">
				<image class="img" src="@/static/image/footer/user.png" />
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
	let gotoIndex = () => {
		uni.redirectTo({
			url: '/pages/index/index'
		});
	};
	let gotoClass = () => {
		uni.redirectTo({
			url: '/pages/class/class'
		});
	}
	let gotoUser = () => {
		uni.redirectTo({
			url: '/pages/user/user'
		})
	}
	let gotocommunity = () => {
		uni.redirectTo({
			url: '/pages/community/community'
		})
	}
	let gototalk = () => {
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