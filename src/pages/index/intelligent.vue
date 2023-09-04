<template>
	<!-- 智能识别主页面 -->
	<view class="intelligent">
		<!-- 顶部 -->
		<ClassHeader :searchText="searchText" :text="hText"></ClassHeader>
		<!-- 工具栏 -->
		<view class="tool">
			<view class="toolItem">
				<text class="title">图像识别</text>
				<text class="text">海量识别</text>
				<el-icon class="icon">
					<svg t="1691652901293" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="6253" width="32" height="32">
						<path
							d="M512 736c-105.888 0-192-86.112-192-192s86.112-192 192-192 192 86.112 192 192S617.888 736 512 736zM512 416c-70.592 0-128 57.408-128 128 0 70.592 57.408 128 128 128 70.592 0 128-57.408 128-128C640 473.408 582.592 416 512 416z"
							p-id="6254" fill="#ffffff"></path>
						<path
							d="M864 896 160 896c-52.928 0-96-43.072-96-96L64 288c0-52.928 43.072-96 96-96l96 0c17.664 0 32 14.336 32 32S273.664 256 256 256L160 256C142.368 256 128 270.368 128 288l0 512c0 17.664 14.368 32 32 32l704 0c17.664 0 32-14.336 32-32L896 288c0-17.632-14.336-32-32-32L512 256c-17.664 0-32-14.336-32-32s14.336-32 32-32l352 0c52.928 0 96 43.072 96 96l0 512C960 852.928 916.928 896 864 896z"
							p-id="6255" fill="#ffffff"></path>
						<path d="M816 336m-48 0a1.5 1.5 0 1 0 96 0 1.5 1.5 0 1 0-96 0Z" p-id="6256" fill="#ffffff">
						</path>
						<path
							d="M480 128c0 17.664-14.336 32-32 32l-128 0C302.336 160 288 145.664 288 128l0 0c0-17.664 14.336-32 32-32l128 0C465.664 96 480 110.336 480 128L480 128z"
							p-id="6257" fill="#ffffff"></path>
					</svg>
				</el-icon>
			</view>
			<view class="toolItem bg2">
				<text class="title">智能对话</text>
				<text class="text">高效解答</text>
				<el-icon class="icon">
					<svg t="1691679494406" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="6458" width="32" height="32">
						<path
							d="M511.936 705.728c-105.888 0-192-86.112-192-192L319.936 257.952c0-105.888 86.112-192 192-192s192 86.112 192 192l0 255.776C703.936 619.584 617.824 705.728 511.936 705.728zM511.936 129.952c-70.592 0-128 57.408-128 128l0 255.776c0 70.592 57.408 128 128 128 70.592 0 128-57.408 128-128L639.936 257.952C639.936 187.36 582.528 129.952 511.936 129.952z"
							p-id="6459" fill="#ffffff"></path>
						<path
							d="M864 479.776 864 352c0-17.664-14.304-32-32-32s-32 14.336-32 32l0 127.776c0 160.16-129.184 290.464-288 290.464-158.784 0-288-130.304-288-290.464L224 352c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 127.776c0 184.608 140.864 336.48 320 352.832L480 896 288 896c-17.664 0-32 14.304-32 32s14.336 32 32 32l448 0c17.696 0 32-14.304 32-32s-14.304-32-32-32l-192 0 0-63.36C723.136 816.256 864 664.384 864 479.776z"
							p-id="6460" fill="#ffffff"></path>
					</svg>
				</el-icon>
			</view>
			<view class="toolItem bg3">
				<text class="title">算术批改</text>
				<text class="text">快速批改</text>
				<el-icon class="icon">
					<svg t="1691679628843" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="6864" width="32" height="32">
						<path
							d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128.288C300.416 128.288 128.288 300.416 128.288 512c0 211.552 172.128 383.712 383.712 383.712 211.552 0 383.712-172.16 383.712-383.712C895.712 300.416 723.552 128.288 512 128.288z"
							p-id="6865" fill="#ffffff"></path>
						<path
							d="M726.976 393.184c-12.544-12.448-32.832-12.32-45.248 0.256l-233.28 235.84-103.264-106.112c-12.352-12.704-32.608-12.928-45.248-0.64-12.672 12.32-12.96 32.608-0.64 45.248l126.016 129.504c0.064 0.096 0.192 0.096 0.256 0.192 0.064 0.064 0.096 0.192 0.16 0.256 2.016 1.984 4.512 3.2 6.88 4.544 1.248 0.672 2.24 1.792 3.52 2.304 3.872 1.6 8 2.4 12.096 2.4 4.064 0 8.128-0.8 11.968-2.336 1.248-0.512 2.208-1.536 3.392-2.176 2.4-1.344 4.896-2.528 6.944-4.544 0.064-0.064 0.096-0.192 0.192-0.256 0.064-0.096 0.16-0.128 0.256-0.192l256.224-259.008C739.648 425.856 739.52 405.6 726.976 393.184z"
							p-id="6866" fill="#ffffff"></path>
					</svg>
				</el-icon>
			</view>

		</view>
		<!-- 知识科普 -->
		<view class="knowledge">
			<ClassTitle :title="title[0]"></ClassTitle>
			<scroll-view class="navscroll" scroll-x>
				<view class="content" v-for="(i, index) in 3" :key="i">
					<el-card class="card" shadow="never" :body-style="{ padding: '0px' }">
						<img src="@/static/image/knowledge1.png" class="image" />
						<view class="text">
							<text class="className">AI技术：自然语言处理</text>
							<el-row class="row" justify="space-between">
								<el-col :span="12">
									<text class="name">共6章</text>
								</el-col>
								<el-col :span="12">
									<el-button class="itemBtn" link>
										<el-icon class="icon">
											<ArrowRight></ArrowRight>
										</el-icon>
										去查看
									</el-button>
								</el-col>
							</el-row>
						</view>
					</el-card>
				</view>
			</scroll-view>
		</view>
		<!-- 大咖科普 -->
		<view class="famous">
			<ClassTitle :title="title[1]"></ClassTitle>
			<scroll-view class="navscroll" scroll-x>
				<view class="item" v-for="(i, index) in famousImg" :key="i">
					<img src="@/static/image/famous1.png" alt="">
				</view>
			</scroll-view>
		</view>
		<!-- 智能分类 -->
		<view class="classify">
			<ClassTitle :title="title[2]"></ClassTitle>
			<el-row class="content" justify="space-evenly">
				<el-col :span="5" v-for="(i,index) in 4">
					<el-button link>
						<el-icon class="icon">
							<svg t="1691774231997" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="7729" width="32" height="32">
								<path
									d="M928.768 87.232c-0.032-7.456-1.216-13.696-2.848-19.328-31.328-8.288-72.128 1.248-106.624 17.984-7.072 3.424-23.84 13.632-48.672 28.736-10.272 6.272-19.328 11.776-23.328 14.048-0.384 0.224-0.608 0.64-0.96 0.864C678.56 88.256 599.296 64 514.272 64c-247.04 0-448 200.96-448 448 0 82.816 22.976 160.192 62.304 226.784-46.464 71.616-69.504 123.328-63.488 158.368 1.248 7.168 13.6 8.32 20.384 8.32 138.432 0 454.848-303.776 494.208-342.496C753.504 392 928.864 182.976 928.768 87.232zM306.272 610.688c-44.096 0-80-35.872-80-80 0-44.096 35.904-80 80-80s80 35.904 80 80C386.272 574.816 350.368 610.688 306.272 610.688zM447.072 386.688c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S500 386.688 447.072 386.688z"
									p-id="7730" fill="#83c6c2"></path>
								<path
									d="M895.904 278.56c-67.104 99.648-172.608 219.296-277.856 322.784-28.64 28.192-202.272 196.448-348.096 286.112 0.128-0.096 0.224-0.16 0.352-0.224C340.576 933.088 424.288 960 514.272 960c247.04 0 448-200.96 448-448C962.24 426.4 937.728 346.656 895.904 278.56zM640.032 800c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S675.328 800 640.032 800z"
									p-id="7731" fill="#83c6c2"></path>
							</svg>
						</el-icon>
						art
					</el-button>

				</el-col>
			</el-row>
			<el-row class="content" justify="space-evenly">
				<el-col :span="4" :offset="1" v-for="(i,index) in 4">
					<el-button link>
						<el-icon class="icon">
							<svg t="1691774231997" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="7729" width="32" height="32">
								<path
									d="M928.768 87.232c-0.032-7.456-1.216-13.696-2.848-19.328-31.328-8.288-72.128 1.248-106.624 17.984-7.072 3.424-23.84 13.632-48.672 28.736-10.272 6.272-19.328 11.776-23.328 14.048-0.384 0.224-0.608 0.64-0.96 0.864C678.56 88.256 599.296 64 514.272 64c-247.04 0-448 200.96-448 448 0 82.816 22.976 160.192 62.304 226.784-46.464 71.616-69.504 123.328-63.488 158.368 1.248 7.168 13.6 8.32 20.384 8.32 138.432 0 454.848-303.776 494.208-342.496C753.504 392 928.864 182.976 928.768 87.232zM306.272 610.688c-44.096 0-80-35.872-80-80 0-44.096 35.904-80 80-80s80 35.904 80 80C386.272 574.816 350.368 610.688 306.272 610.688zM447.072 386.688c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S500 386.688 447.072 386.688z"
									p-id="7730" fill="#83c6c2"></path>
								<path
									d="M895.904 278.56c-67.104 99.648-172.608 219.296-277.856 322.784-28.64 28.192-202.272 196.448-348.096 286.112 0.128-0.096 0.224-0.16 0.352-0.224C340.576 933.088 424.288 960 514.272 960c247.04 0 448-200.96 448-448C962.24 426.4 937.728 346.656 895.904 278.56zM640.032 800c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S675.328 800 640.032 800z"
									p-id="7731" fill="#83c6c2"></path>
							</svg>
						</el-icon>
						abccc
					</el-button>

				</el-col>
			</el-row>
		</view>

	</view>
</template>

<script setup>
	import {
		UserFilled,
		ArrowRight,
		View as IconView
	} from '@element-plus/icons-vue'
	import ClassHeader from '../class/component/header.vue'
	import ClassTitle from '../class/component/title.vue'

	const hText = "智能识别"
	const searchText = "搜索功能"
	const title = ["知识科普", "大咖科普", "智能分类"]
	const famousImg = ["@/static/image/famous1.png", "@/static/image/famous2.png"]
</script>

<style>
	.intelligent {
		background-color: #f3efee;
		font-size: 12px;
	}

	/* 工具开始 */
	.tool {
		width: 710rpx;
		padding: 20rpx;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	.tool .toolItem {
		width: 180rpx;
		/* height: 240rpx; */
		margin: 0 10rpx;
		background-color: #15a0ac;
		border-radius: 40rpx;
		padding: 20rpx;
		display: inline-block;
	}

	.tool .bg2 {
		background-color: #e4827d;
	}

	.tool .bg3 {
		background-color: #90c9b4;
	}

	.tool .toolItem .title {
		width: 200rpx;
		color: #ffffff;
		display: block;
		font-size: 15px;
		margin: 10rpx;
	}

	.tool .toolItem .text {
		width: 200rpx;
		margin: 10rpx;
		color: #ffffff;
		display: block;
		font-size: 12px;
	}

	.tool .toolItem .icon {
		margin-left: 40%;
		margin-top: 20rpx;
		width: 80rpx;
		height: 80rpx;
		display: block;
	}

	/* 工具结束 */
	/* 知识科普开始 */
	.knowledge {
		width: 710rpx;
		margin: 0 auto;
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.knowledge .navscroll {
		white-space: nowrap;
		width: 680rpx;
		margin: 0 auto;
		/* height: 194px; */
	}

	.knowledge .content {
		display: inline-block;
		margin-top: 14rpx;
		/* 斜体 */
		font-style: italic;
		width: 280rpx;
		margin-right: 20rpx;
	}

	.knowledge .content .card {
		border-radius: 20rpx;
	}

	.knowledge .content .image {
		width: 100%;
		display: block;
	}

	.knowledge .content .text {
		margin: 4rpx auto;
		width: 90%;
	}

	.knowledge .content .className {
		font-size: 14px;
		font-weight: 600;
	}

	.knowledge .content .row {
		margin-top: 2%;
	}

	.knowledge .content .icon {
		color: #909090;
		font-size: 12px;
	}

	.knowledge .content .name {
		font-size: 12px;
		color: #909090;
	}

	.knowledge .content .value {
		color: #90c9b4;
		font-size: 12px;
		font-weight: 600;
	}

	.knowledge .itemBtn {
		background-color: #f3efee;
		padding: 6rpx 8rpx 6rpx 6rpx;
		/* margin-left: 20rpx; */
		font-size: 12px;
		border-radius: 20rpx;
	}

	/* 知识科普结束 */
	/* 大咖科普开始 */
	.famous {
		width: 710rpx;
		margin: 0 auto;
		padding: 4rpx 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.famous .navscroll {
		white-space: nowrap;
		width: 680rpx;
		margin: 20rpx auto;
		/* height: 194px; */
	}

	.famous .item {
		width: 460rpx;
		/* height: 400rpx; */
		display: inline-block;
		margin-right: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.famous .item img {
		width: 100%;
	}

	/* 大咖科普结束 */
	/* 智能分类开始 */
	.classify {
		width: 710rpx;
		padding: 20rpx;
		margin: 0 auto;
		padding-bottom: 30rpx;
	}

	.classify .content {
		margin-top: 20rpx;
	}

	.classify .content .icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 4rpx;
	}

	.classify .content .even {
		margin-left: 20rpx;
	}

	/* 智能分类结束 */
</style>