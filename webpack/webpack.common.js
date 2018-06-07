const path = require("path");

module.exports = {
  devtool: "source-map",
  node: false,
  mode: "development",
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "../build")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg|gif|html)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.node$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          },
          {
            loader: "node-loader"
          }
        ]
      }
    ]
  }
};
