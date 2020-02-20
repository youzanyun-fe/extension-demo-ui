<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect(id)"
  />
</template>

<script>
import { AddressList, Toast } from 'vant';
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        // 此数据应为接口请求而来，demo仅做演示
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    };
  },

  methods: {
    onAdd() {
      Toast('新增地址,使用vant的AddressEdit组件');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onSelect() {
      const { getProcess } = window.youzanyunbridge;
      const select = getProcess('selectAddress');
      select(this.chosenAddressId);
    }
  },

  components: {
    'van-address-list': AddressList
  }
};
</script>

<style lang="scss" scoped>

</style>
