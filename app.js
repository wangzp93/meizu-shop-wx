//app.js
App({
  onLaunch: function (options) {
    console.log(options === wx.getLaunchOptionsSync());
    console.log(getApp())
  }
})