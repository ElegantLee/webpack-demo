const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JavaScript执行入口文件
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    // index: './src/index.js',
    // another: './src/another-module.js'
    index: './src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '懒加载',
    }),
  ]
}
