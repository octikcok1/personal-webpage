import { createApp } from 'vue'
import '../styles/style.css'
import '../styles/style_home.css'
import App from './App.vue'
import router from './router/routers'


createApp(App).use(router).mount('#app')
