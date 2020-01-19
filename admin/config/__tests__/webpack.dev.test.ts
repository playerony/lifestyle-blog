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
    historyApiFallback: true,
    contentBase: '.',
    port: 3200,
    hot: true
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: { rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }] },
  plugins: [htmlPlugin, new Dotenv()]
}
