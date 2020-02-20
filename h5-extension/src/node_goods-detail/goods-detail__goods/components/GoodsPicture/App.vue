<template>
  <div class="wrapper">
    <van-image :src="pic" class="img" tags="" />
  </div>
</template>

<script>
import { Image } from 'vant';
export default {
  name: 'goods-detail-picture',
  title: '商品头图',

  data() {
    const { pageData } = window.youzanyunbridge;
    return {
      pic: pageData.goodsItem.picture
    };
  },

  components: {
    'van-image': Image
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 375px;
    margin: 36px 0 8px;

    .img {
      width: 100%;
      height: 100%;
    }
  }
</style>
