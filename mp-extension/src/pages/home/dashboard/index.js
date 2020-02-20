import HomeDashboardPage from '../../../youzanyun-sdk/home-dashboard-page/index';
import EcloudSpaceBiz from './ecloud-space';

Page({
  onLoad() {
    // 注册流程API
    this.getYunSdk().setPageProcess(
      'fetchSpecificAlias',
      HomeDashboardPage.process.fetchSpecificAlias
    );
    // 注册事件
    this.getYunSdk().setPageEvent(
      'beforeFetchHomepage',
      HomeDashboardPage.events.beforeFetchHomepage
    );

    try {
      EcloudSpaceBiz && EcloudSpaceBiz(this.getYunSdk());
    } catch (e) {
      //
    }
  },
  data: {},
  getYunSdk() {
    return getApp().getYouZanYunSdk();
  }
});
