// 获取用户信息
let getUser = (userId) => {
	console.log("开始调用getUser")
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://115.159.192.113:9999/Smart/User/getUser',
			method: 'GET',
			data: {
				userId: userId
			},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				console.log("用户-调用getUser成功");
				// user.value = res.data.data;
				// console.log(res.data.data);
				resolve(res.data)
			},
			fail()  {
				console.log("接口请求失败");
			}
		})
	})
}
export default getUser