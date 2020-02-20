/** <!-- version: 0.0.1 --> */
// app.js
import YouZanYunSdk from './youzanyun-sdk/index';
import { SyncEvent } from './youzanyun-sdk/events';
import EcloudSpaceBiz from './ecloud-space';

function chooseImage() {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // 上传
        resolve(res);
      },
      fail: e => {
        reject(e);
      }
    });
  });
}

App({
  onLaunch() {
    const youZanYunSdk = new YouZanYunSdk(this);
    this.getYouZanYunSdk = function() {
      return youZanYunSdk;
    };

    // 注册登录成功事件
    youZanYunSdk.app.__setEvent('ecloud:login:success', new SyncEvent());
    // 注册上传图片函数
    youZanYunSdk.chooseImage = chooseImage;

    // 执行定制代码
    EcloudSpaceBiz && EcloudSpaceBiz(youZanYunSdk);

    setTimeout(() => {
      youZanYunSdk.app.trigger('ecloud:login:success', {});
    }, 500);
  },
  globalData: {}
});
