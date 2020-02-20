import GoodsPage from '../../../youzanyun-sdk/goods-page/index';

Page({
  onLoad() {
    // 注册mock数据
    this.getYunSdk().page.__setData('goodsItem', GoodsPage.openData.goodsItem);
    this.getYunSdk().page.__setData('refund', GoodsPage.openData.refund);
    this.getYunSdk().page.__setData('multistore', GoodsPage.openData.multistore);
    this.getYunSdk().page.__setData('shop', GoodsPage.openData.shop);
    this.getYunSdk().page.__setData('shopConfig', GoodsPage.openData.shopConfig);
    this.getYunSdk().page.__setData('guarantee', GoodsPage.openData.guarantee);
    this.getYunSdk().page.__setData('distribution', GoodsPage.openData.distribution);
    // 注册流程API
    this.getYunSdk().setPageProcess('showSKU', GoodsPage.process.showSKU);
    // 注册事件
    this.getYunSdk().setPageEvent('beforeCartSubmit', GoodsPage.events.beforeCartSubmit);
    this.getYunSdk().setPageEvent('afterBuy', GoodsPage.events.afterBuy);
  },
  data: {
    goodsInfo: {}
  },
  getYunSdk() {
    return getApp().getYouZanYunSdk();
  }
});
