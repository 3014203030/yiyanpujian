module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/doctortest/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://39.96.65.14:8088/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}
