module.exports = {
    lintOnSave: false,
    devServer: {
        //配置代理
        proxy: {
          '/api': {
            //代理服务器的基本路径(此时应该填写真正的后端接口)
            target: 'http://39.98.123.211',
            //允许跨域
            changeOrigin: true,
          },
        }
    }
}