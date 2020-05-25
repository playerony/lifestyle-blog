import path from 'path'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import alias from './alias'

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.tsx',
  output: {
    publicPath: '/admin',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.(jpg|png)$/, loader: 'url-loader' },
      { test: /\.svg$/, loader: 'svg-sprite-loader' },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        SERVER_URL: JSON.stringify(process.env.SERVER_URL),
        JWT_PREFIX: JSON.stringify(process.env.JWT_PREFIX),
        CRYPTO_KEY: JSON.stringify(process.env.CRYPTO_KEY),
        CAPTCHA_KEY: JSON.stringify(process.env.CAPTCHA_KEY)
      }
    })
  ]
}

export default config
