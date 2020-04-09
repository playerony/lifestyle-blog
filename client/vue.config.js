const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    entry: './index.js',
    resolve: {
      alias: {
        '@asset': path.resolve(__dirname, '../asset/'),

        '@page': path.resolve(__dirname, 'page/'),
        '@style': path.resolve(__dirname, 'style/'),
        '@config': path.resolve(__dirname, 'config/'),
        '@graphql': path.resolve(__dirname, 'graphql/'),
        '@service': path.resolve(__dirname, 'service/'),
        '@utility': path.resolve(__dirname, 'utility/'),
        '@component': path.resolve(__dirname, 'component/')
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
          test: /\.scss$/i,
          use: ['sass-loader']
        },
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeDimensions: true }, { removeViewBox: false }]
            }
          }
        }
      ]
    },
    plugins: [htmlPlugin]
  }
}
