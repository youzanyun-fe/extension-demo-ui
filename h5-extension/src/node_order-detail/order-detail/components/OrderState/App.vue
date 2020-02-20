<template>
  <div class="order-state-wrapper">
    <van-icon name="label" class="icon"/>
    <h3 class="text">{{ active }}</h3>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  name: 'order-state-demo',
  title: '订单状态demo',

  data() {
    const { pageData } = window.youzanyunbridge;
    const data = pageData.orderInfo;
    return {
      data: data,
      active: data.stateStr
    };
  },

  components: {
    'van-icon': Icon
  }
};
</script>

<style lang="scss" scoped>
.order-state-wrapper {
  display: flex;
  align-items: center;
  height: 100px;
  background: #fff;
  margin-top: 8px;
  padding: 0 10px;

  .icon {
    font-size: 40px;
    margin-right: 8px;
    color: #7232dd;
  }

  .text {
    display: inline-block;
  }
}
</style>
