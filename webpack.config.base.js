let htmlWebpackPlugin = require("html-webpack-plugin")
let path = require("path")
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HappyPack = require('happypack');

let base = {
  entry: __dirname + "/src/index.js",
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      title: "My Cnode",
      favicon: "src/assets/favicon.png"
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    new HappyPack({
      id: 'js',
      loaders: ['babel-loader']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(jsx|js)$/,
        use: ["happypack/loader?id=js"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // 打包第三方库
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
          minChunks: 1
        }
      }
    }
  }
}
module.exports = base
