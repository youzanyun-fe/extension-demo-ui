<template>
  <div class="buttons-wrapper">
    <div>
      <van-button v-if="contains('btns.actBuy')">活动购买</van-button>
      <van-button v-if="contains('btns.normalBuy')">立即购买</van-button>
      <van-button v-if="contains('pointsBuy')">积分购买</van-button>
      <van-button v-if="contains('giftBuy')">送给好友</van-button>
      <van-button v-if="contains('addWish')">加入愿望单</van-button>
      <van-button v-if="contains('share')">分享一下</van-button>
      <van-button v-if="contains('reservation')">开始预约</van-button>
      <van-button v-if="contains('startCut')">开始砍价</van-button>
    </div>
    <van-button @click="trigger()" class="btns" size="small" round>切换按钮栏</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'goods-buttons',
  title: '底部按钮合集',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data,
      btns: data.buttons
    };
  },

  methods: {
    contains(v) {
      if (this.btns.indexOf(v) !== -1) {
        return true;
      } else {
        return false;
      }
    },

    trigger() {
      const { componentApi } = window.youzanyunbridge;
      const show = true;
      if (show === true) {
        componentApi.SubmitBlock.hideGoodsBottomBtns();
      } else {
        componentApi.SubmitBlock.showGoodsBottomBtns();
      }
    }
  },

  components: {
    [Button.name]: Button
  }

};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  bottom: 0;

  .btns {
    position: fixed;
    bottom: 50px;
    right: 30px;
  }
}
</style>
