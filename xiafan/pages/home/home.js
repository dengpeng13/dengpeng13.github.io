// pages/clasify/clasify.js

import foods from "../../utils/request/foods.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foods: [],
    isShow:false,
    show:false
  },
  handleClickShow(event) {
    console.log(event)
   
    let getSecCollect = wx.getStorageSync("_collect");
    
    let getSecCollectState = getSecCollect[this.data.collectData];

    getSecCollectState = !getSecCollectState;

    getSecCollect[this.data.collectData] = getSecCollectState;
    wx.setStorageSync("_collect", getSecCollect)
    this.setData({
      isShow: getSecCollectState
    })
  },


  getCollected() {
    let CollectState = wx.getStorageSync("_collect");
    if (CollectState) {
    
      let collcetState = CollectState[this.data.collectData];
      this.setData({
        isShow: collcetState//把这个状态存到data中
      })
    } else {
      let CollectState = {};
      CollectState[this.data.collectData] = false;
      wx.setStorageSync("_collect", CollectState);
    }
  },

  navigate(){
    wx.redirectTo({
      url: '/pages/search/search'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.foodId)
    foods({
      url: `https://yinpen.top:1910/react/zuofa`,
      data: {

      }
    }).then(res => {
      console.log(res.data.result)
      this.setData({
        foods: res.data.result
      })

    })

    let detId = options.id;
    let _this = this;
    _this.setData({
      collectData: detId//把获取的id存到data中，当作一个变量供下边调用
    })
    _this.getCollected();//此方法是：页面加载时，获取缓存中的状态

  },
  //监听页面的滚动
  onPageScroll(e) {
    let sTop = e.scrollTop;
    if (sTop >= 200 && !this.data.show) {
      this.setData({ show: true })
    } else if (sTop < 200 && this.data.show) {
      this.setData({ show: false })
    }
  },

  //点击backtop返回顶部
  backtop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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