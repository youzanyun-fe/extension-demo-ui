<template>
  <van-goods-action>
    <van-goods-action-icon icon="friends-o" text="客服" @click="showIM"/>
    <van-goods-action-icon icon="gem-o" text="店铺" @click="shopurl" />
    <van-goods-action-button type="warning" color="#be99ff" text="购物车" @click="showSKU('addCart')"/>
    <van-goods-action-button type="danger" color="#7232dd" text="购买按钮" @click="showSKU('buy')"/>
  </van-goods-action>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant';

export default {
  name: 'goods-detail-action',
  title: '底部操作栏',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data
    };
  },

  // 在events中，事件里面的参数不需要自己去拿，在他规定的触发时间会自己拿到。
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
    shopurl() {
      Toast('控制台里打印了关于店铺的基本信息:头像，名称，跳转的链接');
      console.log(this.data.shop);
      // window.location.href = this.data.shop.url;
    },

    showIM() {
      const { getProcess } = window.youzanyunbridge;
      const IM = getProcess('showIM');
      IM().then(res => {
        // console.log(res);
      });
    },

    // 在getProcess中的函数里，若需参数需要在调用的时候传进来
    showSKU(next) {
      const showSku = window.youzanyunbridge.getProcess('showSKU');
      showSku(next).then(res => {
        console.log('该流程会根据你的不同入参来返回不同的结果，如:', next);
      });
    }
  },

  components: {
    'van-goods-action': GoodsAction,
    'van-goods-action-icon': GoodsActionIcon,
    'van-goods-action-button': GoodsActionButton
  }
};
</script>

<style lang="scss" scoped>
  .van-goods-action {
    z-index: 10;
  }
</style>
