const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  entry: join(__dirname, '/src/index.js'),
  build: join(__dirname, '/build/'),
  style: join(__dirname, '/src/style')
}

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: './node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        include: paths.style
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}
