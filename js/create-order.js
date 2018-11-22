var app = new Vue({
  el: '#create_box',
  data: {
    nowIndex: 0,
    userAgeIndex:[1],
    userSexIndex:0,
    userRegionIndex:0,
    orderLink:'请输入您所要投放的链接',
    orderTypeName:'',
    userSex:'不限',
    userAge:'18-22岁',
    isShowCustomForm:true,
    isShowProvince:false,

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
    chooseProvice:function(){
    },
    chooseRegion:function(index,attr){
        this.chooseParmas(index,attr)
        if(index == 1 && this.proviceLists.length == 0){
            axios.get('https://easy-mock.com/mock/5bc6c497d50e8869d9d12d3e/example/getRegion')
            .then(function(res){
                this.proviceLists = res.data
                this.isShowProvince = !this.isShowProvince
                console.log(this.proviceLists.length)
            })
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
