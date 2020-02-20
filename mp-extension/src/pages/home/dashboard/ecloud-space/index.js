export default function (sdk) {
    // 获取登录用户信息
    const user = sdk.app.user;

    // 需要查看此功能时，放开下面代码
    /*   sdk.page.on('beforeFetchHomepage', alias => {
          startJudgeUserNavigate(alias);
  
          // 阻止正常首页加载，为自定义页面做准备
          return { stop: true };
      }); */

    /**
     * 根据用户状态做跳转
     */
    function startJudgeUserNavigate() {
        // 用户已登录
        if (user.openId) {
            judgeUserNavigate(user);
        } else {
            // 用户未登录，监听登录事件
            sdk.app.on('ecloud:login:success', userInfo => {
                judgeUserNavigate(userInfo);
            });
        }
    }

    function judgeUserNavigate(userInfo) {
        // 如果用户已注册
        if (userInfo.mobile) {
            // to do something
            console.log("用户已注册...")
        } else {
            // to do something
            // 未注册，跳转登录页
            sdk.navigate('login', { redirectUrl: '/pages/goods/cart/index' });
        }
    }
}