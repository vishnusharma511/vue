<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{forum.name}}</h1>
        <p class="text-lead">{{forum.description}}</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a Thread</a>
    </div>
  </div>
  <div class="col-full">
    <ThreadList :threads="threads"/>
  </div>
</template>
<script>
import ThreadList from "@/components/ThreadList";
import sorceData from '@/data.json'
export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    },
  },
  computed: {
      forum(){
          return sorceData.forums.find(forum => forum.id === this.id)
      },
      threads(){
          return sorceData.threads.filter(thread => thread.forumId === this.id)
      } 

  }
};
</script>
<style scoped></style>
