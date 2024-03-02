import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import API from "@/axios/axiosInstance"

import router from "./router/index.js"

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
// app.config.globalProperties.$axios = API
app.mount('#app')
