import { createApp } from 'vue'
import App from './App.vue'
import { Antdv } from "./plugins"
import router from './router'
import "./themes"

createApp(App).use(router).use(Antdv).mount('#app')
