/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    plugins: [
      new ESLintPlugin(),
      new webpack.ProvidePlugin({
        "React": "react"
      })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        }]
    }
};
