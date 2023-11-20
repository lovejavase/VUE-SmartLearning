export const baseUrl = 'http://8.130.21.88:9999' //基本路径

export const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			data: Object.assign(options.data || {}),
			header: {
				'Authorization': uni.getStorageSync('Authorization'),
				'content-type': 'application/x-www-form-urlencoded',
			},
			// timeout:5000,
			success: (res) => {
				// console.log(res.data)
				resolve(res.data)
			},
			fail: (err) => {
				console.log(err)
				reject(err)
			}
		})
	})
}
export default request