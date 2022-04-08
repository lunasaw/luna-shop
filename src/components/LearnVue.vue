<template>
  <div>{{ res }}</div>
  <div v-for="(item, index ) in arr" :key="index">
    <h4>{{item}}</h4>
  </div>
  <el-button @click="btn2">打印</el-button>
  <hr>
  <h3>ref 都能用 必须 .value</h3>
  <h4>姓名:: {{name}}</h4>
  <h4>年龄:: {{age}}</h4>
  <h4>公司:: {{company}}</h4>
  <h4>产品:: {{obj.product}}</h4>
  <el-button @click="change">改变数据</el-button>
  <h3 v-for="(user, index) in users" :key="index">{{user.name}} :: {{user.age}}</h3>
  <hr>
  <h3>reactive 只能用复杂类型数据 不用.value 直接用</h3>
  <h4>用户:: {{user.name}}</h4>
  <h4>公司:: {{user.company}}</h4>
  <h4>朋友姓名:: {{user.girlfriend.name}}</h4>
  <h4>朋友年龄:: {{user.girlfriend.age}}</h4>
  <el-button @click="changeReactive">改变数据</el-button>
  <hr>
  <h3>toRef</h3>
  <h4>姓名:: {{object.name}}</h4>
  <h4>年龄:: {{object.age}}</h4>
  <h4>数量测试::object {{object}}</h4>
  <h4>数量测试::refObject {{refObject}}</h4>
  <h4>数量测试::toRefObjectNum {{toRefObjectNum}}</h4>
  <h4>数量测试::refNum {{refNum}}</h4>

  <el-button @click="changeToRef">改变数据</el-button>
  <el-button @click="addNum">改变数据测试</el-button>
  <hr>
  <h3>toRefs</h3>
  <h4>姓名:: {{toRefsObject.name.value}}</h4>
  <h4>年龄:: {{toRefsObject.age.value}}</h4>

  <h4>姓名:: {{name}}</h4>
  <h4>年龄:: {{age}}</h4>
  <h4>生日:: {{birthday}}</h4>

  <br>
  <el-form>
    <el-form-item label="小明">
      <el-input type="number" v-model="userAgeOne" @blur="value=Number(userAgeOne)" placeholder="输入年龄" prefix-icon='el-icon-user'></el-input>
    </el-form-item>
    <el-form-item label="小红">
      <el-input type="number" placeholder="输入年龄" @blur="value=Number(userAgeTwo)" v-model="userAgeTwo" prefix-icon='el-icon-user'></el-input>
    </el-form-item>
    <el-form-item label="小红+小明">
      <el-input type="number" placeholder="年龄求和" v-model="userAgeSum" prefix-icon='el-icon-user'></el-input>
    </el-form-item>
  </el-form>

  <br>
  <input type="number" v-model="numberOne">
  <input type="number" v-model="numberTwo">
  <input type="number" v-model="numberThree">
</template>

<script>
import { reactive, ref, toRef, toRefs, computed } from 'vue'
export default {
  setup () {
    const userAge = {
      userAgeOne: '',
      userAgeTwo: ''
    }
    const userAgeRes = reactive(userAge)
    const userAgeSum = computed(() => {
      return Number(userAgeRes.userAgeOne) + userAgeRes.userAgeTwo
    })

    const numberOne = ref(0)
    const numberTwo = ref(1)
    const numberThree = computed(() => {
      return numberOne.value + numberTwo.value
    })

    const res = 123
    const arr = [1, 2, 3]
    function btn () {
      console.log('btn')
    }
    const btn2 = () => {
      console.log('btn')
    }
    const change = () => {
      name.value = '李四'
      age.value = 20
      company.value = '腾讯'
      obj.value.product = '微信'
      users.value[0].name = '张三001'
    }

    const name = ref('张三')
    const age = ref(18)
    const company = ref('阿里')
    const obj = ref({
      product: '淘宝'
    })
    const users = ref([{
      name: '张三',
      age: 18
    }, {
      name: '李四',
      age: 20
    }])

    const user = reactive({
      name: '张三',
      age: 18,
      company: '阿里',
      girlfriend: {
        name: '李四',
        age: 20
      }
    })

    const changeReactive = () => {
      user.name = '李四'
      user.age = 20
      user.company = '腾讯'
      user.girlfriend.name = '王冰冰'
    }

    const object = {
      name: '张三',
      age: 18,
      num: 0,
      birthday: '1990-01-01'
    }
    const resToRef = toRef(object, 'name')

    const changeToRef = () => {
      resToRef.value = '李四'
    }

    const refObject = ref(object)
    const num = 0
    const refNum = ref(num)
    const toRefObjectNum = toRef(object, 'num')
    const reactiveObject = reactive(object)
    const toRefsObject = toRefs(reactiveObject)
    const addNum = () => {
      console.log('object.num:' + object.num)
      console.log('num:' + num)
      console.log('refObject.value.num:' + ++refObject.value.num)
      console.log('toRefObjectNum.value:' + ++toRefObjectNum.value)
      console.log('refNum.value:' + ++refNum.value)
    }

    return {
      numberOne,
      numberTwo,
      numberThree,
      userAgeSum,
      ...toRefs(object),
      ...toRefs(userAgeRes),
      toRefsObject,
      refNum,
      refObject,
      toRefObjectNum,
      addNum,
      object,
      changeToRef,
      changeReactive,
      res,
      arr,
      btn,
      btn2,
      change,
      name,
      age,
      company,
      obj,
      users,
      user
    }
  }
}
</script>

<style>
</style>
