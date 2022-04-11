import { ElMessage } from 'element-plus'
const Tips = class {
  constructor (msg, type = 'success', duration = 3000) {
    this.msg = msg
    this.type = type
    this.duration = duration
  }

  showToast () {
    ElMessage({
      message: this.msg,
      type: this.type,
      duration: this.duration
    })
  }
}
export default Tips
