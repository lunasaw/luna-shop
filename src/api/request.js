import instance from './header'
const doPost = (url, arg, success, fail) => {
  return new Promise((resolve, reject) => {
    console.log(url)
    instance
      .post(url, arg)
      .then((res) => {
        console.log(res)
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
const doGet = (url, arg, success, fail) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, arg)
      .then((res) => {
        console.log(res)
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
const request = {
  doPost,
  doGet
}
export default request
export { doPost, doGet, request }
