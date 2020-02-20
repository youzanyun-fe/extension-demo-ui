Component({
  data: {
    beforeCreateOrderAsyncData: "",
    afterCreateOrderData: "",
    onPayItemClickAsyncData: "",
    afterOrderPaidData: ""
  },

  ready() { this.eventListener() },

  methods: {
    // 监听事件
    eventListener() {
      const yunSdk = this.getYunSdk()

      // 创建订单前触发事件
      yunSdk.page.events.beforeCreateOrderAsync.on('listenBeforeCreateOrderAsync', () => {
        this.setData({
          beforeCreateOrderAsyncData: "已触发"
        })
        // return Promise.reject() // 阻断下单
      });

      // 创建订单后触发
      yunSdk.page.events.afterCreateOrder.on('listenAfterCreateOrder', (args) => {
        this.setData({
          afterCreateOrderData: JSON.stringify(args)
        })
      });

      // 点击支付方式时触发
      yunSdk.page.events.onPayItemClickAsync.on('listenOnPayItemClickAsync', (args) => {
        this.setData({
          onPayItemClickAsyncData: JSON.stringify(args)
        })
        // return Promise.reject() // 拦截支付
      });

      // 支付后，跳转结果页前触发
      yunSdk.page.events.afterOrderPaid.on('listenAfterOrderPaid', () => {
        this.setData({
          afterOrderPaidData: "已触发"
        })
        return Promise.reject() // 阻止跳转
      });
    },

    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
