import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carPanelData: [],
    maxOff:false,
    carShow:false,
    //地址数据
    receiveInfo : [{
      "name": "刘某某",
      "phone": "18080666666",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "浙江省",
      "cityId": 110100,
      "city": "杭州市",
      "countyId": 110106,
      "county": "西湖区",
      "add": "留下街道留和路318号",
      "default": true
    },{
      "name": "涂某某",
      "phone": "13811111111",
      "areaCode": "010",
      "landLine": "64627856",
      "provinceId": 110000,
      "province": "浙江省",
      "cityId": 110100,
      "city": "温州市",
      "countyId": 110106,
      "county": "鹿城区",
      "add": "小南路五洲大厦",
      "default": false
    }],
    orderData:[]
  },
  
  getters: {
    totalCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        count += goods.count;
      })
      return count
    },
    totalPrice (state) {
      let total = 0
      state.carPanelData.forEach((goods) => {
        total += goods.price * goods.count
      })
      return total
    },
    checkedCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        if(goods.checked)
        count += goods.count;
      })
      return count
    },
    checkedPrice (state) {
      let total = 0
      state.carPanelData.forEach((goods) => {
        if(goods.checked)
        total += goods.price * goods.count
      })
      return total
    },
    checkedGoods (state) {
      let checkedGoods = []
      state.carPanelData.forEach((goods) => {
        if(goods.checked)
        checkedGoods.push(goods);
      })
      return checkedGoods
    },
    allChecked (state) {
      let allChecked = true
      state.carPanelData.forEach((goods) => {
        if(!goods.checked){
          allChecked = false
          return
        }
      })
      return allChecked
    },
    maxCount (state) {
      let maxOff = false
      state.carPanelData.forEach((goods) => {
        if(goods.count>goods.limit_num){
          goods.count--
        }
      })
      return maxOff
    }
  },
  mutations: {
  	addCarPanelData (state,data) {
  	  let bOff = true//判断购物车是否添加过
  	  state.carPanelData.forEach((goods) => {
  	    if(goods.sku_id === data.info.sku_id){
  	      goods.count +=data.count
          if(goods.count>goods.limit_num){
            goods.count -=data.count
            state.maxOff = true
            bOff = false
            return
          }
            bOff = false
            state.carShow = true
            return
        }
  	  })
  	  if(bOff){
        state.carShow = true
  	    let goodsData = data.info
  	    Vue.set(goodsData,'count',data.count)
        Vue.set(goodsData,'checked',true)
  	    state.carPanelData.push(goodsData)
  	  }
      console.log(state.carPanelData)
  	},
     alertPrompt (state) {
      state.maxOff = true
    },
    closePrompt (state) {
      state.maxOff = false
    },
    showCar (state) {
      state.carShow = true
    },
    hideCar (state) {
      state.carShow = false
    },
    plusCarPanelData (state,id) {
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          if(goods.count === goods.limit_num) return
          goods.count ++
          return
        }
      })
    },
    subCarPanelData (state,id) {
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          if(goods.count === 1) return
          goods.count --
          return
        }
      })
    },
    delCarPanelData (state,id) {
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          state.carPanelData.splice(index,1)
          return
        }
      })
    },
    checkGoods (state,id) {
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          goods.checked = !goods.checked
        }
      })
    },
    allGoodsCheck (state,checked) {
      if(checked){
        state.carPanelData.forEach((goods,index) => {
          goods.checked = false
        })
      }else{
        state.carPanelData.forEach((goods,index) => {
          goods.checked = true
        })
      }
    },
    delCheckGoods (state) {
      let i = state.carPanelData.length
      while(i--){
        if(state.carPanelData[i].checked){
          state.carPanelData.splice(i,1)
        }
      }
    },  
    //添加收货人信息
    submitInfo(state,data){
      if(data.default){
        state.receiveInfo.forEach((receive)=>{
          receive.default=false
        })
        state.receiveInfo.push(data)
      }
    },
    submitOrder(state,data){
      state.orderData.unshift(data)
      let i=state.carPanelData.length
      while(i--){
        if(state.carPanelData[i].checked){
          state.carPanelData.splice(i,1)
        }
      }
    },
    //支付成功
    payNow(state,id){
      state.orderData.forEach((order)=>{
          if (order.orderId===id) {
            order.isPay=true
            return
          }
      })
    },
    //现在购买
    checkOut (state,data) {
      state.provisionalOrder = data
    },
    checkDefault (state,data) {
      state.receiveInfo.forEach((receive,index) => {
        if (receive==data) {
          receive.default = true
//        state.receiveInfo.unshift(state.receiveInfo.splice(index,1)[0])
        } else {
          receive.default = false
        }
      })
    },
  }
})

export default store
