// pages/me/my-order/my-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "statusList": [{
      "enName": "payment",
      "chName": "待付款",
      "icon": "icon-payment",
      "a_href": "https://ordercenter.mall.meizu.com/mall/order/init.html?type=unpay"
    }, {
      "enName": "wait-deliver",
      "chName": "待发货",
      "icon": "icon-wait-deliver",
      "a_href": "https://ordercenter.mall.meizu.com/mall/order/init.html?type=paid"
    }, {
      "enName": "logistics",
      "chName": "待收货",
      "icon": "icon-logistics",
      "a_href": "https://ordercenter.mall.meizu.com/mall/order/init.html?type=onroad"
    }, {
      "enName": "after-sale",
      "chName": "退款/售后",
      "icon": "icon-after-sale",
      "a_href": "https://ordercenter.mall.meizu.com/mall/order/init.html?type=service"
    }]
  }
})