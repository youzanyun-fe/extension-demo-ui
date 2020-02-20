/**
 *  接口调用
 *
 *  @param {Object} config - 配置对象
 *  @param {string} config.isv - 请求真实域名 ps: www.youzan.com
 *  @param {string} config.path - 请求真实路径 ps: /api/test
 *  @param {string} config.method - 请求类型
 *  @param {string} config.succeed - success回调函数
 *  @param {string} config.failed - fail回调函数
 */

// 不要改这个配置，因为小程序白名单有限制，该url是统一接出域名，请按照注释传入参数即可使用
const _httpRoot = 'https://mp-isv.youzanyun.com/';

export default function request(config) {
  wx.request({
    url: _httpRoot + config.path,
    method: config.method || 'GET',
    ...config,
    header: {
      isv: config.isv,
      // 设置参数内容类型为x-www-form-urlencoded
      'content-type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    complete: resReq => {
      if (+resReq.statusCode === 200) {
        config.succeed(resReq.data);
      } else {
        console.log('数据获取失败，请刷新重试');
      }
    },
    fail: res => {
      config.failed(res);
    }
  });
}
