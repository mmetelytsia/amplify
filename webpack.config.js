const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{loader: "style-loader"},
                    {loader: "css-loader"}]
            },
        ]
    },
  //   plugins: [
  //   new CompressionPlugin({
  //           test: /\.js$|\.css$|\.html$/,
  //           algorithm: 'gzip',
  //
  //       }
  //       )
  // ]
};
module.exports = config;

