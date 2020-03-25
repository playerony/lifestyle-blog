const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

module.exports = {
  configureWebpack: {
    entry: './index.js',
    resolve: {
      alias: {
        "@service": path.resolve(__dirname, 'service/'),
        "@component": path.resolve(__dirname, 'component/')
      }
    },
    plugins: [htmlPlugin]
  }
}
