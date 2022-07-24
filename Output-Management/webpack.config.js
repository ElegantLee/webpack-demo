const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JavaScript执行入口文件
  mode: 'development',
  entry: { index: './src/index.js', print: './src/print.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true // 每次构建前清理输出的文件夹
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
}
