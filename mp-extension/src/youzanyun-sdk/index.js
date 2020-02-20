import YunSdkPageData from './sdk-page-data';
import YunAppContainer from './yun-app-container';

// 定制页面列表
const CUSTOM_PAGE_WHITELIST = [
  'packages/goods/detail/index',
  'packages/goods/lucky-draw-group/index',
  'packages/goods/seckill/index',
  'packages/goods/help-cut/index',
  'packages/goods/groupon/index',
  'packages/goods/tuan/index',
  'packages/goods/present/index',
  'packages/goods/points/index',
  'pages/goods/cart/index',
  'packages/order/index'
];

const PAGE_MAP = {
  login: '/pages/account/login/index',
  cart: '/pages/goods/cart/index',
  buy: '/packages/order/index',
  goodsDetail: '/packages/goods/detail/index',
  userCenter: '/pages/usercenter/dashboard/index',
  orderList: '/packages/trade/order/list/index',
  cardPackages: '/packages/card/all/index',
  userCounponList: '/packages/user/coupon/list/index',
  addressList: '/packages/order/address-list/index',
  refundList: '/packages/trade/refund/list/index',
  userSettings: '/packages/user/membercenter/setting/index',
  accountSettings: '/packages/account/settings/index'
};

export default class YouzanyunBridge {
  constructor({ app }) {
    this.__yunapp__ = app;
    // this.__defaultPage__ = '';
    /**
     * 定制页面的数据管理单元
     */
    this.__yunpages__ = {};
    this.app = new YunAppContainer();
    this.page = null;
    this.__process__ = {};
    this.__init();
  }

  __init() {
    // 更新app全局开放数据
    this.__initApp();

    // 访问page代理到缓存的当前页面数据
    Object.defineProperty(this, 'page', {
      get: () => {
        return this.__currentPage();
      }
    });
  }

  __initApp() {
    // { kdtId: 0 }
    this.app.shop = { kdtId: 0 };

    /*
     *{
     *  gender: '',
     *  avatar: '',
     *  mobile: '',
     *  nickName: ''
     *}
     */
    this.app.user = {
      gender: '',
      avatar: '',
      mobile: '',
      nickName: ''
    };
  }

  getApp() {
    return this.app;
  }

  /**
   * 更安全的获取page数据对象
   * @param {*} pageId 小程序page实例ID
   */
  getPage(pageId) {
    const currentPage = getCurrentPages().find(pg => pg.__pageId === pageId);
    return currentPage ? currentPage.__yunPageData__ : null;
  }

  /**
   * 更新店铺信息
   */
  setAppShopInfo(shop = {}) {
    Object.assign(this.app.shop, shop);
  }

  /**
   * 更新用户信息
   */
  setAppUserInfo(userInfo = {}) {
    const user = this.app.user;
    user.gender = userInfo.gender;
    user.avatar = userInfo.avatar;
    user.mobile = userInfo.mobile;
    user.nickName = userInfo.nickName;
  }

  /* setPage(page) {
    if (CUSTOM_PAGE_WHITELIST.indexOf(page) >= 0) {
      this.__defaultPage__ = page;
    } else {
      this.__defaultPage__ = '';
    }
  } */

  setPageProcess(processName, func) {
    if (!processName || !func) {
      return;
    }

    const currentPage = this.__currentPage();
    if (!currentPage) {
      return;
    }

    currentPage.__addProcess(processName, func);
  }

  /**
   * 注册页面事件
   */
  setPageEvent(eventName, event) {
    if (!eventName || !event) {
      return;
    }

    const currentPage = this.__currentPage();
    if (!currentPage) {
      return;
    }

    currentPage.__setEvent(eventName, event);
  }

  setPageData(ctx, dataKey, expression) {
    const registeredArray = [];
    if (typeof dataKey !== 'string' && Object.keys(dataKey).length > 0) {
      for (let key in dataKey) {
        if (Object.prototype.hasOwnProperty.call(dataKey, key)) {
          registeredArray.push([key, dataKey[key]]);
        }
      }
    } else if (typeof dataKey === 'string' && expression) {
      registeredArray.push([dataKey, expression]);
    }

    const currentPage = this.__currentPage();
    registeredArray.forEach(([key, exp]) => {
    });
  }

  /**
   * 重置当前页面对象
   */
  resetPage() {
    let currentPage = this.__currentPage();
    if (currentPage) {
      currentPage = null;
    }
  }

  /**
   * 跳转页面
   */
  navigate(pageName, args, type = 'navigateTo') {
    //
    wx[type]({ url: PAGE_MAP[pageName] });
  }

  /**
   * 像下单页选择地址使用新的page，然后通过同步trigger方式更新数据，而后才返回下单页，这种场景话会引起yunpage使用时的混乱，因此引入了__currentPage选取模式
   * 基于getCurrentPages()和CUSTOM_PAGE_WHITELIST找到最匹配的元素，如果定制页面之间互相存在同步更新数据的情况，会有不可预料的问题
   */
  __currentPage() {
    // 从栈顶开始取
    const currStackPage = arrayFindLast(getCurrentPages(), pg => CUSTOM_PAGE_WHITELIST.indexOf(pg.route) >= 0);
    if (currStackPage) {
      /* const pageRoute = currStackPage.route;
      if (!this.__yunpages__[pageRoute]) {
        this.__yunpages__[pageRoute] = new YunSdkPageData();
      } */

      // pageData对象挂到页面实例上
      if (!currStackPage.__yunPageData__) {
        currStackPage.__yunPageData__ = new YunSdkPageData();
      }
      return currStackPage.__yunPageData__;
    }

    return null;
  }
}

// 找到数据组中最后一个符合条件的元素
function arrayFindLast(arr, predicate) {
  if (arr === null) {
    return null;
  }

  if (typeof predicate !== 'function') {
    return null;
  }

  const len = arr.length;
  let k = len - 1;
  while (k >= 0) {
    const kValue = arr[k];
    if (predicate.call({}, kValue, k, arr)) {
      return kValue;
    }
    k--;
  }

  return null;
}
