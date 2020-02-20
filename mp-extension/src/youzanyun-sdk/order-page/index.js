function Event() {
  this.on = () => {
    console.log('events callback');
  };

  this.trigger = () => {
    console.log('trigger events');
  };
}

export default {
  openData: {
    buyerMsg: '',
    delivery: {
      address: {
        addressDetail: '黄龙万科中心G座18楼',
        areaCode: '330106',
        city: '杭州市',
        community: '',
        country: '中国',
        province: '浙江省',
        county: '西湖区',
        recipients: '瘦马',
        tel: '15658882222'
      },
      expressType: 'express',
      selfFetch: {}
    },
    goodsList: [
      {
        alias: '2xf6ceccujpia',
        goodsId: 487713936,
        imgUrl: 'https://img.yzcdn.cn/upload_files/2019/07/23/FvR2b7zWH8QevCu96wm4ZLbrdS_c.jpg',
        num: 1,
        payPrice: 1,
        skuId: 36331493,
        title: 'jake衣服'
      }
    ],
    payment: {
      realPay: 99,
      postage: 0
    }
  },
  process: {
    createOrder() {
      console.log('createOrder');
      return new Promise(resolve => {
        resolve({ orderNo: 'E2019081900001111' });
      });
    },
    getPayWays() {
      console.log('getPayWays');
      return new Promise(resolve => {
        resolve([
          { payChannel: 'WX_APPLET', payChannelName: '微信支付' },
          { payChannel: 'BANK_CARD', payChannelName: '银行卡支付' }
        ]);
      });
    },
    startPay() {
      console.log('startPay');
    },
    selectAddress() {
      console.log('selectAddress');
    }
  },
  events: {
    onExpressChangedEvent: new Event(),
    beforeCreateOrderEvent: new Event(),
    afterCreateOrderEvent: new Event(),
    onPayItemClickEvent: new Event()
  }
};
