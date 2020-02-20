<template>
  <div class="goods-infor-wrapper">
    <van-cell :title="shop" icon="shop-o" />
    <div v-for="(goods, index) in goods" :key="index">
      <van-card
        :num="goods.num"
        :price="pay.goodsPay"
        :title="goods.goodsInfo.shortTitle"
        :thumb="goods.goodsInfo.imgUrl"
      >
        <van-button
          round
          plain
          size="mini"
          color="#ed5050"
          v-show="goods.isShowRefund"
          @click="refund(goods.itemId)"
        >申请退款</van-button>
      </van-card>
    </div>
    <van-cell class="cell">商品小计：<span>￥{{ (pay.realPay * 0.01).toFixed(2) }}</span></van-cell>
  </div>
</template>

<script>
import { Cell, Card, Button } from 'vant';
export default {
  name: 'goods-infor-demo',
  title: '商品信息栏demo',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data,
      shop: data.shopInfo.shopName,
      pay: data.paymentInfo,
      goods: data.goodsList
    };
  },

  methods: {
    refund(v) {
      const Refund = window.youzanyunbridge.getProcess('showRefund');
      Refund(v);
    }
  },

  components: {
    'van-cell': Cell,
    'van-button': Button,
    'van-card': Card
  }
};
</script>

<style lang="scss" scoped>
.goods-infor-wrapper {
  margin: 8px 0;

  .cell {
    font-size: 14px;
    color: #666;

    .van-cell__value--alone {
      text-align: right;
    }

    span {
      color: #f44;
      font-weight: 700;
    }
  }
}
</style>
