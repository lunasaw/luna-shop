<template>
 <div class="back-f">
     <h3>我是ComponentF</h3>
     <h4>{{res}}</h4>
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
    return {
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
