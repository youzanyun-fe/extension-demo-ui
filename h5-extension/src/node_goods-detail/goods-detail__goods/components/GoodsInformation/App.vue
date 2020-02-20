<template>
  <div class="wrapper">
    <div class="price">￥{{ price }}</div>
    <div class="title van-multi-ellipsis--l2">{{ title }}</div>
    <div class="subtitle">{{ sellPoint }}</div>
    <div class="refund" v-show="isSupport"><van-icon name="checked" />支持退款</div>
  </div>
</template>

<script>
import { Icon, Tag } from 'vant';
export default {
  name: 'goods-detail_infor',
  title: '基础信息',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      goodsdata: data,
      price: data.goodsItem.origin,
      title: data.goodsItem.title,
      sellPoint: data.goodsItem.sellPoint,
      isSupport: data.refund.isSupport
    };
  },

  components: {
    'van-icon': Icon,
    'van-tag': Tag
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    width: calc(100% - 32px);
    height: 154px;
    padding: 8px 16px;
    background: #fff;

    .price {
      font-size: 22px;
      font-weight: 600;
      color: #ee0a24;
    }

    .title {
      margin: 30px 0 8px 0;
      width: 300px;
      max-height: 40px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 600;
    }

    .subtitle {
      font-size: 13px;
      line-height: 18px;
      color: #969799;
    }

    .will {
      color: #ee0a24;
    }

    .refund {
      color: #ee0a24;
      font-size: 12px;
      margin-top: 10px;
    }
  }
</style>
