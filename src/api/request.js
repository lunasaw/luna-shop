import instance from './header'
const request = class {
  constructor (url, arg) {
    this.url = url
    this.arg = arg
  }

  // post
  static doPost () {
    return new Promise((resolve, reject) => {
      instance
        .post(this.url, this.arg)
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

  // get
  static doGet () {
    return new Promise((resolve, reject) => {
      instance
        .get(this.url, this.arg)
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
}

export default {
  request
}
