import axios from "axios"; // 引入axios
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到
import router from "@/router/index.js";
// vant的toast提示框组件，大家可根据自己的ui组件更改。

axios.defaults.timeout = 10000; //超时设置（超过十秒就会提醒用户请求超时）
//开发环境
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "";
}
//调试环境
else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = "";
}
//生产环境
else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "https://www.mask-sugar.com";
}
axios.defaults.headers.common["token"] = localStorage.getItem("token");
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if (localStorage.getItem("token")) {
      config.headers.token = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  function(error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);
//响应拦截
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // console.log(response);
    switch (response.status) {
      case 200:
        return response.data;
        break;
      default:
        console.log("111");
    }
    // return response;
  },
  error => {
    console.log("121");
    console.log(error.response);
    // Do something with response error
    switch (error.response.status) {
      case 401:
        this.router.replace('/web/officialWebsite')
        break;
      default:
        return Promise.resolve(error.response.data);
        break;
    }
    // return Promise.reject(error);
  }
);

//封装方法
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    axios
      .get("/api/" + url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/" + url, QS.stringify(params))
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
