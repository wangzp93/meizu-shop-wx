// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    "bannerList": [{
      "a_href": "https://m.meizu.com/16s/summary/",
      "img_src": "https://fms.res.meizu.com/dms/2019/04/23/3ea001fa-7cac-4de9-9fb3-8c34d1244d2e.jpg"
    }, {
      "a_href": "https://detail.meizu.com/item/meizu16th.html?click=mall_index_ba_4",
      "img_src": "https://fms.res.meizu.com/dms/2019/01/25/2a15ab52-d1fe-4dca-a831-90c78d94a84e.jpg"
    }, {
      "a_href": "https://detail.meizu.com/item/meizunote9.html?click=mall_index_ba_1",
      "img_src": "https://fms.res.meizu.com/dms/2019/03/06/b27906af-4996-4239-afe0-a4d14cb2a6c6.jpg"
    }, {
      "a_href": "https://detail.mall.meizu.com/item/meizunote9.html?click=mall_index_ba_2",
      "img_src": "https://fms.res.meizu.com/dms/2019/03/26/99f5526c-27f2-45a3-938d-67122493fde2.jpg"
    }, {
      "a_href": "https://detail.meizu.com/item/meizux8.html?click=mall_index_ba_3",
      "img_src": "https://fms.res.meizu.com/dms/2019/03/13/1f7bbfea-6b29-4beb-bb71-7ddcc693b2b0.jpg"
    }, {
      "a_href": "https://m.meizu.com/accessory/tw50s.html",
      "img_src": "https://fms.res.meizu.com/dms/2019/04/23/e90fc86c-e0a0-41ff-b0a0-39b0f6e40b5d.jpg"
    }],
    indicatorDots: true,   // 是否显示面板指示点
    autoplay: false,  // 自动播放
    interval: 3000,   // 间隔
    duration: 300,    // 滑动时间
    circular:true,    // 是否衔接滑动
    easingFunction: 'linear'  // 滑动类型
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }
})