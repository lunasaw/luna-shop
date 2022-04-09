<template>
  <div class="back-child">
    <h3>这是子组件ComponentE</h3>
    <h4>{{name}}</h4>
    <el-form label-width="120px">
      <el-form-item label="这里是提示头">
        <el-input v-model="fromFather" type="text"></el-input>
      </el-form-item>
    </el-form>
    <ComponentF></ComponentF>
    <ComponentG></ComponentG>
  </div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core'
import { ElMessage } from 'element-plus'
import ComponentF from '@/components/prop/ComponentF.vue'
import ComponentG from '@/components/prop/ComponentG.vue'
export default {
  components: {
    ComponentF,
    ComponentG
  },
  setup () {
    const name = inject('father')
    // 被父组件调用的方法
    const fromFather = ref('')
    const childFunc = (data) => {
      ElMessage.success(data)
      console.log('被父组件调用的方法')
      fromFather.value = data
    }
    return {
      fromFather,
      childFunc,
      name
    }
  }
}
</script>

<style lang="less" scoped>
.back-child {
  background: rgb(137, 158, 227);
  padding: 10px;
  margin: 1%;
  text-align: center;
  width: 90%;
}
</style>
