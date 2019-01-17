const base = require("./webpack.config.base");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[chunkhash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            cache: true
        })],
    },
})