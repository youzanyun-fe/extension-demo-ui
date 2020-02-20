Component({
  data: {
    loading: false,// 加载
    realPay: 0,// 实付金额，单位：分
    isShowPayWays: false, //显示支付sheet
    actions: [],// sheet菜单选项
    isSuccessPay: "",
    payWays:""
  },

  lifetimes: {
    // 获取显示支付金额并监听
    attached: function attached() { this.initRealPay() },
    // 解除监听
    detached: function detached() { this.removeWatch() }
  },

  methods: {
    // 提交订单
    onSubmit() {
      this.createOrder()
    },

    // 创建订单
    createOrder() {
      const createOrder = this.getYunSdk().page.getProcess('createOrder');
      createOrder().then(() => {
        // 获取支付方式
        this.getPayWays()
      })
    },

    // 创建订单后调用获取支付方式
    getPayWays() {
      const getPayWays = this.getYunSdk().page.getProcess('getPayWays');
      getPayWays().then(res => {
        // 查看数据结构
        this.setData({
          payWays:JSON.stringify(res)
        })

        // 将支付方式弹出显示
        this.actionSheetContent(res.payWays)
      });
    },

    // action-sheet 内容生成
    actionSheetContent(payWays) {
      let payActions = []
      payWays.forEach(pay => {
        let payItem = {}
        payItem.name = pay.payChannelName
        payItem.payChannel = pay.payChannel
        payActions.push(payItem)
      });
      this.setData({
        actions: payActions
      }, () => {
        this.setData({
          isShowPayWays: true // 显示action-sheet
        })
      })
    },

    // 选中支付方式
    onSelectActionSheet(event) {
      this.onCloseActionSheet()
      // 发起支付
      this.startPay(event.detail)
    },

    // 发起支付
    startPay(pay) {
      const startPay = this.getYunSdk().page.getProcess('startPay');
      startPay({ payChannel: pay.payChannel }).then(res => {
        this.setData({
          isSuccessPay: "成功支付"
        })
      }).catch(err => {
        this.setData({
          isSuccessPay: "失败支付"
        })
      });
    },

    // 关闭action-sheet
    onCloseActionSheet() {
      this.setData({
        isShowPayWays: false
      })
    },

    // 获取显示支付金额
    initRealPay() {
      this.setData({
        realPay: this.getYunSdk().page.payment.realPay
      })
      // 监听支付金额
      this.unwatchPayment = this.getYunSdk().page.watch('payment', (newVal, oldVal) => {
        this.setData({
          realPay: newVal.realPay
        })
      })
    },

    // 解除监听
    removeWatch() {
      this.unwatchPayment()
    },

    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
