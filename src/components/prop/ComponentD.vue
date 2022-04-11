<template>
  <div class="back">
    <h3>这是父组件ComponentD</h3>
    <h4>{{father}}</h4>
    <el-button @click="changeFather">点击触发</el-button>
    <el-button @click="messageLog">点击触发</el-button>
    <el-button @click="printLog">点击触发</el-button>
    <br>
    <hr>
    <ComponentI>
      <ComponentJ></ComponentJ>
      <!-- 添加一个图标 -->
      <el-icon :size="15">
        <avatar />
      </el-icon>
      Add todo
    </ComponentI>

    <hr>
    <component-j>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </component-j>

    <div>
      <component-k>
        <template #luna="{ luna:quest }">
          <el-button type="primary">解构重命名: {{quest}}</el-button>
        </template>
        <template v-slot:default="slotProps">
          [slotProps = {{slotProps}}]

          <el-icon :size="15">
            <avatar />
          </el-icon>
          <!-- <span class="green">{{ item }}</span> -->
          <span class="green">{{ slotProps.item.name }}</span>
        </template>
      </component-k>
    </div>
  </div>
  <hr>
  <el-button @click="toChildH">点击触发给H传值</el-button>
  <hr>
  <ComponentE ref="val"></ComponentE>
</template>

<script>
import ComponentE from '@/components/prop/ComponentE.vue'
import ComponentI from '@/components/prop/ComponentI.vue'
import ComponentJ from '@/components/prop/ComponentJ.vue'
import ComponentK from '@/components/prop/ComponentK.vue'

import { ref, toRefs } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import { onMounted, getCurrentInstance, reactive } from 'vue'
export default {
  components: {
    ComponentK,
    ComponentJ,
    ComponentI,
    ComponentE
  },
  methods: {
    messageLog () {
      this.$message.success('提示')
    },
    toChildH () {
      this.todos[1] = '我是D传过来的值'
    }
  },
  provide: {
    user: 'luna brown',
    todos: ['Feed a cat', 'Buy tickets', 'Go shopping']
  },
  setup () {
    const root = ref(null)
    console.log(root)
    const currentInstance = getCurrentInstance()
    // 拿到父组件的数据
    const val = ref()
    const father = ref({
      name: '这是父组件的值'
    })
    provide('father', father)
    const changeFather = () => {
      val.value.childFunc('我是你爸爸')
    }
    let setStx = ''
    const printLog = function printLog () {
      setStx.messageLog()
    }
    onMounted(() => {
      setStx = currentInstance.ctx
      console.log(setStx)
    })

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
    const item = '这是父组件的值'
    return {
      item,
      ...toRefs(items),
      setStx,
      printLog,
      changeFather,
      father,
      val
    }
  }
}
</script>

<style lang="less">
.back {
  background: rgb(99, 109, 176);
  height: 100%;
  text-align: center;
}
</style>>
