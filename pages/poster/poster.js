// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // data中均为rpx值
    wrap: {
      x: 0, y: 0, w: 600, h: 1000, src: '/images/img1.png'
    },
    photo: {
      x: 200, y: 0, w: 200, h: 200, src: '/images/img2.png'
    },
    finalPhoto: {
      x: 200, y: 0, w: 200, h: 200
    },
    text: {
      x: 90, y: 920, fontSize: 60, color: '#FFF', text: '一行文本'
    },
    finalImg: ''
  },

  /**
   * 画图
   */
  drawCvs() {
    const { rpx2Px } = this
    const { wrap, photo, finalPhoto, text } = this.data
    // 外框
    let x = rpx2Px(wrap.x),
        y = rpx2Px(wrap.y),
        w = rpx2Px(wrap.w),
        h = rpx2Px(wrap.h),
        wrapSrc = wrap.src
    // 照片
    let photoX = rpx2Px(finalPhoto.x),
        photoY = rpx2Px(finalPhoto.y),
        photoW = rpx2Px(finalPhoto.w),
        photoH = rpx2Px(finalPhoto.h),
        photoSrc = photo.src
    // 文字
    let textX = rpx2Px(text.x),
        textY = rpx2Px(text.y),
        textSize = rpx2Px(text.fontSize),
        color = text.color,
        textText = text.text

    var ctx = wx.createCanvasContext('cvs', this)

    // 画图片
    ctx.drawImage(photoSrc, photoX, photoY, photoW, photoH) // px

    // 画外框
    ctx.drawImage(wrapSrc, x, y, w, h) // px

    // 画文字
    ctx.fillStyle = color
    ctx.setFontSize(textSize)
    ctx.setTextBaseline('top')
    ctx.fillText(textText, textX, textY)

    ctx.draw(false, ()=> {
      setTimeout(()=> {
        wx.canvasToTempFilePath({
          canvasId: 'cvs',
          success: (res)=> {
            this.setData({
              finalImg: res.tempFilePath
            })
          }
        }, this)
      }, 500)
    })
  },

  /**
   * rpx 转 px
   */
  rpx2Px: (()=> {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    var scale = windowWidth / 750
    return (size)=> {
      return size * scale
    }
  })(),

  /**
   * px转rpx
   */
  px2Rpx: (()=> {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    var scale = windowWidth / 750
    return (size)=> {
      return size / scale
    }
  })(),

  /**
   * 拖动事件
   */
  posiChange(e) {
    const { x, y } = e.detail
    let { photo, finalPhoto } = this.data
    const { px2Rpx } = this
    
    finalPhoto.x = photo.x + px2Rpx(x)
    finalPhoto.y = photo.y + px2Rpx(y)
  },

  /**
   * 缩放事件
   */
  scaleChange(e) {
    const { x, y, scale } = e.detail
    let { photo, finalPhoto } = this.data
    const { px2Rpx } = this

    finalPhoto.x = photo.x + px2Rpx(x)
    finalPhoto.y = photo.y + px2Rpx(y)
    finalPhoto.w = photo.w * scale
    finalPhoto.h = photo.h * scale
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

  }
})