import axios from 'axios'

const request = axios.create({
    //根据运行环境来选择相应接口地址
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 6000, //设置超时
})

// 请求拦截器
request.interceptors.request.use(function (config) {
    return config
}, function (err) {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use((response) => {
    return response
},(error) => {
    //响应错误
    let message = ''
    if(error.response&&error.response.status){
        const status = error.response.status
        switch (status) {
            case 400:
                message = '请求错误';
                break;
            case 401:
                message = '请求错误';
                break;
            case 404:
                message = '请求地址出错';
                break;
            case 408:
                message = '请求超时';
                break;
            case 500:
                message = '服务器内部错误!';
                break;
            case 501:
                message = '服务未实现!';
                break;
            case 502:
                message = '网关错误!';
                break;
            case 503:
                message = '服务不可用!';
                break;
            case 504:
                message = '网关超时!';
                break;
            case 505:
                message = 'HTTP版本不受支持';
                break;
            default:
                message = '请求失败'
        }
        return Promise.reject(error);
    }
})

export default request