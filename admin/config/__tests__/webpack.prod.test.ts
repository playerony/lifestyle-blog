jest.mock('path', () => ({
  resolve: jest.fn().mockImplementation(() => '/'),
  join: jest.fn()
}))

jest.mock('dotenv-webpack', () => {
  class DotenvMock {}

  return DotenvMock
})

import path from 'path'
import Dotenv from 'dotenv-webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import alias from '../alias'
import webpackConfguration from '../webpack.prod'

describe('webpack production Configuration', () => {
  it('should return proper data', () => {
    expect(webpackConfguration).toEqual(WEBPACK_CONFIGURATION)
  })
})

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

const WEBPACK_CONFIGURATION = {
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
  module: { rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }] },
  plugins: [htmlPlugin, new Dotenv()]
}
