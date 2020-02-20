<template>
  <div class="sub-wrapper">
    <van-submit-bar
      :price="data"
      label="共计："
      button-text="提交"
      class="btn"
      @submit="onSubmit"
      safe-area-inset-bottom="true"
    />
  </div>
</template>

<script>
import { SubmitBar } from 'vant';
export default {
  name: 'buy-submit-demo',
  title: '提交订单demo',

  data() {
    const data = window.youzanyunbridge.pageData.payment;
    return {
      data: data.realPay
    };
  },

  created() {
    const { getProcess, events } = window.youzanyunbridge;
    const getPayWays = getProcess('getPayWays');
    const startPay = getProcess('startPay');
    events.beforeCreateOrderAsync.on('listenBeforeCreateOrderAsync', (args) => {
      console.log('beforeCreateOrderAsync', args);
      /* 异步方法reject的方式可以终止后续事件执行
             * 即此时return Promise.reject()，则不会继续创建订单
             */
      // return Promise.reject();
    });

    events.afterCreateOrder.on('afterCreateOder', (args) => {
      // 在生成订单后触发
      console.log('afterCreateOrder', args);
      getPayWays().then(res => {
        // 订单创建成功后直接获取支付方式
        console.log('getpayWays', res);
        startPay(); // 开始支付
      });
    });

    events.onPayItemClickAsync.on('onPayItemClickAsync', (args) => {
      // 当选择某种支付方式点击时触发
      console.log('onPayItemClickAsync', args);
      // return Promise.reject();
    });
  },

  methods: {
    onSubmit() {
      const { getProcess } = window.youzanyunbridge;
      const createOrder = getProcess('createOrder');
      const startPay = getProcess('startPay');
      createOrder().then(res => {
      // 订单创建成功后暴露的数据，目前里面只有 orderNo
        console.log('createOrder', res.data);
        startPay(); // 开始支付
      });
    }
  },

  components: {
    'van-submit-bar': SubmitBar
  }
};
</script>

<style lang="scss" scoped>
.sub-wrapper {
  position: fixed;
  bottom: 0;

  .btn {
    .van-button {
      background: #7232dd !important;
    }
  }
}
</style>
