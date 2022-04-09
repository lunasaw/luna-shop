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

    <el-input v-model="user.age.num" type="number" placeholder="用户年龄"></el-input>
    <el-button @click="(user.age.num) ++ ">年龄触发</el-button>
    <el-input :prepend='name' v-model="age.num" @input="this.$forceUpdate()" type="text" placeholder="小明"></el-input>

    <el-button @click="age.num ++ ">shallowReactive age.num++ </el-button>
    <el-button @click="changeName">shallowReactive changeName</el-button>

    <el-input v-model="mulitData.age.num" type="number" @input="this.$forceUpdate()" placeholder="小红"></el-input>
    <el-button @click="changeName">shallowRef</el-button>
    <el-button @click="mulitData.age.num ++ ">shallowRef</el-button>

  </div>
</template>

<script>
import { reactive, ref, watch, watchEffect, shallowReactive, shallowRef, toRefs } from 'vue'
export default {
  methods: {

  },
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
    }, { immediate: true })

    // 进入页面就执行一次
    const res = watchEffect(() => {
      console.log('watchEffect')
      console.log(user.age.num)
    })

    // 停止监听
    res()

    // 只处理第一层数据
    const onlyFirstData = shallowReactive({
      name: '小明+++',
      age: {
        num: 12
      }
    })
    const changeName = () => {
      onlyFirstData.name = '小红' + new Date()
      mulitData.value.name = '小强' + new Date()

      console.log(onlyFirstData.name)
      console.log(mulitData.value.name)
    }
    // 只处理基本数据类型
    const mulitData = shallowRef({
      name: '小强',
      age: {
        num: 0
      }
    })
    return {
      changeName,
      ...toRefs(onlyFirstData),
      mulitData,
      res,
      user,
      number,
      numberTwo
    }
  }
}
</script>

<style>
</style>
