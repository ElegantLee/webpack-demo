const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JavaScript执行入口文件
  mode: 'development',
  entry: { index: './src/index.js' },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true // 每次构建前清理输出的文件夹
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '缓存'
    })
  ],
  optimization: {
    // 最新版的 webpack 在 index.js 内容改变后只会改变 index.js 的 hash，
    // 而 runtime 和 verndor 的 hash 不会改变。所以不需要额外配置项了。
    // moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
