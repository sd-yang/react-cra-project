import axios from "axios";
import useRequest from "./useRequest";

const ajax = axios.create({
    timeout: 10000,
    baseURL: '',
});

// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const GET = (url, { data, params } = {}, options) => {
    return ajax({ url, data, params, method: 'get', ...options });
}

const POST = (url, data = {}, options) => {
    return ajax({ url, data, method: 'post', ...options });
}

export { useRequest, GET, POST };
export default ajax;
