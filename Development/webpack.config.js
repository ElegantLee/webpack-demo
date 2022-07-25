const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JavaScript执行入口文件
  mode: 'development',
  entry: { index: './src/index.js', print: './src/print.js' },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true, // 每次构建前清理输出的文件夹
    publicPath: '/'
  },
  optimization: {
    // 因为在这个示例中单个 HTML 页面有多个入口，所以需要配置这一项（与代码分割相关）
    runtimeChunk: 'single'
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发环境',
    }),
  ],
}
