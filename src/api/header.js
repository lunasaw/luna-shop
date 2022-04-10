import axios from 'axios'
import { Base64 } from 'js-base64'
import { ElMessageBox } from 'element-plus'
// 通用axios配置
const instance = axios.create({
  baseURL: 'https://element.thexxdd.cn/api',
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})
// 对token加密
function baseFun () {
  const token = localStorage.getItem('token')
  const base64 = Base64.encode(token + ':')
  return 'Basic ' + base64
}
// http request 拦截器 请求发出前 携带token
instance.interceptors.request.use(
  (config) => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (localStorage.getItem('token')) {
      config.headers.Authorization = baseFun()
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// http 拦截器 响应拦截
instance.interceptors.response.use(
  (res) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (res.status === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    if (err.response.status) {
      switch (err.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          ElMessageBox.alert('登录过期，请重新登录', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: (action) => {
              // 跳转到登录页面
              window.location.href = '/lunaShop'
            }
          }).then(() => {
            // 点击确定进入
            // 跳转到登录页面
            window.location.href = '/lunaShop'
          }).catch(() => {
            // 取消 或者关闭 进入
            // 跳转到登录页面
            window.location.href = '/lunaShop'
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          ElMessageBox.alert('登录过期，请重新登录', '提示', {
            confirmButtonText: '确定',
            type: 'error',
            callback: (action) => {
              // 清除token
              localStorage.removeItem('token')
              // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
              window.location.href = '/login'
            }
          })
          break
        // 404请求不存在
        case 404:
          ElMessageBox.alert('网络请求不存在', '提示', {
            confirmButtonText: '确定'
          })
          break
        // 其他错误，直接抛出错误提示
        default:
          ElMessageBox.alert(err.response.data.message, '提示', {
            confirmButtonText: '确定'
          })
      }
      return Promise.reject(err)
    }
  }
)
export default {
  instance
}
