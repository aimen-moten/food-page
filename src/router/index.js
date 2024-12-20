import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import AboutView from '@/components/AboutView.vue'
import RecipePage from '@/components/RecipePage.vue'
import CookingNotesPage from '@/components/CookingNotesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/recipe',
    name: 'RecipePage',
    component: RecipePage
  },
  {
    path: '/cooking-notes',
    name: 'CookingNotesPage',
    component: CookingNotesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
