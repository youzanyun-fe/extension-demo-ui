<template>
  <div class="goods-wrapper">
    <div v-for="(item, index) in list" :key="index" class="card">
      <van-card
        :price="(item.payPrice * 0.01).toFixed(2) + ''"
        :title="item.title"
        :thumb="item.imgUrl"
        :num="item.num"
      />
    </div>
    <van-cell title="配送方式" :value="data.delivery.expressType === 'express' ? '快递配送' : '自提'"/>
  </div>
</template>

<script>
import { Card, Cell } from 'vant';
export default {
  name: 'buy-goods-detail',
  title: '商品信息',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data,
      list: data.goodsList
    };
  },

  components: {
    'van-card': Card,
    'van-cell': Cell
  }

};
</script>

<style lang="scss" scoped>
.goods-wrapper {
  margin-bottom: 8px;

  .card {
    margin-bottom: 10px;
  }
}
</style>
