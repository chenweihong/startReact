import axios from 'axios';
import lodash from 'lodash';
import config from '../config/config';

console.log('request.js')

const fetch = (options) => {
    let {
        method = 'get', // 创建请求时使用的方法，默认为 get
        data,
        fetchType,
        url,
    } = options

    // 对数据进行深拷贝，防止使用过程中对数据进行修改
    const cloneData = lodash.cloneDeep(data);

    // 加上域名，拼接 URL
    // axios 中的 URL 是用于请求的服务器 URL 
    // axios.baseUrl 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    url = config.api_host_addr + url;
    console.log('url:' + url);

    // 配置 axios 请求头和请求体
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.timeout = 5000;

    // 根据请求类型，进行请求
    switch (method.toLowerCase()) {
        case 'get':
        console.log('request get');
            return axios.get(url, cloneData);
        case 'post':
        console.log('request post');
            return axios.post(url, cloneData);
        case 'delete':
            return axios.delete(url, {
                data: cloneData,
            });
        case 'put':
            return axios.put(url, cloneData)
        case 'patch':
            return axios.patch(url, cloneData)
        default:
            return axios(options);
    }
}

export default function request (options) {
    console.log('request action');
    console.log(options);
    return fetch(options).then((response) => {
        console.log('axios call back')
        console.log(response);

        // 对请求返回结果进行解析
        let data = response.data;
        return Promise.resolve(data);
    }).catch((error) => {
        console.log('axios call back error')
        return Promise.reject(error);
    })
}