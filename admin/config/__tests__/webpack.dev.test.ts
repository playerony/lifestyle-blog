jest.mock('dotenv-webpack', () => {
  class DotenvMock {}

  return DotenvMock
})

import Dotenv from 'dotenv-webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import alias from '../alias'
import webpackConfguration from '../webpack.dev'

describe('webpack development Configuration', () => {
  it('should return proper data', () => {
    expect(webpackConfguration).toEqual(WEBPACK_CONFIGURATION)
  })
})

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html'
})

const WEBPACK_CONFIGURATION = {
  mode: 'development',
  entry: './index.tsx',
  output: { publicPath: '/admin' },
  devServer: {
    hot: true,
    port: 3200,
    contentBase: '.',
    historyApiFallback: true
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
  plugins: [htmlPlugin, new Dotenv()]
}
