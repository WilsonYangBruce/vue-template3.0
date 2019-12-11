// vue.config.js
module.exports = {
  chainWebpack: config => {
    //生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js');
      //加载外部cdn资源
      config.set('externals', {
        vue: 'Vue',
        vuex: 'Vuex',
        'axios': 'axios',
        'element-ui': 'ELEMENT',
        'qs': 'Qs'
      })

    })
    //开发环境
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js');
    })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  //
  devServer: {
    open: true,
    host: 'localhost',
    port: 32010,
    https: false,
    hotOnly: false,
    proxy: null
  }
}