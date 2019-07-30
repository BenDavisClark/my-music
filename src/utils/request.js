//定义请求地址
//const host = 'http://neteasecloudmusicapi.zhaoboy.com';
const host = 'https://music.aityp.com'

function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        resolve(res.data)
      },
      fail: function(error) {
        reject(false)
      }
    })
  })
}

function get(obj) {
  return request(obj.url, 'GET', obj.data)
}

function post(obj) {
  return request(obj.url, 'POST', obj.data)
}

export default {
  request,
  get,
  post
}
