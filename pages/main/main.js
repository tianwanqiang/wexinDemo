var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whereami: ' 所在位置',
    countLength: 0,
    imgs: []
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

  },

  locationViewTap: function () {
    var that = this;
    wx.getLocation({
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: {
            longitude: res.longitude,
            latitude: res.latitude,
          },
          controls: '../../images/handle.png'
        });
      },
    }),
      wx.chooseLocation({
        success: function (res) {
          app.globalData.locationInfo = {
            name: res.name,
            address: res.address,
            longtitude: res.longitude,
            latitude: res.latitude
          };
          that.setData({
            whereami: res.name
          })

        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })

  },
  bindWordLimit: function (e) {
    var value = e.detail.value;
    var len = parseInt(value.lengh);
    if (len > 140) return;
    console.log("length====>"+len);
    this.setData({
      countLength: len
    });
  },

  chooseImg: function () {
    var that = this;
    var imgs = this.data.imgs;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var templatePath = res.tempFilePaths;
        var imgs = that.data.imgs;
        imgs = imgs.concat(templatePath);
        that.setData({
          imgs: imgs
        });
      },
    })
  },

  uploadimg: function () {//这里触发图片上传的方法
    var pics = this.data.imgs;
    app.uploadimg({
      url: 'https://........',//这里是你图片上传的接口
      path: pics//这里是选取的图片的地址数组
    });
  },
  /**
   * 预览图片
   */
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //获取所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      current: imgs[index],
      urls: imgs
    })
  },

  /**
   * 删除图片
   */
  deleteImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    var imgs = this.data.imgs;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  }

})