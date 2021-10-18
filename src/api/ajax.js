/* 
 该文件是对axios的二次封装，目的：让整个项目发送
 ajax请求时，通用的配置不用一遍一遍的重复编写
*/
import axios from 'axios'
//引入NProgress做进度条
import NProgress from 'nprogress'
//移入NProgress的样式
import 'nprogress/nprogress.css'

//创建一个axios实例对象
//以后整个项目都用这个实例发请求
const ajax = axios.create({
    //请求的基本路径
    baseURL: 'http://39.98.123.211',
    //超时时间
    timeout: 5000
});

//请求拦截器
ajax.interceptors.request.use((config)=>{
     //进度条开始走
     NProgress.start();
     //返回配置信息(必须要做)
    return config;
})

//响应拦截器
ajax.interceptors.response.use(
    response =>{
        //进度条停止
        NProgress.done();
        //把服务器返回的真正数据交出去
        return response.data
    },
    error =>{
        //统一提示错误
        alert(error.message)
        //进度条停止
        NProgress.done();
        //返回失败的Promise实例
        return Promise.reject(new Error(error.message))
    }
)

export default ajax