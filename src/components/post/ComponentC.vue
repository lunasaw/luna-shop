<template>
  <select>
    <option value="1">Yesterday</option>
    <option value="2">Today</option>
    <option value="3">Tomorrow</option>
  </select>

  <div style="width: 300px">
    <el-input v-model="number" type="textarea" label="监听数据" :autosize="{ minRows: 2, maxRows: 4 }"></el-input>
    <el-input v-model="numberTwo" type="textarea" label="监听数据" :autosize="{ minRows: 2, maxRows: 4 }"></el-input>

    <el-button @click="number ++ ">触发事件</el-button>

    <el-button @click="numberTwo +=2 ">触发事件2</el-button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  setup () {
    const number = ref(0)
    const numberTwo = ref(1)
    // 监听一个
    watch(number, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    watch(numberTwo, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    // 监听多个ref数据
    watch([number, numberTwo], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    return {
      number,
      numberTwo
    }
  }
}
</script>

<style>
</style>
