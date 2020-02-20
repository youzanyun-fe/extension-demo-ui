<template>
  <div>
    <van-cell
      class="address-wrapper"
      icon="location-o"
      :title="'收货人：' + address.recipients"
      title-class="title"
      :value="address.tel"
      value-class="value"
      :label="'收货地址：' + address.city + address.county + address.addressDetail "
      label-class="label"
      size="large"
      is-link
      @click="changeAdd()"
    />
    <Comp v-show="addList"/>
  </div>
</template>

<script>
import { Cell } from 'vant';
import Comp from './AddressList';
export default {
  name: 'buy-address-demo',
  title: '地址信息',
  data() {
    const data = window.youzanyunbridge.pageData;
    return {
      data: data,
      address: data.delivery.address,
      addList: false
    };
  },

  methods: {
    changeAdd() {
      console.log('进行地址修改，可用vant的AddressList组件,地址数据应从接口调用，本demo仅做展示');
      this.addList = !this.addList;
    }
  },
  components: {
    [Cell.name]: Cell,
    Comp
  }
};
</script>

<style lang="scss" scoped>
.address-wrapper {
  padding: 15px;
  margin-bottom: 8px;

  .title {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 5px;
  }

  .value{
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 5px;
    color: #323233;
  }

  .label {
    color: #666;
    margin-top: 8px;
    font-size: 12px;
    line-height: 16px;
    word-break: break-all;
  }

  .van-icon-arrow {
    margin-top: 15px;
  }
}
</style>
