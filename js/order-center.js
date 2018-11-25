var app = new Vue({
	el: '#dymain',
	data: {
		token: '',
        isLogin: false,
        isShowOrderDetails:false,//是否显示订单详情
        orderList: [],
        choosedOrderStatus:'全部',
		orderStatusLists:[
			{
				name:'全部',
				value:0
			},
			{
				name:'已完成',
				value:1
			},
			{
				name:'执行中',
				value:2
			},
			{
				name:'待支付',
				value:3
			},
			{
				name:'待审核',
				value:4
			}
		]
	},
	methods: {
        //选择订单状态,根据状态查询
        chooseOrderStatus:function(){
            console.log(this.choosedOrderStatus)
            //console.log(this.choosedOrderStatus)
        },
        //点击查询订单
        searchOrderNumber:function(orderNumber){
            //把orderNumber写入localStorage
            localStorage.orderNumber = orderNumber
            //alert(localStorage.orderNumber)
        },
		getOrderList: function () {
			//this.getToken()
			var token = getUsermessage().token
			//console.log(token)
			var _this = this
			axios.post('http://dou.fudayiliao.com/order/GetOrderList', {
					Token: token
				}, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})
				.then(function (res) {
					console.log(res)
					_this.orderList = res.data.Data
				})
		},
		timeString: function (string) {
			var aa = new Date(parseInt(string.substr(6, 19)))
			var timeYear = new Date(parseInt(string.substr(6, 19))).getFullYear();
			var timeMouth = new Date(parseInt(string.substr(6, 19))).getMonth()+1;
			var timeDate = new Date(parseInt(string.substr(6, 19))).getDate();
			var timeHours = new Date(parseInt(string.substr(6, 19))).getHours();
			var timeMinutes = new Date(parseInt(string.substr(6, 19))).getMinutes();
			var timeSeconds = new Date(parseInt(string.substr(6, 19))).getSeconds();
			var time = this.checkTen(timeYear) + "-" + this.checkTen(timeMouth) + "-" + this.checkTen(timeDate) + "   " + this.checkTen(timeHours) + ":" + this.checkTen(timeMinutes) + ":" + this.checkTen(timeSeconds)
			return time
		},
		checkTen: function (num) {
			if (num < 10) {
				num = "0" + num
			}
			return num
		}

	},
	mounted: function () {
		this.getOrderList()
	}
})
