import {
  ElButton, ElInput, ElForm, ElFormItem, ElMessage,
  ElContainer, ElHeader, ElMain, ElFooter, ElAside, ElMenu, ElSubmenu, ElMenuItem,
  ElMenuItemGroup, ElScrollbar, ElSelect, ElOption, ElOptionGroup, ElRadio, ElRadioGroup,
  ElIcon
} from 'element-plus'

import * as ElIconModules from '@element-plus/icons-vue'

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
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElMenuItemGroup)
  app.use(ElScrollbar)
  app.use(ElSelect)
  app.use(ElOption)
  app.use(ElOptionGroup)
  app.use(ElRadio)
  app.use(ElRadioGroup)
  app.use(ElIcon)
  app.use(ElIconModules)
  // 挂在Vue原型
  app.config.globalProperties.$message = ElMessage
}
