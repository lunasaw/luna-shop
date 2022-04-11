<template>
  <div class="back">
    <h3>这是父组件ComponentD</h3>
    <h4>{{father}}</h4>
    <el-button @click="changeFather">点击触发</el-button>
    <el-button @click="messageLog">点击触发</el-button>
    <el-button @click="printLog">点击触发</el-button>
    <br>
    <ComponentI></ComponentI>
    <ComponentE ref="val"></ComponentE>
  </div>
</template>

<script>
import ComponentE from '@/components/prop/ComponentE.vue'
import ComponentI from '@/components/prop/ComponentI.vue'

import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import { onMounted, getCurrentInstance } from 'vue'
export default {
  components: {
    ComponentI,
    ComponentE
  },
  methods: {
    messageLog () {
      this.$message.success('提示')
    }
  },
  setup () {
    const root = ref(null)
    console.log(root)
    const currentInstance = getCurrentInstance()
    // 拿到父组件的数据
    const val = ref()
    const father = ref({
      name: '这是父组件的值'
    })
    provide('father', father)
    const changeFather = () => {
      val.value.childFunc('我是你爸爸')
    }
    let setStx = ''
    const printLog = function printLog () {
      setStx.messageLog()
    }
    onMounted(() => {
      setStx = currentInstance.ctx
      console.log(setStx)
    })

    return {
      setStx,
      printLog,
      changeFather,
      father,
      val
    }
  }
}
</script>

<style lang="less">
.back {
  background: rgb(99, 109, 176);
  height: 100%;
  text-align: center;
}
</style>>
