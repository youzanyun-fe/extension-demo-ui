<template>
  <div class="pay-wrapper">
    <div class="pay first">商品金额<span>{{ '￥' + (goodspay * 0.01).toFixed(2) }}</span></div>
    <div class="pay">运费<span>{{ '+ ￥' + (postage * 0.01).toFixed(2) }}</span></div>
    <div class="all">合计：<span>{{ '￥' + (realpay * 0.01).toFixed(2) }}</span></div>
  </div>
</template>

<script>
import { Cell } from 'vant';
export default {
  name: 'pay-demo',
  title: '价格统计',

  data() {
    const data = window.youzanyunbridge.pageData.payment;
    return {
      data: data,
      goodspay: data.goodsPay,
      realpay: data.realPay,
      postage: data.postage
    };
  },

  components: {
    'van-cell': Cell
  }
};
</script>

<style lang="scss" scoped>
.pay-wrapper {
  margin: 8px 0;
  padding: 0 15px;
  background: #fff;

  .pay {
    font-size: 12px;
    margin: 10px;

    span {
      float: right;
    }
  }

  .first {
    padding-top: 10px;
  }

  .all {
    border-top: 1px solid #fafafa;
    text-align: right;
    padding: 13px 0;
    font-size: 14px;
    color: #323233;

    span {
      font-weight: 700;
      color: #f44;
    }
  }
}
</style>
