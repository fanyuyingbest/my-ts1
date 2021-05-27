const path = require('path');
const webpack = require('webpack')//引入webpack
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./ts/src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name]-bundle.js",
  },
  devServer:{
    contentBase:"dist", // 指定一个本地服务器路径，否则会默认为根目录
    host:'localhost',
    port:'8080',
    open:true,//自动拉起浏览器
    hot:true//热加载并自动刷新
    //hotOnly:true  不自动刷新
},
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './html',
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
};
