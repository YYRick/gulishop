<template>
  <div>
    <!-- 使用注册的局部组件 -->
      <!-- 头部 -->
      <Header/>
      <!-- 此处要展示的是一堆路由组件，后期得看路径，得配路由 -->
      <router-view></router-view>
      <!-- 底部 -->
      <Footer/>
  </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    export default {
      name: "App",
      //注册局部组件
      components:{
        Header,
        Footer
      }
    };
</script>

<style>
    
</style>