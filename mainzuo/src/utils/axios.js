import axios from "axios";
import {Toast} from "vant";
import router from "../router"

let token = "";
// const baseURL = 'http://localhost:1910/'
const baseURL = 'https://yinpen.top/'
 //axios.defaults.baseURL = baseURL ;     // 应用接口的基路径 (反向代理排斥)
axios.defaults.headers.common['token'] = token;   // req.headers.token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function loading() {
    Toast.clear();
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
    });
}

function success(msg){
    Toast.clear();
    Toast.success({
        message: msg,
        duration:600
    });
}

function fail(msg){
    Toast.clear();
    Toast.fail({
        message: msg,
        duration:600
    });
}
//axios  拦截器



// 添加请求拦截器    request
axios.interceptors.request.use(function (config) {
    // console.log(config)
    token = sessionStorage.token ? sessionStorage.token :token;
    config.headers["token"] = token
    // 配置动画
    loading();
    return config;
}, function (error) {
    // 对请求错误的提示
    fail("请求失败 -网络异常")
    return Promise.reject(error);
});



// 添加响应拦截器     response
axios.interceptors.response.use(function (response) {
    // 成功的响应
    console.log(response)
    if(response.data.code =="3000"){
        router.push({name:'login',query:{active:'login'}})
    }
    if(!!response.data.type){
        success(response.data.msg)
    }else{
        if(response.data.type==0){
            fail(response.data.msg)
        }else{
            success(response.data.msg)
        }
    }
    return response;
}, function (error) {
    // 失败的响应
    fail("响应失败,服务器异常")
    return Promise.reject(error);
});


export {axios,baseURL}