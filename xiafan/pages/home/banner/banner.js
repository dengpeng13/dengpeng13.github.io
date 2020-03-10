// pages/home/banner/banner.js


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
    banners:[]
  },

  created: function () {
    this.getBanners()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBanners() {
      get({
        url: "https://m.maizuo.com/gateway",
        data: {
          cityId: 110100,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 9721345
        },
        xhost: 'mall.film-ticket.film.list'
      }).then(res => {
        //  console.log(res.data.data.films)
        this.setData({
          banners: res.data.data.films
        })
      })
    }
  }
})
