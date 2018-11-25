var app = new Vue({
	el: '#dymain',
	data: {
		orderNumber: '',
		choosedTransactionType:'充值类型',
		transactionTypeLists:[
			{
				name:'充值类型',
				disabled:true,
				value:''
			},
			{
				name:'充值',
				value:1
			},
			{
				name:'消费',
				value:2
			}
		]

	},
	methods: {
        //点击查询订单
		chooseTransactionType:function(){
			//thi
			console.log(this.chooseTransactionType)
		}

	},
	mounted: function () {
		//this.getOrderList()
		/* this.orderNumber = localStorage.orderNumber//从localStroge中取订单号
		this.getOrderDetails() */

	},
	created:function(){

	}
})
