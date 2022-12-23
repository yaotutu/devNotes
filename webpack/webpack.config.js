// 引入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入path模块，用于解决路径问题
const { resolve } = require("path");
//通用的cssLoader。
const baseCssLoader = ["style-loader", "css-loader"];

// 使用cjs的模块化规范，暴漏一个对象，该对象就是webpack的详细配置对象
module.exports = {
  mode: "development", //工作模式
  entry: "./src/js/app.js", //入口
  output: {
    path: resolve(__dirname, "build"),
    filename: "js/app.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...baseCssLoader],
      },
    ],
    rules: [
      {
        test: /\.styl$/,
        use: [
          ...baseCssLoader,
          "stylus-loader", // 将 Stylus 文件编译为 CSS
        ],
      },
    ],
  },
};
