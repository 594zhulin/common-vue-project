const path = require("path");
const apiMocker = require("webpack-api-mocker");

module.exports = {
  publicPath: "/", // 基本路径
  outputDir: "dist", // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@c": path.resolve(__dirname, "src/components"),
          "@a": path.resolve(__dirname, "src/assets")
        } // 别名配置
      }
    });
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    before(app) {
      apiMocker(app, path.resolve("src/mock/mock.js"));
    },
    // proxy: {
    //   "/api": {
    //     target: "https://cnodejs.org",
    //   }
    // }
  }
};
