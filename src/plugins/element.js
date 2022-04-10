import {
  ElButton, ElInput, ElForm, ElFormItem, ElMessage,
  ElContainer, ElHeader, ElMain, ElFooter, ElAside, ElMenu, ElSubmenu, ElMenuItem,
  ElMenuItemGroup, ElScrollbar, ElSelect, ElOption, ElOptionGroup, ElRadio, ElRadioGroup,
  ElIcon, ElCheckbox, ElSwitch, ElCheckboxGroup, ElCol, ElDatePicker, ElTimePicker
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
  app.use(ElMessage)
  app.use(ElCheckbox)
  app.use(ElSwitch)
  app.use(ElCheckboxGroup)
  app.use(ElCol)
  app.use(ElDatePicker)
  app.use(ElTimePicker)

  // 挂在Vue原型
  app.config.globalProperties.$message = ElMessage

  // 统一注册Icon图标
  for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName]
      app.component(iconName, item)
    }
  }
}
