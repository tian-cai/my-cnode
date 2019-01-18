const base = require("./webpack.config.base");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[contenthash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                style: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
})