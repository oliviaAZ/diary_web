const path = require("path");
module.exports = {
  entry: ["src/index"],
  plugins: [
    {
      resolve: "@poi/plugin-typescript",
    },
  ],
  devServer: {
    port: 8080,
    hot: true,
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        include: [
          // path.resolve(__dirname, "./node_modules/antd/dist/antd.less"),
          path.resolve(__dirname, "./src"),
          // path.resolve(__dirname, "./public/creeks.ico"),
        ],
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".web.js", ".js", ".jsx", ".ts", ".tsx"],
      // alias: {
      //   "@api": path.resolve(__dirname, "src/services/"),
      //   "@component": path.resolve(__dirname, "./src/components"),
      //     "@component/*": path.resolve(__dirname, "./src/components/*"),
      //   "@constant": path.resolve(__dirname, "./src/constant"),
      //   "@constant/*": path.resolve(__dirname, "./src/constant/*"),
      //   // "@stores": path.resolve(__dirname, "./stores"),
      //   "@util": path.resolve(__dirname, "./src/utils"),
      //   "@hooks": path.resolve(__dirname, "./src/hooks"),
      //   "@hooks/*": path.resolve(__dirname, "./src/hooks/*"),
      // },
    },
  },
};
