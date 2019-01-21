const base = require("./webpack.config.base");
const webpack = require("webpack");
const merge = require('webpack-merge');

module.exports = merge(base, {
    mode: "development",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash:8].js"
    },
    devServer: {
        contentBase: __dirname + "/build",
        compress: true
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ]
    },
})