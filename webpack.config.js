const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    port: 8090,
    hot: true,
    compress: true,
  },
};
