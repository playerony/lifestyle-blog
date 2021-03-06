const path = require('path')
const webpack = require('webpack')
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
        '@asset': path.resolve(__dirname, 'asset/'),

        '@page': path.resolve(__dirname, 'page/'),
        '@style': path.resolve(__dirname, 'style/'),
        '@config': path.resolve(__dirname, 'config/'),
        '@graphql': path.resolve(__dirname, 'graphql/'),
        '@service': path.resolve(__dirname, 'service/'),
        '@utility': path.resolve(__dirname, 'utility/'),
        '@component': path.resolve(__dirname, 'component/'),
        '@transformator': path.resolve(__dirname, 'transformator/')
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
    plugins: [
      htmlPlugin,
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_SERVER_URL: JSON.stringify(process.env.VUE_APP_SERVER_URL),
          VUE_APP_CLAIM_IMAGE: JSON.stringify(process.env.VUE_APP_CLAIM_IMAGE)
        }
      })
    ]
  }
}
