Component({
  data: {
    skuData: ""
  },

  methods: {
    // 弹起SKU选择框
    showSKU() {
      const showSKU = this.getYunSdk().page.getProcess('showSKU');
      showSKU('selectSku').then(() => {
        console.log('已经弹起');
      });
    },

    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
