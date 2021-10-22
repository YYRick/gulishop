<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div class="nav-left" @mouseleave="handleMouseLeave">
        <h2 class="all" @mouseenter="isShowNav = true">全部商品分类</h2>
        <div class="sort" v-show="isShowNav">
          <div class="all-sort-list2" @click="toSearch">
            <div class="item bo" v-for="c1 in categoryList" :key="c1.categoryId">
              <h3>
                <!-- 一级导航链接 -->
                <a data-level="1" :data-id="c1.categoryId" :data-name="c1.categoryName">{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <!-- 二级导航 -->
                  <dl class="fore"  v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a data-level="2" :data-id="c2.categoryId" :data-name="c2.categoryName">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <!-- 三级导航 -->
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a data-level="3" :data-id="c3.categoryId" :data-name="c3.categoryName">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "TypeNav",
    data(){
       return{
         isShowNav: false
       }
    },
    computed:{
       //映射vuex中state里的home分类下的categoryList(分类数据)
       ...mapState('home',['categoryList'])
    },
    methods:{
      toSearch(event){
        //获取点击分类的信息
        const {level, id, name} = event.target.dataset;
        //如果点击的不是分类导航，终止逻辑
        if(!level) return
        const {query} = this.$route;
        //跳转search路由，并携带参数信息
        this.$router.push({
           name: 'search',
           query:{
              //分类id
              ['category'+ level + 'Id']: id,
              //分类名
              categoryName: name,
              keyword: query.keyword
           }
        })
      },
      //响应鼠标移出导航区
      handleMouseLeave(){
        if(!this.$route.meta.isRequiredNav){
           this.isShowNav = false
        }
      }
    },
    mounted(){
      //组件一挂载，就dispatch一个action，用于获取分类数据
      this.$store.dispatch('home/getCategoryList')
      //根据当前路径决定是否初始化显示导航下拉框
      if(this.$route.meta.isRequiredNav){
         this.isShowNav = true
      }
    }
  };
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;
              
              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                    a{
                      &:hover{
                         cursor: pointer;
                      }
                    }
                  }
                }
              }
            }
          }

          &:hover {
            h3{
              background-color: rgb(135, 206, 235);
              a{
                color: #fff !important;
                cursor: pointer;
              }
            }
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>