const base = require("./webpack.config.base");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const webpack = require("webpack");

module.exports = merge(base,{
    mode:"production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[chunkhash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new webpack.HashedModuleIdsPlugin()
    ]
})