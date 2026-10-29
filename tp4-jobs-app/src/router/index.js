import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue'
import JobForm from '../views/JobForm.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/jobs/add', name: 'job-add', component: JobForm },
  { path: '/jobs/:id', name: 'job-details', component: JobDetails },
  { path: '/jobs/:id/edit', name: 'job-edit', component: JobForm },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

export default createRouter({ history: createWebHistory(), routes })
