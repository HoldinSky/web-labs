const localServer = {
  path: "localhost/",
  port: 3000,
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  mode: "development",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BrowserSyncPlugin({
      host: localServer.path,
      port: localServer.port,
      files: [],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false,
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: "debug",
      logPrefix: "wepback",
      notify: true,
      reloadDelay: 0,
      server: { baseDir: ["dist"] },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "assets"),
          toType: "dir",
        },
      ],
    }),
  ],
};
