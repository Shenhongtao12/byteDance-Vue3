import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from './router'
import store from "./store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { parseTime, resetForm, addDateRange } from '@/utils/ruoyi'


import Loading from "./components/Loading/index.js";
const app = createApp(App)

app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.addDateRange = addDateRange



app.use(router).use(store)
app.use(Loading)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
