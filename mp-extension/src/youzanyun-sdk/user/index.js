export default class User {
    constructor(app) {
        this.app = app;
    }
    /**
     * 获取用户信息
     */
    getUserInfo() {
        return Promise.resolve({
            // 头像
            avatar: 'https://img.yzcdn.cn/upload_files/avatar.png',
            nickName: '昵称',
        });
    }
    /**
     * 获取用户积分信息
     * @returns{
     *  value // 当前可用积分
     * }
     */
    getPoints() {
        return Promise.resolve({
            value: 1000
        });
    }
    /**
     * 获取状态信息
     * @returns{
     *    "points": 6381,  // 金币
     *    "cards": 1,  // 卡
     *    "coupons": 0,  // 券码
     * }
     */
    getStats() {
        return Promise.resolve({
            points: 6381,
            cards: 1,
            coupons: 0
        });
    }
    /**
     * 获取订单信息
     * @returns{
     *  "confirm": 0,
     *  "paid": 11,  // 待发货
     *  "toPay": 0,  // 待付款
     *  "sent": 0,  // 待收货
     * }
     */
    getOrders() {
        return Promise.resolve({
            confirm: 0,
            paid: 1,
            toPay: 0,
            sent: 0
        });
    }
    /**
     * 获取用户购物车商品数量
     * @returns 0
     */
    getCartNum() {
        return Promise.resolve({
            value: 0
        });
    }
    /**
     * 获取余额信息
     */
    getBalance() {
        return Promise.resolve({
            value: 0
        });
    }
}
