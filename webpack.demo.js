const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    entry: ["babel-polyfill", "./demo/src/index.js"],
    mode: 'production',
    performance: {
        maxEntrypointSize: 3000000,
        maxAssetSize: 3000000,
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: './',
        path: path.resolve(__dirname, 'demo', 'page')
    },
    module: {

    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'demo', 'page')),
    ]
});