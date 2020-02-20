<template>
  <div class="order-infor-wrapper">
    <van-cell border="false" class="order-infor">
      <p>订单编号：{{ data.orderNo }}</p>
      <p>创建时间：{{ create }}</p>
      <p>付款时间：{{ pay }}</p>
    </van-cell>
    <div class="im" @click="showIm">对此订单有疑问？</div>
  </div>
</template>

<script>
import { Cell, Button } from 'vant';
import moment from 'moment';
export default {
  name: 'order-infor-demo',
  title: '订单信息demo',

  data() {
    const data = window.youzanyunbridge.pageData.orderInfo;
    return {
      data: data,
      create: moment(data.createTime).format('YYYY-MM-DD HH:mm:ss'),
      pay: data.payTime === 0 ? '交易已关闭' : moment(data.payTime).format('YYYY-MM-DD HH:mm:ss')
    };
  },

  methods: {

    showIm() {
      const { getProcess } = window.youzanyunbridge;
      const IM = getProcess('showIM');
      IM();
    }
  },

  components: {
    'van-cell': Cell,
    'van-button': Button
  }
};
</script>

<style lang="scss" scoped>
  .order-infor-wrapper {
    margin-top: 8px;

    .order-infor {
      font-size: 12px;
      line-height: 24px;

      p {
        color: #666;

        .button {
          margin-left: 8px;
        }
      }
    }

    .im {
      flex: 1;
      position: relative;
      padding: 10px 15px;
      text-align: center;
      background: #fff;
      color: #38f!important;
      line-height: 24px;
    }
  }
</style>
