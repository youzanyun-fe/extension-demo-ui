export default function (sdk) {

    // 登录监听
    sdk.app.on("ecloud:login:success", (userInfo, route) => {
        // wx.showModal({
        //     title: "登录成功提示",
        //     showCancel: false,
        //     content: JSON.stringify(userInfo),

        // })
        console.log("登录成功")
    });

    // onShow监听
    sdk.app.lifetimes("onShow", options => {
        // wx.showModal({
        //     title: "生命周期回调onShow",
        //     showCancel: false,
        //     content: JSON.stringify(options)
        // })
        console.log("生命周期回调——监听小程序启动或切前台")
    })
}
