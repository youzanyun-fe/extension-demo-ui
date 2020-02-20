<template>
  <van-cell title="支付方式:" :value="data" />
</template>

<script>
import { Cell } from 'vant';
export default {
  name: 'pay-way',
  title: '支付方式',

  data() {
    const { payWayPrompt } = window.youzanyunbridge.pageData.payResult;
    return {
      data: payWayPrompt
    };
  },

  components: {
    'van-cell': Cell
  }
};
</script>

<style>

</style>
