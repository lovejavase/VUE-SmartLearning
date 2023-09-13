export const baseUrl = 'http://a-puppy-c.top:9999' //基本路径

export const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded',
			},
			// timeout:5000,
			success: (res) => {
				if (res == '') {
					return uni.showToast({
						icon: 'loading',
						title: '获取数据失败'
					})
				} else {
					return uni.showModal({
						title: '提示',
						content: '登录信息已过期，请重新登录',
					});
				}
				resolve(res.data)
			},
			fail: (err) => {
				return uni.showToast({
					icon: 'loading',
					title: '请求失败'
				})
				reject(err)
			}
		})
	})
}
export default request