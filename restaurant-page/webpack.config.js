// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,              // empty dist before each build
  },
  devtool: "eval-source-map",             // errors point to src, not the bundle
  devServer: {
    watchFiles: ["./src/template.html"],  // dev server ignores HTML template otherwise
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/template.html" }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, use: ["html-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },
};