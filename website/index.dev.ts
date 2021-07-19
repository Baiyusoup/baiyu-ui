import { createApp } from 'vue'
import BaiyuUi from 'baiyu-ui'
import '../packages/theme-chalk/lib/index.css';
import App from './src/App.vue'

const app = createApp(App)
app.use(BaiyuUi)
app.mount('#app')
