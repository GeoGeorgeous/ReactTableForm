const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        // Babel React
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // Assets
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        // Styles
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'urDay — ur habits journal',
      publicPath: './',
      favicon: './favicon.ico',
      template: path.resolve(__dirname, './src/template.html'),
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, './dist'),
    compress: true,
    port: 3000,
    open: true,
  },
};
