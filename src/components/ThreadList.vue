<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Thread</h2>
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p>
                        <!-- <router-link :to="`/thread/${thread.id}`">{{thread.title}}</router-link> -->
                            <!-- or -->
                        <router-link :to="{name:'ThreadShow',params:{id:thread.id}}">{{thread.title}}</router-link>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="#">{{userById(thread.userId).name}}</a>,<app-date :timestamp="thread.publishedAt"/>.
                    </p>
                </div>
                <div class="activity">
                    <p class="replies-count">{{thread.posts.length}}</p>
                    <img class="avatar-medium" :src="userById(thread.userId).avatar">
                    <div>
                        <p class="text-xsmal">
                            <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded"> <app-date :timestamp="thread.publishedAt"/></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sorceData from '@/data.json'
export default({
    props: {
        threads: {
            type: Array,
            required:true
        }
    },
    data() {
        return {
            posts : sorceData.posts,
            users : sorceData.users
        }
    },
    methods: {
        postById(postId){
            return this.posts.find(p =>p.id === postId)
        },
        userById(userId){
            return this.users.find(p =>p.id === userId)
        }
    }
})
</script>

<style scoped>

</style>