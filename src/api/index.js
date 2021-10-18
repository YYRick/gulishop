/* 
 该文件是对整个项目中所有的ajax请求进行，统一管理(便于后期维护)
 该文件中会编写一个一个的函数，项目有几个接口，那么就写几个函数
 优势：后期对接口的变更更好管理
*/

import ajax from './ajax'

/* export function reqCategoryList(){
  return ajax.get('/api/product/getBaseCategoryList')
} */

//请求三级分类列表
export const reqCategoryList = () => ajax.get('/product/getBaseCategoryList')