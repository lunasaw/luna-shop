<template>
  <div class="child-life">
    <h4>{{title}}</h4>
    <el-button @click="changeLife">点击触发更新</el-button>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUpdated, ref } from '@vue/runtime-core'
export default {
  setup () {
    console.log('setup 进入页面执行')
    onBeforeMount(() => {
      console.log('onBeforeMount 挂载之前被调用')
    })
    onMounted(() => {
      console.log('onMounted 挂载时被调用')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate 更新之前被调用')
    })
    onUpdated(() => {
      console.log('onUpdated 更新时被调用')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount 卸载之前被调用')
    })
    onUpdated(() => {
      console.log('onUpdated 卸载时被调用')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured 错误捕获')
    })
    const title = ref('生命周期函数')
    const changeLife = () => {
      title.value = '更新生命周期函数'
    }
    return {
      title,
      changeLife
    }
  },
  created () {
    console.log('created 创建完成输出')
    ElMessage.success('created 创建完成输出')
  },
  mounted () {
    console.log('mounted 挂载完成输出')
    ElMessage.success('mounted 挂载完成输出')
  }
}
</script>

<style lang="less" scoped>
.child-life {
  background: rgb(94, 96, 145);
  padding: 10px;
  text-align: center;
  width: auto;
}
</style>
