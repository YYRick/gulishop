import Vue from 'vue'
import App from './App'
import router from  './router'
import store from './store'
import TypeNav from './components/TypeNav'

//关闭Vue生产提示
Vue.config.productionTip = false
//注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
    el: "#app",
    render: h=>h(App),
    router,
    store
})