import request from './request.js'
// 获取课堂（分页
export const getList = () => {
	request({
		url: '/Smart/Lesson/getList',
		data: {
			start: 0,
			limit: 3
		},
		method: 'GET'
	}).then(res => {
		// console.log(res)
	})
}
// export const getList3 = () => {
// 	request({
// 		url: '/Smart/Lesson/getList',
// 		data: {
// 			start: 0,
// 			limit: 3
// 		},
// 		method: 'GET'
// 	}).then(res => {
// 		console.log("封装调用成功")
// 	})
// }

// export default {
// 	getList2,
// 	getList3
// }