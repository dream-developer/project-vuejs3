import { createApp } from 'vue'
import App from './App.vue'
import MyPlugin from './MyPlugin'

createApp(App).use(MyPlugin, { target : 'back' } ).mount('#app')