<template>
  <div :style="{ fontSize: postFont + 'em' }">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text', 0.2)" v-show="showLarge">
      Enlarge text
    </button>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 值会通过任何类型验证)
    title: String,
    postFontSize: String,
    showButton: Boolean,
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组的默认值必须从一个工厂函数返回
      default () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator (value) {
        // 这个值必须与下列字符串中的其中一个相匹配
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组的默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
      default () {
        return 'Default function'
      }
    }
  },
  emits: ['enlargeText'],
  template: '<h3>{{ title }}</h3>',
  data () {
    return {
      postFont: this.postFontSize,
      showLarge: this.showButton
    }
  }
}
</script>

<style>
</style>
