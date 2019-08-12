import Vue from 'vue';
import App from './App.vue'
//初始化样式
import './assets/css/reset.css'
import './assets/css/border.css'
Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')