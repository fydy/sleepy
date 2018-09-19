const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    common: path.resolve("./src/js/common.js")
  },
  output: {
    path: __dirname + "/docs",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: ["syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/pages/about.html"
    })
  ]
};
