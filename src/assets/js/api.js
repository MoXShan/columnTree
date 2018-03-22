//import Qs from "qs";
import Vue from 'vue'
import Axios from "axios"; 

//获取接口API
export function getMapLabel(){
	
//	build/webpack.dev.conf.js配置的express服务，使用本地数据。上线的话，用户配置真实接口
	const url = '/api/getData';
	return Axios({
		method: 'GET',
		url: url
	})
	.then((res) => {
		return Promise.resolve(res.data)
	}).catch((error) =>{
		return Promise.reject(error);
	})
}
