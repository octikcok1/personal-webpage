import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import about from '../components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { name: '主頁', path: '/', component: home },
      { name: '關於', path: '/about', component: about }
    ],
})

export default router