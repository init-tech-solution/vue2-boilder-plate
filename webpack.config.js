const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack"); //to access built-in plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" })
  ]
};
