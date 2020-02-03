import path from 'path'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/admin'
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.svg$/, loader: 'svg-sprite-loader' },
      { test: /\.(jpg|png)$/, loader: 'url-loader' }
    ]
  },
  plugins: [htmlPlugin, new Dotenv()]
}

export default config
