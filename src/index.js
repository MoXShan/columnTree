import LabelTree from './components/LabelTree.vue'

const component = {
	install : function(Vue) {
		if(typeof window !=='undefined' && window.Vue) {
			Vue= window.Vue
		}
		Vue.component('LabelTree',LabelTree)
	}	
}
//global 情况下 自动安装
	if(typeof window !== 'undefined' && window.Vue) {
		window.Vue.use(component)
	}
export default component
