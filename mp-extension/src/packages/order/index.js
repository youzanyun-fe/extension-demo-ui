import OrderPage from '../../youzanyun-sdk/order-page/index';

Page({
  onLoad() {
    // 注册mock数据
    this.getYunSdk().page.__setData('buyerMsg', OrderPage.openData.buyerMsg);
    this.getYunSdk().page.__setData('goodsList', OrderPage.openData.goodsList);
    this.getYunSdk().page.__setData('delivery', OrderPage.openData.delivery);
    this.getYunSdk().page.__setData('payment', OrderPage.openData.payment);
    // 注册流程API
    this.getYunSdk().setPageProcess('createOrder', OrderPage.process.createOrder);
    this.getYunSdk().setPageProcess('getPayWays', OrderPage.process.getPayWays);
    this.getYunSdk().setPageProcess('startPay', OrderPage.process.startPay);
    this.getYunSdk().setPageProcess('selectAddress', OrderPage.process.selectAddress);
    // 注册事件
    this.getYunSdk().setPageEvent('onExpressChanged', OrderPage.events.onExpressChangedEvent);
    this.getYunSdk().setPageEvent(
      'beforeCreateOrderAsync',
      OrderPage.events.beforeCreateOrderEvent
    );
    this.getYunSdk().setPageEvent('afterCreateOrder', OrderPage.events.afterCreateOrderEvent);
    this.getYunSdk().setPageEvent('onPayItemClickAsync', OrderPage.events.onPayItemClickEvent);
  },
  data: {},
  getYunSdk() {
    return getApp().getYouZanYunSdk();
  }
});
