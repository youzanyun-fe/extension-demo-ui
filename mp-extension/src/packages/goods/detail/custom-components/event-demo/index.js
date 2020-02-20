Component({
  data: {
    beforeCartSubmitData: "",
    afterBuyData: ""
  },

  ready() { this.eventListener() },
  
  methods: {
    // 监听事件
    eventListener() {
      const yunSdk = this.getYunSdk()

      // 保存购物车数据之前触发
      yunSdk.page.events.beforeCartSubmit.on('listenBeforeCartSubmit', (args) => {
        this.setData({
          beforeCartSubmitData: JSON.stringify(args)
        })
        // return Promise.reject() // 阻止加入购物车
      });

      // 预下单（生成book_key）之后触发。
      yunSdk.page.events.afterBuy.on('listenAfterBuy', (args) => {
        this.setData({
          afterBuyData: JSON.stringify(args)
        })
      });
    },

    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
