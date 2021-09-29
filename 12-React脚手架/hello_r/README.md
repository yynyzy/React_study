const createProxyMiddleware = require('http-proxy-middleware'); //可以把 createProxyMiddleware 写成proxy/devserver，名字无关

module.export = function (app) {
    app.use(
        createProxyMiddleware(
            '/api1', //只有以 /api 开头的请求才能转发给 后端服务器
            {
                target: 'http://localhost:5000', //转发目标
                changeOrigin: true,//可以不要,控制服务器接收到的请求头中的HOST字段的值
                pathRewrite: { '^/api1': '' }//路径重写，去掉前缀
            }),
        createProxyMiddleware(
            '/api2',
            {
                target: 'http://localhost:5001',
                changeOrigin: true,
                pathRewrite: { '^/api2': '' }
            })
    )
}