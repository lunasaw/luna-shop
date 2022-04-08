<template>
  <h4>我是ComponentB</h4>
  <ComponentA></ComponentA>

  <div id="date-picker" class="demo">
    <date-picker @change="showChange" data-status="activated"></date-picker>
  </div>
  <custom-layout id="custom-layout" @click="changeValue(this)"></custom-layout>

  <ComponentC></ComponentC>
</template>

<script>
import ComponentA from './ComponentA.vue'
import DatePicker from './DatePicker.vue'
import CustomLayout from './CustomLayout.vue'
import ComponentC from './ComponentC.vue'
export default {
  components: {
    ComponentA,
    DatePicker,
    CustomLayout,
    ComponentC
  },
  data () {
    return {

    }
  },
  created () {
    console.log(this.$attrs) // { onChange: () => {}  }
  },
  methods: {
    showChange (event) {
      console.log(event.target)
      console.log(event.target.value) // 将打印所选选项的值
    },
    changeValue (data) {
      console.log(data)
      console.log('changeValue')
    }
  }
}
</script>

<style>
</style>
