<template>
  <van-sticky class="wrapper">
    <span class="prosen">
      <van-image round :src="avatar" tag="" class="img"/>
      <span class="nick">{{ nick }}</span>
    </span>
  </van-sticky>
</template>

<script>
import { Image, Icon, Sticky } from 'vant';
export default {
  name: 'personal-information',
  title: '个人信息',

  data() {
    const { getData } = window.youzanyunbridge;
    const user = getData('user');
    return {
      user: user,
      nick: user.nickName,
      avatar: user.avatar
    };
  },

  methods: {
  },

  components: {
    'van-image': Image,
    'van-icon': Icon,
    'van-sticky': Sticky
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  width: calc(100% - 16px);
  height: 20px;
  padding: 8px 15px;
  background: #fff;
  font-size: 14px;
  color: #666;
  line-height: 20px;

  .prosen {
    float: left;

    .img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      vertical-align: middle;
    }

    .nick {
      vertical-align: middle
    }
  }

  .other {
    float: right;

    .icon {
      font-weight: bold;
    }

    .other-text {
      margin: 0 5px;
    }
  }

};

</style>
