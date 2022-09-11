var path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: "./public/javascripts/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", "..."],
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // style-loader를 앞에 추가한다
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      "crypto-browserify": require.resolve("crypto-browserify"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ domain: JSON.stringify("http://175.45.201.111:3000/") }),
    new webpack.SourceMapDevToolPlugin({
      publicPath: "http://localhost:3000/",
      filename: "[file].map",
    }),
    new HtmlWebpackPlugin({
      template: "views/index.html",
    }),
  ],
};
