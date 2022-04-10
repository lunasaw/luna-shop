import { createStore } from 'vuex'
import { ElMessage } from 'element-plus'

export default createStore({
  state: {
    name: '我是数据仓库 state里面的name'
  },
  getters: {
  },
  mutations: {
    // 同步设置state里面的name
    trigger (state, payload) {
      ElMessage.success(payload)
      console.log('我是mutations里面的trigger方法')
      state.name = payload
    }
  },
  actions: {
    // 异步设置state里面的name
    sub (store, payload) {
      console.log(store, payload)
      console.log(payload)
      ElMessage.success(payload)
      store.commit('trigger', payload)
    }
  },
  modules: {
  }
})
