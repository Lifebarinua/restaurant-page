const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // change to 'production' before deploying
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // or 'main.js', doesn't matter
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html', // REQUIRED for GitHub Pages
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
};
