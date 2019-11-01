import axios from "axios";
import { throwErr } from "./throwErr"; //utils 捕捉服务端http状态码的方法
// import store from "@/store"; //引入vuex的相关操作
// import router from "@/router";

const baseUrl = '';

//过滤请求
axios.interceptors.request.use(
  config => {
    //config 为请求的一些配置 例如：请求头 请求时间 Token  可以根据自己的项目需求个性化配置，参考axios的中文说明手册
    config.timeout = 10 * 1000; //请求响应时间
    config.url = baseUrl + config.url;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else if (response.data.code === 401) {
      // store.dispatch("setUserInfo", {});
      this.$message.error("未登录");
      // router.push("/login");
      return Promise.reject(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error && error.response) {
      let res = {};
      res.code = error.response.status;
      res.msg = throwErr(error.response.status, error.response);
      return Promise.reject(res);
    }
    return Promise.reject(error);
  }
);
export default function request(method, url, data) {
  method = method.toLocaleLowerCase();
  if (method === "post" || method === "put") {
    return axios.post(url, data);
  } else if (method === "get") {
    return axios.get(url, {
      params: data
    });
  } else if (method === "delete") {
    return axios.delete(url, {
      params: data
    });
  }
}
