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

    <el-input v-model="user.age.num" type="text"  placeholder="用户年龄" ></el-input>
    <el-button  @click="(user.age.num) ++ ">年龄触发</el-button>

  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup () {
    const number = ref(0)
    const numberTwo = ref(1)
    const user = reactive({
      name: '',
      age: {
        num: 0
      }
    })
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
    // 监听整个reactive对象 只能监听到最新的结果，上一次的数据不会被监听到
    watch(() => user.age.num, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    return {
      user,
      number,
      numberTwo
    }
  }
}
</script>

<style>
</style>
