
// Vuex 核心代码    
// Vuex (组件通信  组件数据共享  数据缓存 sessionStorage)



import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);    // 全局注册声明  

// 每一个 Vuex 应用的核心就是 store（仓库）
// 它包含着你的应用中大部分的状态 (state)。

// 1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
// 2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation


// 一个对象就包含了全部的应用层级状态  唯一的数据源     
import { axios } from "@/utils";



const store = new Vuex.Store({



  state: {
    shangyin: [],
    jijinag: [],
    citylist: [],
    cinema: [],
    film:{
        
    },
    cityInfo: {

      name: '选择城市'
    }    // 状态 数据源  项目共享缓存的数据都存储在state 

  },

  // Action 可以包含任意异步操作
  // Action 提交的是 mutation，而不是直接变更状态
  actions: {
    // getCinemanew({commit},{url}){
    //   axios.get(url)
    //   .then(res => {
    //     commit("getCinemanew", res.data.result)
    //   })
    // },
    getCinema({ commit }, { url}) {
      axios.get(url)
        .then(res => {
          commit("getCinema", res.data.result)
        })
    },
    getShangyin({ commit }, { url }) {
      axios.get(url)
        .then(res => {
          commit("getShangyin", res.data.result)
        })
    },
    getJijiang({ commit }, { url }) {
      axios.get(url)
        .then(res => {
          commit("getJijiang", res.data.result)
        })
    },

    getCityListAsync({ commit }, { url }) {
      axios.get(url)
        .then(res => {
          commit("getCityListAsync", res.data.result)
        })
    },

  },

  getters: {  // 复杂的数据进行拆分和优化  派生

  },

  // 异变 管理 管理状态 state   
  // 同步修改 
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {
    getCinemanew(state, cinema) {
      state.cinema = cinema
    },
    getCinema(state, cinema) {
      state.cinema = cinema
    },
    getShangyin(state, shangyin) {
      state.shangyin = shangyin

    },
    getJijiang(state, jijinag) {
      state.jijinag = jijinag

    },
    changCityinfo(state, cityInfo) {
      state.cityInfo = cityInfo

    },
    getCityListAsync(state, citylist) {
      state.citylist = citylist;

    }
  }
})


export default store;