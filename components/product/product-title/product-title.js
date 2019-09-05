// components/product/product-title/product-title.js
Component({
  options: {
    styleIsolation: 'apply-shared'  // 父子组件样式穿透
  },
  properties: {
    title: {
      type: String
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  }
})