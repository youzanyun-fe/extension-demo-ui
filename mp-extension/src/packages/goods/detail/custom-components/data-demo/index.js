Component({
  data: {
    skuData: ""
  },
  methods: {
    // 获取数据
    getPageData() {
      this.setData({
        skuData: JSON.stringify(this.getYunSdk().page.sku)
      })
    },
    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
