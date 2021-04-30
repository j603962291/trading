module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'dist',// 输出文件目录
  assetsDir: "./static",//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: './index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // 选项...
  devServer: {
    open: true,      // 运行项目时，是否自动开启新窗口。
    // host: 'localhost',
    port: 8008,  // 默认端口号。
    https: false,      // 如果开启就会以https开头。
    // proxy: {
    //   '/': {
    //     target: 'http://43.128.38.191:8090',
    //     changeOrigin: true
    //   }
    // }
  },
  configureWebpack:()=>{

  }
}
