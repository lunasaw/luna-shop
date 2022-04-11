<template v-slot:header>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  setup () {
    const items = reactive([
      {
        name: '张三',
        age: 18
      },
      {
        name: '李四',
        age: 20
      },
      {
        name: '王五',
        age: 22
      }
    ])
    return {
      ...toRefs(items)
    }
  }
}
</script>

<style>
</style>
