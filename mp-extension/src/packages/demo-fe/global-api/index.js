const app = getApp();
Page({

  data: {
    yunSdkAppShop: "",
    yunSdkAppUser: "",
    requestSuccessData: "",
    requestErrData: ""
  },

  // 显示全局数据
  getGlobalData() {
    this.setData({
      yunSdkAppShop: JSON.stringify(this.getYunSdk().app.shop),
      yunSdkAppUser: JSON.stringify(this.getYunSdk().app.user)
    })
  },

  // 页面跳转
  navigateGoodsDetail(e) {
    let type = e.currentTarget.dataset.type
    if (type !== "navigateBack") {
      this.getYunSdk().navigate("goodsDetail", { alias: "2oj2inrzf77kp" }, "redirectTo")
    } else {
      // delta参数，表示返回的页面数，默认为1
      this.getYunSdk().navigate("", { delta: 1 }, "navigateBack")
    }
  },

  // 请求
  request() {
    this.getYunSdk().request({
      isv: "learn-se.isv-dev.youzan.com",
      path: "/containerToken/limit",
      method: "GET",
      succeed: (res) => {
        this.setData({
          requestSuccessData: JSON.stringify(res),
        })
      },
      failed: (err) => {
        this.setData({
          requestErrData: JSON.stringify(err),
        })
      }
    })
  },

  getYunSdk() {
    return app.getYouZanYunSdk();
  },
});

