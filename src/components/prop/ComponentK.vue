<template>
  <slot :luna="luna" name="luna"></slot>
  <ul>
    <li v-for="( item, index ) in items" v-bind:key="index">
      <!-- 添加一个图标 -->
      <!-- <el-icon :size="15">
        <avatar />
      </el-icon>
      <span class="green">{{ item.name }}</span> -->
      <slot :item="item" :luna="luna" name="default"></slot>
    </li>
  </ul>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'

export default {
  setup () {
    const items = reactive([
      {
        name: '张三',
        age: 99
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
    const luna = ref('luna')
    return {
      items,
      luna,
      ...toRefs(items)
    }
  }
}
</script>

<style>
</style>
