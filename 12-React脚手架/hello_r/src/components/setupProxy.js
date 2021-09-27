const createProxyMiddleware = require('http-proxy-middleware');

module.export = function (app) {
    app.use(
        '/api', //只有以 /api 开头的请求才能转发给 后端服务器
        createProxyMiddleware({
            target: 'http://localhost:5000', //转发目标
            changeOrigin: true,
        })
    )
}