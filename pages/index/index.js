//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
   time:3
  },
  onLoad: function (options) {
   var count = setInterval(()=>{
     this.setData({
       time: this.data.time - 1
     });
     if (this.data.time == 0) {
       wx.switchTab({
         url: '../main/main',//这是tab页面切换的方法，参数一 url
         complete: function (res) {
         // 参数二： 一个方法，表示这个功能完成后需要做的事情
         //你可以看微信接口文档，有详细说明，不过你先把list页面搞定，把你今天的图片换上去，然后看看效果，先把这个页面做好。
         }
       })
       clearInterval(count);
     }
   },1000)
  },
});
