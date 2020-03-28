const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    entry: './index.js',
    resolve: {
      alias: {
        "@page": path.resolve(__dirname, 'page/'),
        "@style": path.resolve(__dirname, 'style/'),
        "@config": path.resolve(__dirname, 'config/'),
        "@service": path.resolve(__dirname, 'service/'),
        "@component": path.resolve(__dirname, 'component/')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          include: path.resolve(__dirname, 'page', 'component'),
          options: {
            hotReload: true
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [htmlPlugin]
  }
}
