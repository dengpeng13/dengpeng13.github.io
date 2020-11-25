// pages/search/search.js


import foods from "../../utils/request/foods.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foods:[],
    istrue:true,
    jiehe:[]

  },
  onChange(e){
 
    console.log(e.detail)
    let keyword = e.detail
    wx.showLoading({
      title: '加载中',
    })
    foods({
      url: `https://yinpen.top:1910/react/foodsss`,
      params: {
        keyword: keyword
      }
    }).then(res=>{
      console.log(res.data.result)
      this.setData({
        foods:res.data.result
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 200)

    })
    


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    foods({
      url: `https://yinpen.top:1910/react/foodds`,

    }).then(res => {
      console.log(res.data.result)
      this.setData({
        jiehe: res.data.result
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 200)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})