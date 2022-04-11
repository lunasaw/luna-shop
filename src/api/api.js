// 共用地址
const url = 'http://element.thexxdd.cn/api'

// 首页请求
// 为你优选
const getpreferurl = `${url}/forshop/getprefer`

// 附近商家
const getwxshopurl = `${url}/forshop/wxshop`

// 综合排序
const startingurl = `${url}/forshop/starting`

// 筛选 多选
const multipleurl = `${url}/forshop/multiple`

// 搜索页面的接口
const searchurl = `${url}/forshop/search`

// 下单页面请求
// 商家介绍(头部商品信息以及商品详情页的信息)
const shopurl = `${url}/forshop/shop`
// 菜品商品
const getdishesurl = `${url}/forshop/getdishes`
// 评论
const discussurl = `${url}/message/discuss`

// 登录
const wxloginurl = `${url}/wxuser/wxlogin`

// 虚拟支付接口
const fictpayurl = `${url}/wxpay/fictpay`

// 我的订单接口
const wxpayingurl = `${url}/wxpay/wxpaying`

// 评论接口
const commenturl = `${url}/message/comment`

const urls = class {
  static m () {
    // 注册接口
    const register = `${url}/register`
    // 登录接口
    const login = `${url}/login`

    return {
      register,
      login
    }
  }
}
export default urls
export {
  urls,
  getpreferurl,
  getwxshopurl,
  startingurl,
  multipleurl,
  searchurl,
  shopurl,
  getdishesurl,
  discussurl,
  wxloginurl,
  fictpayurl,
  wxpayingurl,
  commenturl
}
