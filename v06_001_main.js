import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1
import App from './App.vue'

const pinia = createPinia() // 2
createApp(App).use(pinia).mount("#app") // 3