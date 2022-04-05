import {
  ElButton, ElInput, ElForm, ElFormItem, ElMessage,
  ElContainer, ElHeader, ElMain, ElFooter, ElAside
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElInput)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElAside)

  // 挂在Vue原型
  app.config.globalProperties.$message = ElMessage
}
