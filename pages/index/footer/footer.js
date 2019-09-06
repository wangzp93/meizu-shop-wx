// pages/index/footer/footer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "footerData": {
      "text": "返回顶部",
      "contactList": [{
        "text": "400-788-3333"
      }, {
        "a_href": "http://url.meizu.com/ols_M",
        "text": "在线客服"
      }],
      "recordList": [{
        "a_href": "http://www.miitbeian.gov.cn/",
        "text": "粤ICP备13003602号-2"
      }, {
        "a_href": "https://www3.res.meizu.com/static/cn/_partial/footer/images/icp2_fb8db74.jpg",
        "text": "合字B2-20170010"
      }, {
        "a_href": "http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg",
        "text": "营业执照©2018 Meizu All rights reserved"
      }]
    }
  },

  // 返回顶部
  toTheTop() {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 500
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      });
    }
  },

  // 拨打电话
  makePhone(e) {
    let phoneNum = e.currentTarget.dataset.phonenum;
    wx.makePhoneCall({
      phoneNumber: phoneNum,
    })
  }
})