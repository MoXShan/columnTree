//import Qs from "qs";
import Vue from 'vue'
import Axios from "axios"; 

//获取接口API
export function getMapLabel(){
	const url = "http://dtv.homed.me:12890/homed/release/get_list?label=0&accesstoken=TOKEN3120";
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
