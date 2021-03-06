import Home from "@/pages/Home"
import ThreadShow from "@/pages/ThreadShow"
import NotFound from "@/pages/NotFound"
import Forum from "@/pages/Forum"
import Category from "@/pages/Category"
import Profile from "@/pages/Profile"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", name: "Home", component: Home },
  {
      path: "/me",
      name: "Profile",
      component: Profile,
      meta:{
          toTop :true,
          smoothScroll: true
      }
  },
  {
      path: "/me/edit",
      name: "ProfileEdit",
      component: Profile,
      props:{edit:true}
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: Forum,
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior(to){
      if(to.meta.toTop) scroll.top =0
      if(to.meta.smoothScroll) scroll.behavior = 'smooth'
      return scroll
    }
})