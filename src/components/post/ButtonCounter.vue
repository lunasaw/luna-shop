<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ButtonCounter',
  setup () {
    const count = ref(0)
    const addNum = () => {
      count.value++
    }
    return {
      count,
      addNum
    }
  }
}
</script>

<style>
</style>
