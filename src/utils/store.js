/**
 * Created by chisongjie on 2018/6/1.
 */
/**
 * Created by chisongjie on 2018/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 在这里引入
// 在这里导出实例
const store = new Vuex.Store({
    state: {
        titleType: 1 // 1.生产监管 2.流通监管 3.餐饮监管
    },
    getters: {},
    mutations: {
        changeTitleType (state, data) {
            state.titleType = data
            localStorage.setItem('titleType',data)
        }
    },
    actions: {}
})
export default store
