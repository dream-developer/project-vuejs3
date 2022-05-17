import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"  // 1

createApp(App).use(router).mount("#app")  // 2