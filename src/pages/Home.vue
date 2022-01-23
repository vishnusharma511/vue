<template>
    <h1>Welcome to the forum</h1>
    <category-list :categories="categories"/>
</template>

<script>
import sorceData from '@/data.json'
// import ThreadList from '@/components/ThreadList'
// import ForumList from '@/components/ForumList'
import CategoryList from '@/components/CategoryList'
export default({
    components: {
        // ThreadList,
        // ForumList,
        CategoryList
    },
    data (){
        return {
            // threads:sorceData.threads,
            // forums : sorceData.forums,
            categories :sorceData.categories
        }
    }
})
</script>