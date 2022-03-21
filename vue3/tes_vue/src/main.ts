import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = "http://127.0.0.1:8050"

const app = createApp(App)

app.use(VueAxios, axios)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(ElementPlus)
app.mount('#app')

