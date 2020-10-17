import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart (state, payload) {
      let productItem = null
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          productItem = item
        }
      }
      if (productItem) {
        productItem.count += 1
      } else {
        payload.count = 1
      }
    }
  }
})
//导出store对象，并在main.js中挂载到vue实例中
export default store