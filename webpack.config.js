const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development',
   entry: './App/assets/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'App/assets/dist')
   },
   module: {
      rules: [
         {
            test: /\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ]
         },
         {
            test: /\.html$/i,
            loader: "html-loader",
         },

      ]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
         title: 'Landing Page',
         filename: 'index.html',
         hash: true,
         template: './App/index.html'
      })
   ],

};
