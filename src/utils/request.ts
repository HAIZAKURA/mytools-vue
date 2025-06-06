import axios from 'axios';

const request = axios.create({
  //设置超时
  timeout: 6000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //响应错误
    return Promise.reject(error);
  },
);

export default request;
