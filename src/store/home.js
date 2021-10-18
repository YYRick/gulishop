import { reqCategoryList } from "@/api"

const actions = {
 //获取分类类别的action
  async getCategoryList({commit}){
    //发送请求获取分类列表
    const result = await reqCategoryList()
    //若业务逻辑成功
    if(result.code === 200){
      commit('SAVE_CATEGORY_LIST', result.data)
    }else{
      alert(result.message)
    }
  }
}
const mutations = {
  SAVE_CATEGORY_LIST(state, list){
     state.categoryList = list
  }
}
const state = {
  //三级分类列表
  categoryList:[]
}
const getters = {}

export default{
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}