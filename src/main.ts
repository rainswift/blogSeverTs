import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'
import comHeader from '@/components/header.vue';
import comAside from '@/components/comAside.vue';
import { store } from '@/store'
import '@/components/comAside.vue';
import storageService from '@/service/storageService';


const app = createApp(App)

app.provide('global',{
    storageService
})

app.component('comHeader',comHeader)
app.component('comAside',comAside)
app.use(router).use(ElementPlus).use(store)
app.use(VueAxios, axios)
app.mount('#app')