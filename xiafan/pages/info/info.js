// pages/info/info.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
   
    goodList:[]
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    });
  },

  showAction() {
    wx.showActionSheet({
      itemList: this.data.actionList.data,
      success(res) {
        console.log(res);
        wx.showModal({
          title: "提示",
          content: "这是一个模态弹窗",
          success(res) {
            if (res.confirm) {
              console.log(res.confirm);

              wx.showToast({
                title: "成功",
                icon: "success",
                duration: 2000
              });
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          }
        });
      },
      fail(res) {
        console.log(res.errMsg);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {



    // var name = options.name

    
 

    // wx.request({
    //   url: `https://zuozhaoxi.com:1910/react/getGoodList${name}`, //仅为示例，并非真实的接口地址
    //   data: {
    //     x: "",
    //     y: ""
    //   },
    //   header: {
    //     "content-type": "application/json" // 默认值
    //   },
    //   success:(res)=> {
    //     console.log(res.data.result)
    //    this.setData({
    //      goodList:res.data.result
    //     })
    //   }
    // });
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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
