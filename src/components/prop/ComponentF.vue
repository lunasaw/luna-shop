<template>
  <div class="back-f">
    <h3>我是ComponentF</h3>
    <h4>{{res}}</h4>
    <el-button @click="vuexBtnAsync">点击异步触发vuex</el-button>
    <el-button @click="vuexBtnSync">点击同步触发vuex</el-button>

  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    // 拿到Vuex仓库的数据
    const store = useStore()
    const res = computed(() => {
      console.log(store.state.name)
      return store.state.name
    })
    // 点击触发修改数据
    const vuexBtnAsync = () => {
      store.dispatch('sub', '我是子组件,异步方法')
    }
    const vuexBtnSync = () => {
      store.commit('trigger', '我是子组件,同步方法')
    }
    return {
      vuexBtnAsync,
      vuexBtnSync,
      res
    }
  }
}
</script>

<style lang="less" scoped>
.back-f {
  background: rgb(137, 141, 222);
  padding: 10px;
  // 上右下坐 顺时针
  margin: 2% 2% 3% 2%;
  text-align: center;
  width: auto;
}
</style>
