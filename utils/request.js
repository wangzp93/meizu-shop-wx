/**
 * 封装全局request
 */
const request = obj => {
  wx.request({
    url: 'https://easy-mock.zhongpeng.wang/mock/5d1b63a94e718016e83ba630/meizu-shop' + obj.url,
    data: obj.data ? obj.data : '',
    method: obj.method ? method : 'POST',
    success(rsp, statusCode, header) {
      console.log(rsp, statusCode, header)
    }
  });
}

module.exports = request