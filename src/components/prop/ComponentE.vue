<template>
  <div class="back-child">
      <h3>这是子组件</h3>
      <h4>{{name}}</h4>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import { ElMessage } from 'element-plus'
export default {
  setup () {
    const name = inject('father')
    // 被父组件调用的方法
    const childFunc = (data) => {
      ElMessage.success(data)
      console.log('被父组件调用的方法')
    }
    return {
      childFunc,
      name
    }
  }
}
</script>

<style lang="less" scoped>
.back-child {
  background: rgb(212, 58, 7);
  padding: 10px;
}
</style>
