const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "./main.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      pages: path.resolve(__dirname, "src/pages/"),
      components: path.resolve(__dirname, "src/components/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    historyApiFallback: true,
  },
}
