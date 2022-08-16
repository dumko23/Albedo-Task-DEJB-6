const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   mode: 'development',
   entry: './App/assets/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'App/assets/dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};
