let base = require("./webpack.config");
let webpack = require("webpack");
let cleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = Object.assign({},base,{
    plugins: base.plugins.concat([
        new cleanWebpackPlugin("build/*.js"),
        new webpack.optimize.UglifyJsPlugin()
    ])
})