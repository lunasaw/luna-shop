<template>
  <div id="components-demo">
    <button-counter></button-counter>
    <br>
    <component-b></component-b>
    <div class="post-demo">
      <blog-post title="My journey with Vue" author="journey" :postFontSize='postFontSize' :showButton="true" @enlarge-text="enlargeText" ></blog-post>
      <blog-post title="Blogging with Vue" :postFontSize='2'></blog-post>
      <blog-post title="Why Vue is so fun" :showButton='showButton'></blog-post>
    </div>

    <blog-posts :posts="posts" :postFontSize='postFontSize'></blog-posts>
  </div>
</template>

<script>
import ButtonCounter from '@/components/post/ButtonCounter.vue'
import BlogPost from '@/components/post/BlogPost.vue'
import BlogPosts from '@/components/post/BlogPosts.vue'
import ComponentB from '@/components/post/ComponentB.vue'
export default {
  components: { ButtonCounter, BlogPost, BlogPosts, ComponentB },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
      showButton: false
    }
  },
  methods: {
    enlargeText: function (enlargeAmount) {
      console.log('传入的参数：' + enlargeAmount)
      this.postFontSize += enlargeAmount
      console.log('postFontSize参数：' + this.postFontSize)
    }
  }
}
</script>

<style>
.post-demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
