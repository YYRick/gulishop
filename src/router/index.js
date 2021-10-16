import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//应用插件
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push;

/* 
  this.$router.push(
      //location
      '/search',
      //okCallback
      ()=>{},
      //errCallback
      ()=>{}
      )
*/
//解决编程式路由导航重复点击报错问题
VueRouter.prototype.push = function(location, okCallback, errCallback){
   //1.如果成功和失败都没传
   if(okCallback === undefined && errCallback === undefined){
       originPush.call(this, location).catch(()=>{}) 
   }else{
       originPush.call(this, location, okCallback, errCallback)
   }
}

//创建并暴露路由器
export default new VueRouter({
    mode: 'history',
    routes:[
        /* 重定向：设置默认起始页面为home */
        {
          path: '/',
          redirect: '/home'
        },
        {   
            name: 'home',
            path: '/home',
            component:Home
        },
        {   
            name: 'login',
            path: '/login',
            component:Login
        },
        {   
            name: 'register',
            path: '/register',
            component:Register
        },
        {   
            name: 'search',
            path: '/search',
            component:Search
        },

    ]
})