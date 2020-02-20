<template >
  <div class="wrapper">
    <div class="opera">
      <van-button round @click="orderOneMore()">再来一单</van-button>
      <van-button round :url="detail">查看详情</van-button>
      <van-button round @click="shareOrder()">推荐给好友</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'other-operation',
  title: '其他操作',

  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      detail: data.orderDetailUrl
    };
  },

  methods: {
    shareOrder() {
      const { getProcess } = window.youzanyunbridge;
      const share = getProcess('shareOrder');
      share();
    },

    orderOneMore() {
      const { getProcess } = window.youzanyunbridge;
      const oneMore = getProcess('orderOneMore');
      oneMore();
    }
  },

  components: {
    'van-button': Button
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 70px;
  padding-top: 80px;
  background: #fff;
  margin-bottom: 10px;

  .opera {
    text-align: center;
  }

  .van-button--normal {
    margin-right: 10px;
    color: #7232dd;
  }
}
</style>
