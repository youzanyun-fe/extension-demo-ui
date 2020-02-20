Component({
  data: {
    currentAddress: ""
  },
  lifetimes: {
    // 订阅数据变化
    ready: function ready() { this.watchAddress() },
    // 取消订阅
    detached: function detached() { this.removeWatch() },
  },
  methods: {
    // 获取数据
    getPageData() {
      this.setData({
        currentAddress: JSON.stringify(this.getYunSdk().page.delivery.address)
      })
    },
    // 监听
    watchAddress() {
      this.unwatchDelivery = this.getYunSdk().page.watch('delivery', (newVal, oldVal) => {
        this.setData({
          currentAddress: JSON.stringify(newVal.address)
        })
      })
    },
    // 解除监听
    removeWatch() {
      this.unwatchDelivery()
    },
    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
