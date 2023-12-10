import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from './router'
import store from "./store";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css';

import { parseTime, resetForm, addDateRange } from '@/utils/ruoyi'

const app = createApp(App)

app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.addDateRange = addDateRange

app.use(router).use(store)
app.use(ElementPlus, {
  locale: zhCn,
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
