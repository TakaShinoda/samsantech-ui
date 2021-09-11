import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import { worker } from './mock'

// 開発環境でのみmswを動作させる
if(process.env.NODE_ENV === 'development') {
    worker.start()
} 

createApp(App).mount('#app')
