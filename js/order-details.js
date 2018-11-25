var app = new Vue({
	el: '#dymain',
	data: {
		orderNumber: '',
		
	},
	methods: {
        //点击查询订单
        getOrderDetails: function () {
			//this.getToken()
			var token = getUsermessage().token
			//console.log(token)
			var _this = this
			axios.post('http://dou.fudayiliao.com/order/GetOrderList', {
					Token: token,
					OrderNumber:_this.orderNumber
				}, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})
				.then(function (res) {
					console.log(res)
					//_this.orderList = res.data.Data
				})
		},

	},
	mounted: function () {
		//this.getOrderList()
		this.orderNumber = localStorage.orderNumber//从localStroge中取订单号
		this.getOrderDetails()

	}
})
