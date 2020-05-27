/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'source-map',
  entry: './index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 9000,
    publicPath: "http://localhost:9000/dist/",
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
};