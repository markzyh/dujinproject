
var app = new Vue({
  el: '#create_box',
  data: {
    nowIndex: 0,
    userAgeIndex:[1],
    userSexIndex:0,
    userRegionIndex:0,
    clickProviceIndex:0,//控制显示省
    isShowcitiesIndex:0,//控制显示城市
    //chooseProviceArray:[0],
    chooseProviceIndex:0,//单选择省
    choosecitiesArray:[0],//多选择市
    orderLink:'请输入您所要投放的链接',
    orderTypeName:'',
    userSex:'不限',
    userAge:'18-22岁',
    choosedValue:'北京市-北京市',//已经选择
    isShowCustomForm:true,
    isShowProvince:false,
    isShowProvinceTrueIndex:false,
    orderTypeLists:[
        {
            name:'系统智能投放',
            orderTypeName:'autoType',
            isChecked:true,
            isCustom:false
        },
        {
            name:'自定义定向投放',
            orderTypeName:'customType',
            isChecked:false,
            isCustom:false
        }
    ],
    sexLists:['不限','男','女'],
    ageLists:['不限','18-22岁','20-40岁','40岁+'],
    regionLists:['全国','省市','县区','商圈','附近'],
    proviceLists:[]
  },
  methods:{
    confirmProvice:function(){
        this.isShowProvince = false
        console.log(this.isShowProvince)
    },
    getChoosedValue:function(){
        //console.log(this.chooseProviceIndex+'index')
        var choosedProvice = this.proviceLists[this.chooseProviceIndex].name//省
        var choosedCitiesArray = this.choosecitiesArray;//多选择市数组
        //console.log(choosedCitiesArray+"市区数组")
        var choosedCitiesName = []
        for(var i = 0;i < choosedCitiesArray.length;i++){
            var item = choosedCitiesArray[i]
            //console.log(item+"遍历市区数组值")
            var thisCities = this.proviceLists[this.chooseProviceIndex].cities
            //console.log(thisCities.length+'省级下市区的长度')
            choosedCitiesName.push(thisCities[item].name)
            //console.log(thisCities[item].name+'市区的名字'+"item"+item)
        }
        //console.log(choosedCitiesName+'----------市区名称的数组')
        var choosedCitiesString = choosedCitiesName.join('-')
        //console.log(choosedCitiesString)
        this.choosedValue = choosedProvice+"-"+choosedCitiesString
    },
    /* getChoosedValue:function(){
        //console.log(this.choosecitiesArray+'haha')
        var choosedProvice = this.proviceLists[this.chooseProviceIndex].name//省
        var choosedCitiesArray = this.choosecitiesArray;//多选择市数组
        var choosedCitiesName = []
        //if()
        //console.log(choosedCitiesName)
        for(var i = 0;i < choosedCitiesArray.length;i++){
            //console.log(choosedCitiesArray.length)//1
            //choosedCitiesName.push(this.proviceLists[i].cities.name)
            var _this = this.proviceLists[i].cities
            for(var j = 0;j <_this.length;j++){
                console.log(_this)
                console.log(_this[j].name)
            }
            
        }
        //console.log(choosedCitiesName)
        this.choosedValue = choosedProvice
    }, */
    chooseAll:function(index,attr){
        //this.getChoosedValue()
       var _this = this.proviceLists[index]
       //console.log(_this[attr].length)
       this.choosecitiesArray = []
       for(var i = 0 ;i < _this[attr].length;i++){
        this.choosecitiesArray.push(i)
       }
       this.getChoosedValue()
       console.log(this.choosecitiesArray)
    },
    chooseCities:function(index,length){ 
        if(this.choosecitiesArray.indexOf(index) == -1){
            this.choosecitiesArray.push(index)
        }else{
            //找到点击的index在数组中的位置
            for(var i=0;i<this.choosecitiesArray.length;i++){
                if(this.choosecitiesArray[i] == index){//i为点击的数字在数组中的位置
                    this.choosecitiesArray.splice(i,1)
                }
            }
        }
        this.getChoosedValue()
    },
/*     multiChoose:function(index,array){
        if(this.chooseProviceArray.indexOf(index) === -1){
            this.chooseProviceArray.push(index)
        }else{
            //找到点击的index在数组中的位置
            for(var i=0;i<this.chooseProviceArray.length;i++){
                if(this.chooseProviceArray[i] == index){//i为点击的数字在数组中的位置
                    this.chooseProviceArray.splice(i,1)
                }
            }
        }
    }, */
    /* chooseProvice:function(index){
        this.isShowcitiesIndex = index
        if(this.chooseProviceArray.indexOf(index) == -1){
            this.chooseProviceArray.push(index)
        }else{
            //找到点击的index在数组中的位置
            for(var i=0;i<this.chooseProviceArray.length;i++){
                if(this.chooseProviceArray[i] == index){//i为点击的数字在数组中的位置
                    this.chooseProviceArray.splice(i,1)
                }
            }
        }

    }, */
    chooseProvice:function(index){
        this.isShowcitiesIndex = index
        this.chooseProviceIndex = index
        this.getChoosedValue(index)
    },
    chooseRegion:function(index,attr){
        this.chooseParmas(index,attr)
        //console.log(this.proviceLists.length)
        var _this = this //es5
        if(index == 1 && this.proviceLists.length == 0){
            //console.log(_this)//指向vue
            axios.get('https://easy-mock.com/mock/5bc6c497d50e8869d9d12d3e/example/getRegion')
            .then(function(res){//需要使用箭头函数
                console.log(_this)
                _this.proviceLists = res.data
                _this.isShowProvince = true//!_this.isShowProvince
                console.log(_this.proviceLists)
            })
        }else if(index == 1){
            this.isShowProvince = true//!this.isShowProvince
        }else{
            this.isShowProvince = false
        }  
    },
    chooseAge:function(index){
        if(this.userAgeIndex.indexOf(index) === -1){
            this.userAgeIndex.push(index)
        }else{
            //找到点击的index在数组中的位置
            for(var i=0;i<this.userAgeIndex.length;i++){
                if(this.userAgeIndex[i] == index){//i为点击的数字在数组中的位置
                    this.userAgeIndex.splice(i,1)
                }
            }
        }
    },
    chooseParmas:function(index,attr){
        this[attr] = index
    },
    chooseOrderType:function(index){
        this.nowIndex = index
        this.orderTypeName = this.orderTypeLists[index].orderTypeName
        console.log(this.orderTypeName)
    },  
    inputFocus: function(){
        if(this.orderLink == '请输入您所要投放的链接'){
            this.orderLink = ''
        }
    },
    inputBlur:function(){
        if(this.orderLink == ''){
            this.orderLink = '请输入您所要投放的链接'
        }
    }
  },
})
