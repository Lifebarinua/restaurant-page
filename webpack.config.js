const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears old build files
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,   // <--- add this
        type: 'asset/resource',            // built-in file loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // your custom HTML
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true, // auto open browser
  },
};
