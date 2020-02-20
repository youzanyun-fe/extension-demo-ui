<template>
  <div class="wrapper">
    <van-icon name="checked" class="icon"/>
    <div class="title">订单支付成功</div>
    <div class="price">
      <span class="">￥</span>
      <span class="realpay">{{ amount * 0.01 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-pay-result',
  title: '支付结果',

  data() {
    const { pageData } = window.youzanyunbridge;
    const data = pageData.payResult;
    return {
      amount: data.realPayAmount
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 150px;
  text-align: center;
  background: #fff;

  .icon {
    margin: 30px 0 10px;
    font-size: 50px;
    color: #7232dd;
  }

  .title {
    font-size: 14px;
  }

  .price {
    font-size: 32px;
    font-weight: bold;
  }

}
</style>
