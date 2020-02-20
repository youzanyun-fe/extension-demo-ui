<template>
  <div class="button-list-wrapper">
    <van-button round size="small" v-show="extendOrder" @click="process('extendOrder')">延长收货</van-button>
    <van-button round size="small" v-show="viewEvaluate" @click="process('viewEvaluate')">查看评价</van-button>
    <van-button round size="small" v-show="evaluateOrder" @click="process('evaluateOrder')">评价</van-button>
    <van-button round size="small" v-show="buyAgain" @click="process('buyAgain')">再来一单</van-button>
    <van-button round size="small" v-show="shareOrder" @click="process('shareOrder')">我要晒订单</van-button>
    <van-button round size="small" v-show="confirmOrder" @click="process('confirmOrder')">确认收货</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'button-list-demo',
  title: '底部按钮栏demo',

  data() {
    const data = window.youzanyunbridge.pageData.orderInfo;
    return {
      data: data,
      buyAgain: data.isShowBuyAgain,
      extendOrder: data.isShowExtendOrder,
      confirmOrder: data.isShowConfirmOrder,
      evaluateOrder: data.isShowEvaluateOrder,
      viewEvaluate: data.isShowViewEvaluate,
      shareOrder: data.isShowShareOrder
    };
  },

  methods: {

    process(v) {
      const { getProcess } = window.youzanyunbridge;
      const operation = getProcess(v);
      operation();
    }

  },

  components: {
    'van-button': Button
  }
};
</script>

<style lang="scss" scoped>
  .button-list-wrapper {
    margin-top: 8px;
    background: #fff;
    padding: 8px 15px;
    text-align: right;

    .van-button {
      margin: 0 5px;
    }
  }
</style>
