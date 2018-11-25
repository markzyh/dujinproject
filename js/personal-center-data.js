var app = new Vue({
	el: '#dymain',
	data: {
		douyinNameVal: '请输入您要投放的抖音昵称',
		douyinNumberVal:'请输入您要投放的抖音号',
		userCellphoneNumber:''
	},
	methods: {
		inputFocus: function(){
			if(this.douyinNameVal == '请输入您要投放的抖音昵称'){
				this.douyinNameVal = ''
			}
			if(this.douyinNumberVal == '请输入您要投放的抖音号'){
				this.douyinNumberVal = ''
			}
		},
		inputBlur:function(){
			if(this.douyinNameVal == ''){
				this.douyinNameVal = '请输入您要投放的抖音昵称'
			}
			if(this.douyinNumberVal == ''){
				this.douyinNumberVal = '请输入您要投放的抖音号'
			}
		}
		/* inputFocus: function(attr,attrVal){
			//console.log(attr+attrVal)
			if(this[attr] == attrVal){
				this[attr] = ''
			}
		},
		inputBlur:function(attr,attrVal){
			if(this[attr] == ''){
				this[attr] = attrVal
			}

		} */

	},
	mounted:function(){
		this.userCellphoneNumber = localStorage.cellphoneNumber
	}
})
