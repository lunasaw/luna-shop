<template>
  <div id="blog-posts-demo">
    <div :style="{ fontSize: postFont + 'em' }">
      <blog-post v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="enlargeText" :showButton="true"></blog-post>
    </div>
    <br>
    <el-button @click="printLog">打印日志</el-button>
  </div>
</template>

<script>
import BlogPost from '@/components/post/BlogPost.vue'
export default {
  components: { BlogPost },
  props: ['posts', 'postFontSize'],
  data () {
    return {
      postFont: this.postFontSize
    }
  },
  methods: {
    enlargeText: function (enlargeAmount) {
      this.postFont += enlargeAmount
    },
    printLog () {
      console.log(this.postFont)
    }
  }
}
</script>

<style>
</style>
