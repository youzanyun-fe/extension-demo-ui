Component({
  data: {
    isShowGoodsInfoKey: true,
    isShowGoodsBottomKey: true
  },
  methods: {
    // 切换显示标题栏
    isShowGoodsInfo() {
      this.setData({
        isShowGoodsInfoKey: !this.data.isShowGoodsInfoKey
      }, () => {
        this.isShowGoodsInfoHandle()
      })
    },

    // 切换显示提交栏
    isShowGoodsBottom() {
      this.setData({
        isShowGoodsBottomKey: !this.data.isShowGoodsBottomKey
      }, () => {
        this.getYunSdk().page.updateComponent('GoodsBottom', this.data.isShowGoodsBottomKey);
      })
    },

    // 重新显示标题栏改变内容
    isShowGoodsInfoHandle() {
      let isShow = this.data.isShowGoodsInfoKey
      let properties = {
        goodsPriceTag: '这是测试商品价格标签',
        goodsTitle: '这是测试商品标题',
        goodsSubTitle: '这是测试商品副标题',
        minPrice: 1,
        maxPrice: 2,
        originPrice: '原价'
      }
      this.getYunSdk().page.updateComponent('GoodsInfo', isShow, properties);
    },

    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
