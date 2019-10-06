const path = require('path')

module.exports = {
    devServer:{ // 开发服务器配置
        port: 3000,
        progress: true,
        contentBase: "./dist",
        open: true
    },
    mode: 'development', // development, production
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件
        path: path.resolve(__dirname, 'dist') // 路径必须是一个绝对路径
    }

}