<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"/>
    <post-editor @save="addPost"/>
  </div>
  <div v-else class="col-full text-center">
    <h1>This Threads does not Exist</h1>
    <router-link :to="{name:'Home'}">Read Some threads</router-link>
  </div>
</template>

<script>
// import sourceData from '@/data.json'
import PostList from '@/components/PostList'
import PostEditor from '../components/PostEditor.vue'
export default {
  name : "ThreadShow",
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    threads(){
      return this.$store.state.threads;
    },
    posts(){
      return this.$store.state.posts;
    },
    thread () {
      return this.threads.find(thread => thread.id === this.id) // also available under this.$route.params.id
    },
    threadPosts(){
      return this.posts.filter(post => post.threadId === this.id )
    }
  },
  methods: {
    addPost(eventData){
      const post ={
        ...eventData.post,
        threadId : this.id
      }
      this.$store.dispatch('createPost',post)
    }
  }
}
</script>