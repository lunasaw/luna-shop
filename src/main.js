import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import '@/assets/css/global.css'
import '@/assets/css/headtap.css'
import axios from 'axios'
import store from './store'
import urls from './api/api'
import request from './api/request'
// 弹窗
import tips from '@/config/message'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})

const app = createApp(App).use(store)
// 挂载全局
app.config.globalProperties.$tips = tips
app.config.globalProperties.$urls = urls
app.config.globalProperties.$request = request
app.config.globalProperties.$http = axios
app.config.productionTip = false
installElementPlus(app)
app.use(router).mount('#app')
