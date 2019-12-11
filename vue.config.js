// vue.config.js
module.exports = {
  chainWebpack: config => {
    //生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js');
    })
    //开发环境
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js');
    })
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 32010,
    https: false,
    hotOnly: false,
    proxy: null
  }
}