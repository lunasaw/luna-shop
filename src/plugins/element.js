import { ElButton, ElInput, ElForm, ElFormItem, ElMessage } from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElInput)
  app.use(ElForm)
  app.use(ElFormItem)
  // 挂在Vue原型
  app.config.globalProperties.$message = ElMessage
}
