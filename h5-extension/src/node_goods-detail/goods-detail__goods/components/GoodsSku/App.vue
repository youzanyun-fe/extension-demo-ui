<template class="wrapper">
  <div>
    <van-cell is-link @click="showSKU('selectSku')">
      <span>选择规格</span>
    </van-cell>
    <van-cell title="配送方式：">
      <span v-if="issupportExpress">快递</span>
      <span v-else-if="issupportSelfFetch">自提</span>
      <span v-else-if="issupportLocalDelivery">同城配送</span>
    </van-cell>
  </div>
</template>

<script>
import { Cell } from 'vant';
export default {
  name: 'goods-sku',
  title: '商品规格',

  data() {
    const { pageData } = window.youzanyunbridge;
    const data = pageData.distribution;
    return {
      data: data,
      issupportExpress: data.supportExpress,
      issupportSelfFetch: data.supportSelfFetch,
      issupportLocalDelivery: data.supportLocalDelivery
    };
  },

  created() {
    // 商详页的events，在预下单（生成book_key）之后触发。
    const { events } = window.youzanyunbridge;
    events.beforeCartSubmit.on('beforeCartSubmit', (param) => {
      console.log('beforeCartSubmit args:', param);
    });
    events.afterBuy.on('afterBuy', (param) => {
      console.log('afterBuy args:', param);
    });
  },

  methods: {
    showSKU(next) {
      const showSku = window.youzanyunbridge.getProcess('showSKU');
      showSku(next).then(res => {
        console.log('此流程必须使用sku模块才可以激活，sku模块底部的按钮会根据你的不同入参来返回不同的结果，如:::', next);
      });
    }
  },

  components: {
    'van-cell': Cell
  }
};
</script>

<style>

</style>
