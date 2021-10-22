<template>
   <div>
     <!-- 三级分类导航组件 -->
     <TypeNav/>
     <!-- 轮播图+右侧区域 -->
     <ListContainer/>
     <!-- 今日推荐 -->
     <Recommend/>
     <!-- 商品推荐 -->
     <Rank/>
     <!-- 喜欢 -->
     <Like/>
     <!-- 楼层 -->
     <Floor/>
     <Floor/>
     <!-- 商标 -->
     <Brand/>
   </div>
</template>

<script>
  import ListContainer from './ListContainer'
  import Recommend from './Recommend'
  import Rank from './Rank'
  import Like from './Like'
  import Floor from './Floor'
  import Brand from './Brand'

  export default {
    name: 'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style lang="less" scoped>
  
</style>