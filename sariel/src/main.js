import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/allStyle.css'
import './style/singStyle.css'
import './JavaScript/singJs.js'
// import './jquery-3.4.1.min.js'

const app =  createApp(App)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia';
// import piniaPluginPersist from "pinia-plugin-persist"
const pinia = createPinia();
// pinia.use(piniaPluginPersist);
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app')
