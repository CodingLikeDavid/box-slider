const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: ["babel-polyfill", "./src/demo/index.js"],
    mode: 'production',
    performance: {
        maxEntrypointSize: 3000000,
        maxAssetSize: 3000000,
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: './',
        path: path.resolve(__dirname, 'demo')
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Box Slider',
            template: './webpack_template/index.ejs',
            inject: '#root',
        }),
        new CleanWebpackPlugin(['demo'])
    ]
});