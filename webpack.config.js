const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "dts-css-modules-loader",
            options: {
              namedExport: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCaseOnly",
                localIdentName: "[local]",
              },
            },
          },
        ],
      },
      {
        test: /\.((otf|ttf|woff|woff2)$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./[path]/[name].[ext]",
            },
          },
        ],
      },
      // images
      {
        test: /\.((svg|png|jpg|jpeg|webp)$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./[path]/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      meta: {
        title: `TODO Application`,
      },
      template: path.join(__dirname, "public/index.ejs"),
      favicon: path.join(__dirname, "public/favicon.ico"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
