import ElementPlus from 'element-plus' //添加
import 'element-plus/dist/index.css' //添加
import 'element-plus/dist/index.css'
//import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn' //切换为中文版本

import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import Footer from "./component/footer.vue"
// import request from './api/request.js'

export function createApp() {
	const app = createSSRApp(App);
	app.use(ElementPlus, {
		locale
	})

	app.component('Footer', Footer)
	// app.config.globalProperties.$request = request
	// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	//   app.component(key, component)
	// };
	return {
		app,
	};
}