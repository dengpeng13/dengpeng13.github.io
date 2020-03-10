// pages/mine/mine.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodList:[],
    userInfo:[],
    type:0
  },


  onShareAppMessage: function (res) {
    return {
      title: '哈根达斯冰激凌5折特惠',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      imageUrl:'http://static.e-mallchina.com/pic/product/brand/detail/hgds.jpg'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    //获取用户信息
    wx.getUserInfo({
      success: function (res) {

        console.log(res);
        that.data.userInfo = res.userInfo;

        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })




  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
