Component({
  behaviors: [],
  data: {},
  lifetimes: {
    attached: function attached() {},
    moved: function moved() {},
    detached: function detached() {}
  },

  ready: function ready() {
    const yunSdk = this.getYunSdk();
    console.log('goodsList: ', yunSdk.page.goodsList);
  },

  pageLifetimes: {
    show: function show() {}
  },

  methods: {
    selectGoods() {
      const selectGoods = this.getYunSdk().page.getProcess('selectGoods');
      selectGoods().then(() => {
        console.log('选中商品');
      });
    },
    cancelSelectGoods() {
      const cancelSelectGoods = this.getYunSdk().page.getProcess('cancelSelectGoods');
      cancelSelectGoods().then(() => {
        console.log('取消选中商品');
      });
    },
    setGoodsNum() {
      const setGoodsNum = this.getYunSdk().page.getProcess('setGoodsNum');
      setGoodsNum().then(() => {
        console.log('设置商品数量');
      });
    },
    createAndGoOrder() {
      const createAndGoOrder = this.getYunSdk().page.getProcess('createAndGoOrder');
      createAndGoOrder().then(() => {
        console.log('创建订单，并跳转');
      });
    },
    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
