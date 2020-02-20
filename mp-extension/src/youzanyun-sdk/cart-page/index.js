export default {
  openData: {
    goodsList: [
      {
        "kdtId": 16719442,
        "shopName": "YZ测试心怡画坊",
        "goodsList": [
          {
            "kdtId": 16719442,
            "channelId": 0,
            "goodsId": 495629826,
            "skuId": 36345053, "storeId": 0,
            "title":
              "待升级海淘商品1566368075000",
            "num": 4,
            "stock": 1000,
            "limitNum": 0,
            "price": 100000,
            "payPrice": 100000,
            "originPrice": 100000,
            "sku": "",
            "checked": true,
            "maxNum": 1000,
            "imgUrl": "",
            "unique": "16719442-495629826-36345053-0",
            "messages": "{}",
            "alias": "2x8zxonb9tbs2",
            "goodsType": 0,
            "activityId": 0,
            "activityType": "1",
            "activityTag": "",
            "settlementRule": { "crossStore": false, "settlementMark": "HAITAO" },
            "tariffPrice": 10714,
            "tariffRule": 1
          },
        ],
        "activities": []
      }
    ]
  },
  process: {
    selectGoods() {
      console.log('selectGoods');
      return Promise.resolve()
    },
    cancelSelectGoods() {
      console.log('cancelSelectGoods');
      return Promise.resolve()
    },
    setGoodsNum() {
      console.log('setGoodsNum');
      return Promise.resolve()
    },
    createAndGoOrder() {
      console.log('createAndGoOrder');
      return Promise.resolve()
    },
  },
};
