export default class NavigateService {
    constructor(app) {
        this.app = app;
    }
    toFeature({ alias = '' }) {
        console.log(`跳转到 微页面 ${alias}`);
    }
    // 余额充值中心
    toUserBanlance() {
        console.log('跳转到 余额充值中心');
    }
    // 积分金币中心
    toUserPoints() {
        console.log('跳转到 积分金币中心');
    }
    // 卡包
    toUserCards() {
        console.log('跳转到 卡包');
    }
    // 券码-优惠券
    toUserCoupons() {
        console.log('跳转到 券码-优惠券');
    }
    // 全部订单列表
    toOrderListAll() {
        console.log('跳转到 全部订单列表');
    }
    // 待付款订单列表
    toOrderListToPay() {
        console.log('跳转到 待付款订单列表');
    }
    // 待发货订单列表
    toOrderListToSend() {
        console.log('跳转到 待发货订单列表');
    }
    // 待收货订单列表
    toOrderListToReceive() {
        console.log('跳转到 待收货订单列表');
    }
    // 待评价订单列表
    toOrderListToEvaluate() {
        console.log('跳转到 待评价订单列表');
    }
    // 退款维权
    toOrderRefund() {
        console.log('跳转到 退款维权');
    }
    // 购物车
    toCart() {
        console.log('跳转到 购物车');
    }
    // 个人信息
    toUserCustomerSettings() {
        console.log('跳转到 个人信息');
    }
    // 账号设置
    toUserAccountSetting() {
        console.log('跳转到 账号设置');
    }
}
