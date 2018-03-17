<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
    <el-popover 
    ref="popover2"
    trigger="click"
    >
    <div class="tree">
			<div v-for="item in treeList" class="tree-item">
				<el-tree
					:data='item'
					:props="defaultProps"
					show-checkbox
					node-key="id"
					:default-expanded-keys="originIds"
					:default-checked-keys="defaultCheck"
				  @check="handleCheckChange"
					>
				</el-tree>		
			</div>
   	</div>
   	</el-popover>
   	<el-button v-popover:popover2>click 激活</el-button>
  </div>
</template>

<script>
import {getMapLabel} from '@/assets/js/api'
export default {
  name: 'LabelTree',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      treeList: [],
      defaultProps: {
		  	children: 'children',
		  	label: 'label',
		  },
		  originIds: [],
		  defaultCheck:[],
    }
  },
  mounted(){
  	this._getMapLabel();
  },
  methods: {
  	_getMapLabel(){
  		 getMapLabel().then((res) =>{
  		 		if(res.ret===0){
  		 			console.log('success');
  		 		  var list =	res.type_list[0].children;
  		 		  console.log(list);
//		 		  this.treeList = list
  		 		  this.initTree(list);
  		 		}
  		 })
  	},
  	initTree(list){
  		list.forEach((item,index) =>{
  			//按照树形数据结构，每列数据加一个[],包括起来
  				let arr = [];
  				arr.push(this.handleTreeData(item));
					this.originIds.push(arr[0].id);
  				this.treeList.push(arr);
  		})
  		console.log(this.originIds);
  		

  	},
  	handleCheckChange(data){
			console.log(data);
			console.log(data.id);
			if(!this.defaultCheck.includes(data.id)){
					this.defaultCheck.push(data.id);
			}
  	},
  	handleTreeData(arr){
  				let obj = {};
		   		obj.label = arr.name;
		   		obj.id = arr.id;
//		   		obj.sortby = arr.defaultsortby;
		   		obj.children = [];
		   		if(arr.children){
					let  item = arr.children;
		   			for(let i=0;i<item.length;i++){	
		   				//去掉频道
		   				if(item[i].program_property.content_type === 1001) continue;
		   				obj.children.push(this.handleTreeData(item[i]));
		   			}
		   }
		   	 return obj;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/*li {
  display: inline-block;
  margin: 0 10px;
}*/
a {
  color: #42b983;
}
.popover{
	overflow:auto;
}
.tree{
	display: flex;
	flex-direction:row;
	/*justify-content: center;*/
	width: 600px;
	height: 300px;
	overflow: auto;	
	.tree-item{
		flex: 1;
		width: 100%;
	}
}
</style>
