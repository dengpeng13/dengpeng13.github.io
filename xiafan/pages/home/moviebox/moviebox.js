// pages/home/moviebox/moviebox.js

import get from "../../../utils/request/get.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    getMovie:[],
    pageNum:1,
    pageSize: 10,
    type: 2,
  },
  attached() {
    this.getMovie()
  },
  /**
   * 组件的方法列表
   */
  methods: {

    getMovie(){
      let { pageNum, pageSize, type } = this.data;
      get({
        url:"https://m.maizuo.com/gateway",
        data: {
          cityId: 110100,
          pageNum,
          pageSize,
          type,
          k: 9721345
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.setData({
          getMovie: res.data.data.films,
          pageNum:++pageNum
        })
      })
    }
 
  }
  
})
