// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      { enName: 'phone', chName: '手机' },
      { enName: 'audio', chName: '声学' },
      { enName: 'section', chName: '配件' },
      { enName: 'surround', chName: '周边' }
    ],
    active: '0'
  },

  // 改变tab
  changeTab(e) {
    let index = e.target.dataset.i;
    if (index != undefined) {
      this.setData({ active: index});
    }
  }
})