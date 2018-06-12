import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import store from './utils/store'
// import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import '../static/qqfont/iconfont.css' //引入自定义字体图标
import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/main.css' //引入自定义字体图标
import "babel-polyfill";

Vue.use(ElementUI, { size: 'small' });
Vue.use(Vuex)

// axios.defaults.baseURL = 'http://localhost:8080'; // 通用接口地址
Vue.prototype.$axios = axios;

// 存储vuex数据
Vue.prototype.$http = axios
// 跳转前验证登录状态
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        if (!localStorage.getItem('qq_username')) {
            next('/login')
            Vue.prototype.$message({
                type: 'warning',
                message: '请登录!'
            });

        } else {
            next()
        }
    }
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
    return response
}, (err) => { // 这里是返回状态码不为200时候的错误处理
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break
            case 422:
                err.message = err.response.data.name[0]
                break
            default:err.message = '未知错误'
        }
        if(err.message){
            Vue.prototype.$message({
                type: 'error',
                message: err.message
            });
        }
    }
    return Promise.reject(err)
})
new Vue({
    store,
    router,
    created(){
      if(localStorage.getItem('titleType') === null || localStorage.getItem('titleType') === ''){
          localStorage.setItem('titleType',1)
      }
      this.$store.state.titleType = localStorage.getItem('titleType')
    },
    render: h => h(App)
}).$mount('#app');
