import { createStore } from 'vuex';
import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId:'f5xvKdIPQdSrUtT6i3UiHYttRXO2'
    },
    getters:{
        authUser:state => {
            const user = state.users.find(user => user.id === state.authId)
            if (!user) return null
            return {
                ...user,
                //authUser.posts
                //authUser.getPosts()
                get posts(){
                    return state.posts.filter(post => post.userId === user.id)
                },
                get postsCount(){
                    return this.posts.length;
                },
                get threads(){
                    return state.threads.filter(thread => thread.userId === user.id)
                },
                get threadsCount(){
                    return this.threads.length;
                }
            }
        }
    },
    actions: {
        createPost({commit,state},post){
            post.id = 'gggg'+Math.random()
            post.userId = state.authId
            post.publishedAt = Math.floor(Date.now()/1000)
            commit('setPost',{ post })
            commit('appendPostToThread',{ postId:post.id,threadId:post.threadId })
        },
        updateUser({commit},user){
            commit('setUser',{user,userId:user.id})
        }
    },
    mutations: {
        setPost (state, { post }) {
          state.posts.push(post)
        },
        setUser (state, { user,userId }) {
            const userIndex = state.users.findIndex(user=>user.id ===userId)
            state.users[userIndex] = user
        },
        appendPostToThread (state, { postId, threadId }) {
          const thread = state.threads.find(thread => thread.id === threadId)
          thread.posts.push(postId)
        }
      }
})