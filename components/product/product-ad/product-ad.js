// components/product/product-ad/product-ad.js
Component({
  options: {
    styleIsolation: 'apply-shared'  // 父子组件样式穿透
  },
  properties: {
    adList: {
      type: Array
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  }
})