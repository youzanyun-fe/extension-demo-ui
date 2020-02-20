import CartPage from '../../../youzanyun-sdk/cart-page/index';

Page({
  onLoad() {
    // 注册mock数据
    this.getYunSdk().page.__setData('goodsList', CartPage.openData.goodsList);
    // 注册流程API
    this.getYunSdk().setPageProcess('selectGoods', CartPage.process.selectGoods);
    this.getYunSdk().setPageProcess('cancelSelectGoods', CartPage.process.cancelSelectGoods);
    this.getYunSdk().setPageProcess('setGoodsNum', CartPage.process.setGoodsNum);
    this.getYunSdk().setPageProcess('createAndGoOrder', CartPage.process.createAndGoOrder);
  },
  data: {},
  getYunSdk() {
    return getApp().getYouZanYunSdk();
  }
});
