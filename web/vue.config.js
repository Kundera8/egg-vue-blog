'use strict'

module.exports = {
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true
      }
    }
  }
}
