let base = require("./webpack.config");
let webpack = require("webpack");
module.exports = Object.assign({},base,{
    devServer: {
        contentBase: __dirname + "/build",
        compress: true
    },
    devtool: "inline-source-map",
    plugins: base.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ])
})