<template>
  <div class="back-child">
    <h3>这是子组件ComponentE</h3>
    <h4>{{name}}</h4>
    <el-form class="el-from">
      <el-form-item label="这里是提示头" label-width="120px">
        <el-input v-model="fromFather" type="text" :style="{
          boxShadow: --el-box-shadow-dark,
        }"></el-input>
        <el-input v-model="res" type="text"></el-input>
      </el-form-item>
    </el-form>
    <ComponentF></ComponentF>
    <ComponentH></ComponentH>
    <ComponentG></ComponentG>

  </div>
</template>

<script>
import { inject, ref, computed } from '@vue/runtime-core'
import { ElMessage } from 'element-plus'
import ComponentF from '@/components/prop/ComponentF.vue'
import ComponentG from '@/components/prop/ComponentG.vue'
import ComponentH from '@/components/prop/ComponentH.vue'
import { useStore } from 'vuex'
export default {
  components: {
    ComponentF,
    ComponentG,
    ComponentH
  },
  setup () {
    // 拿到Vuex仓库的数据
    const store = useStore()
    const res = computed(() => {
      console.log(store.state.name)
      return store.state.name
    })
    const name = inject('father')
    // 被父组件调用的方法
    const fromFather = ref('')
    const childFunc = (data) => {
      ElMessage.success(data)
      console.log('被父组件调用的方法')
      fromFather.value = data
    }
    return {
      res,
      fromFather,
      childFunc,
      name
    }
  }
}
</script>

<style lang="less" scoped>
.back-child {
  background: rgb(220, 225, 239);
  text-align: center;
  margin: auto;
  width: 90%;
  .el-from {
    margin: 10px;
  }
}
</style>
