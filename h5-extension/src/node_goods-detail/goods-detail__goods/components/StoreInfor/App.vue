<template>
  <div class="store-wrapper">
    <van-cell
      class="store"
      :title="shop.name"
      :icon="shop.logo"
      :url="shop.url"
      size="large"
      center
      is-link
    />
    <van-cell class="config">
      <div v-show="shopConfig.isSecuredTransactions">已加入担保交易</div>
      <div v-show="shopConfig.supportFreightInsurance">支持运费险</div>
      <div v-show="shopConfig.hasPhysicalStore">有线下门店</div>
    </van-cell>
  </div>

</template>

<script>
import { Cell } from 'vant';
export default {
  name: 'store-infor-demo',
  title: '店铺信息',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data,
      shop: data.shop,
      shopConfig: data.shopConfig
    };
  },

  components: {
    [Cell.name]: Cell
  }
};
</script>

<style lang="scss" scoped>
.store-wrapper {
  margin: 8px 0;

  .store {
    height: 70px;

    .van-cell__left-icon {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%
      }
    }

    .config {
      font-size: 14px;
    }
  }
}
</style>
