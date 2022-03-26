import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/404.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:"/jobs",
    name: 'jobs',
    component:Jobs

  },
  {
    path:"/jobdetail/:id",
    name: 'jobdetail',
    component:JobDetail,
    props:true
  }, 
  {
    path:'/all-jobs',
    redirect:"/jobs"
  },
  {
    path:"/:catchAll(.*)",
    component:NotFound
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
