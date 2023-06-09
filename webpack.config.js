// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    index: "./src/index.js",
    shop: "./src/shop.js",
    form: "./src/form.js",
    final: "./src/final.js",
    contact: "./src/contact.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      filename: "shop.html",
      template: "./src/shop.html",
      chunks: ["shop"],
    }),

    new HtmlWebpackPlugin({
      filename: "form.html",
      template: "./src/form.html",
      chunks: ["form"],
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
      chunks: ["contact"],
    }),

    new HtmlWebpackPlugin({
      filename: "final.html",
      template: "./src/final.html",
      chunks: ["final"],
    }),
    
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
