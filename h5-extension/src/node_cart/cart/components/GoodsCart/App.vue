<template>
  <div class="list-wrapper">
    <van-cell :title="data.shopName" v-show="this.list.length !== 0">
      <span @click="Batch()">{{ del ? '取消' : '批量删除' }}</span>
      <span class="empty" @click="Empty()">清空购物车</span>
    </van-cell>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <van-checkbox
        v-show="del"
        v-model="item.delChecked"
        class="item-checkbox"
        checked-color="#4f4"
        @click="delSelect(item)"
      />
      <van-swipe-cell>
        <van-checkbox
          :value="item.goods_id"
          v-model="item.isChecked"
          class="item-checkbox"
          checked-color="#f44"
          @click="select(item)"
        />
        <van-card
          class="item-card"
          :price="(item.origin_price * 0.01).toFixed(2) + ''"
          :title="item.title"
          :thumb="item.thumb_url"
        >
          <div slot="footer">
            <van-stepper v-model="item.num" :max="item.stock_num" @change="numChange(item)"/>
          </div>
        </van-card>
        <van-button
          slot="right"
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="Delete(item, index)"
        />
      </van-swipe-cell>
    </div>
    <van-submit-bar
      class="subbtn"
      label="共计："
      v-show="this.list.length !== 0"
      :price="3050"
      :button-text="del ? '批量删除' : '提交订单'"
      @submit="onSubmit()"
    >
      <!-- 里面的price是假的，需要接口返回具体数据 -->
      <van-checkbox v-model="allChecked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { SwipeCell, Card, Stepper, Button, Checkbox, SubmitBar, Cell } from 'vant';
export default {
  name: 'demo-cart-goodslist',
  title: '购物车demo',

  data() {
    const pageData = window.youzanyunbridge.pageData;
    return {
      data: pageData.goodsList[0],
      list: pageData.goodsList[0].items,
      selected: [],
      allChecked: false,
      delList: [],
      delIndexList: [],
      del: false
    };
  },

  methods: {
    Batch() {
      this.del = !this.del;
    },

    delSelect(item, index) {
      const ind = this.delList.indexOf(item);
      if (ind === -1) {
        this.delList.push(item);
      } else {
        this.delList.splice(ind, 1);
      };
      console.log(this.delList);
    },

    Empty() {
      const { getProcess } = window.youzanyunbridge;
      const emptyCart = getProcess('emptyCart');
      emptyCart().then(() => {
        this.list = [];
      });
    },

    Delete(item, index) {
      const { getProcess } = window.youzanyunbridge;
      const deleteOne = getProcess('deleteGoods');
      const { kdt_id, goods_id, sku_id, activity_id } = item;
      const goods = {
        kdt_id,
        goods_id,
        sku_id,
        activity_id
      };
      console.log(goods);
      deleteOne({ goods }).then(() => {
        this.list.splice(index, 1);
      });
    },

    numChange(item) {
      const { getProcess } = window.youzanyunbridge;
      const numchange = getProcess('setGoodsNum');
      const { kdt_id, goods_id, sku_id, activity_id } = item;
      const goods = {
        kdt_id,
        goods_id,
        sku_id,
        activity_id
      };
      numchange({
        val: item.num,
        goods
      });
      console.log('当前商品购买' + item.num + '件');
    },

    // 单选
    select(item) {
      const { getProcess } = window.youzanyunbridge;
      const selectGoods = getProcess('selectGoods');
      const cancelSelectGoods = getProcess('cancelSelectGoods');
      const { kdt_id, goods_id, sku_id, activity_id } = item;
      const goods = {
        kdt_id,
        goods_id,
        sku_id,
        activity_id
      };
      if (this.selected.indexOf(item) === -1) {
        this.selected.push(item);
        selectGoods({
          rangeType: 'single',
          goods
        });
        console.log('selectGoods');
      } else {
        this.selected.splice(this.selected.indexOf(item), 1);
        cancelSelectGoods({
          rangeType: 'single',
          goods
        });
        console.log('cancelSelectGoods');
      };
      if (this.selected.length < this.list.length) {
        this.allChecked = false;
      } else {
        this.allChecked = true;
      }
      console.log(this.selected);
    },

    // 全选和反选
    checkAll() {
      const list = this.list;
      const { getProcess } = window.youzanyunbridge;
      const selectGoods = getProcess('selectGoods');
      const cancelSelectGoods = getProcess('cancelSelectGoods');
      if (this.allChecked) {
        list.forEach(item => {
          item.isChecked = false;
        });
        this.selected = [];
        cancelSelectGoods({
          rangeType: 'all'
        });
        console.log('cancelSelectGoods All');
      } else {
        list.map(item => {
          item.isChecked = true;
          if (this.selected.indexOf(item) === -1) {
            this.selected.push(item);
          }
        });
        selectGoods({
          rangeType: 'all'
        });
        console.log('selectGoods All');
        console.log(this.selected);
      }
    },

    onSubmit() {
      const { getProcess } = window.youzanyunbridge;
      const batchDel = getProcess('batchDeleteGoods');
      const create = getProcess('createOrder');
      if (this.del) {
        const goodsList = [];
        this.delList.map(item => {
          const { kdt_id, goods_id, sku_id, activity_id } = item;
          const goods = {
            kdt_id,
            goods_id,
            sku_id,
            activity_id
          };
          goodsList.push(goods);
        });
        console.log(goodsList);
        batchDel({ goodsList }).then(res => {
          this.delList.map(item => {
            if (this.list.indexOf(item) !== -1) {
              this.list.splice(this.list.indexOf(item), 1);
            }
          });
          this.del = false;
        });
      } else {
        create().then(res => {
          console.log(res);
        });
      }
    }
  },

  components: {
    'van-swipe-cell': SwipeCell,
    'van-card': Card,
    'van-cell': Cell,
    'van-stepper': Stepper,
    'van-button': Button,
    'van-checkbox': Checkbox,
    'van-submit-bar': SubmitBar
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  margin: 0 12px;

  .empty {
    margin-left: 5px;
  }

  .list-item {
    margin-bottom: 12px;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;

    .item-checkbox {
      float: left;
      height: 120px;
      width: 44px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item-card {
      box-sizing: content-box;
      min-height: 96px;
      padding: 12px 12px 12px 0;
      margin-top: 0;
      margin-left: 44px;
      background: #fff;

      .van-card__price{
        color: #f44;
      }
    }

    .delete-button {
      height: 100%;
    }
  }

  .subbtn {
    .van-button {
      border-color: #7232dd !important;
      background: #7232dd !important;
    }
  }
}
</style>
