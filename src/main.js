import Vue from 'vue'
import App from './App'
import router from  './router'
import store from './store'

//关闭Vue生产提示
Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h=>h(App),
    router,
    store
})