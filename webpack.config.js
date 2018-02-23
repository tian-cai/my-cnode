let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require('path')

let base = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: path.resolve(__dirname,"src")
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        include: path.resolve(__dirname,"src")
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        include: path.resolve(__dirname,"src")
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname,"src")
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname,"src")
      },
      {
        test: /\.(jsx|js)$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname,"src")
      }
    ]
  }
 
};
module.exports = base;