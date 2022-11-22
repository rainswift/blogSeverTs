import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'


const app = createApp(App)

app.use(router).use(ElementPlus)
app.use(VueAxios, axios)
app.mount('#app')