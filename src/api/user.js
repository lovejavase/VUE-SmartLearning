import {
	reactive,
	ref
} from 'vue';
// 接口调用

let user = reactive({
	userAvatar: ref(''),
	userEmail: ref(''),
	userGrade: ref(''),
	userId: ref(),
	userInterest: ref(''),
	userLoginAddress: ref(''),
	userNickName: ref('aa'),
	userNumber: ref(''),
	userPhone: ref(''),
	userPoints: ref(''),
	userState: ref(''),
	userVip: ref('')
})

let getUsers = () => {
	console.log("开始调用getUser")
	uni.request({
		url: 'http://a-puppy-c.top:9999/Smart/User/getUser',
		method: 'GET',
		data: {
			userId: 1
		},
		header: {
			'custom-header': 'getUser' //自定义请求头信息
		},
		success: (res) => {
			console.log("调用getUser成功");
			console.log(res.data);
			// user=res.data.data;
			// console.log(user)
			// console.log(user.userNickName)
			user.userNickName = res.data.data.userNickName
			user.userAvatar = res.data.data.userAvatar
			user.userId = res.data.data.userId
			user.userVip = res.data.data.userVip
			return res.data
		},
		fail() {
			console.log("调用getUser失败");
		}
	})
}
export default {
	user
}