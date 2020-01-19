import Dotenv from 'dotenv-webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import alias from './alias'

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html'
})

const config = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    publicPath: '/admin'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '.',
    hot: true
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [htmlPlugin, new Dotenv()]
}

export default config
