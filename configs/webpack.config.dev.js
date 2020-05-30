const path = require("path");
const config = require("../webpack.config.js");

process.env.NODE_ENV = "development";

config.mode = "development";

config.devServer = {
  historyApiFallback: true,
  contentBase: path.join(__dirname, "../build"),
  port: 8089,
};

config.devtool = "inline-source-map";

module.exports = config;
