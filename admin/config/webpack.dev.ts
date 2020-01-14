import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import alias from './alias'

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html'
})

const config: webpack.Configuration = {
  mode: 'development',
  entry: './index.tsx',
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [htmlPlugin]
}

export default config
