import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '我是数据仓库 state里面的name'
  },
  getters: {
  },
  mutations: {
    // 同步设置state里面的name
  },
  actions: {
    // 异步设置state里面的name
  },
  modules: {
  }
})
