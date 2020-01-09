/*
 * @Author: heinan
 * @Date: 2020-01-07 09:33:04
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-09 10:00:31
 */
import axios from 'axios';

const request = axios.create();
//请求拦截
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//响应拦截
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
