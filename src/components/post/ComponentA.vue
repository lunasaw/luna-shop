<template>
  <h4>我是ComponentA</h4>
  <el-input v-model="value" placeholder="请输入内容"></el-input>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['inFocus', 'submit'],
  setup () {
    const value = ref('')
    return {
      value
    }
  }
}
</script>

<style>
</style>
