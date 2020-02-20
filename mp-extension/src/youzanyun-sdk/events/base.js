export default class Event {
  constructor() {
    this.funcs = {};
  }

  /**
   * 监听事件
   * @param {String} key 监听函数的关键词。用于识别是否重复及注销事件
   * @param {function} func 事件触发时，执行的回调函数
   */
  on(key, func) {
    if (!key || !func) {
      return;
    }

    if (typeof func !== 'function') {
      return;
    }

    this.funcs[key] = func;
  }

  /**
   * 解绑事件
   * @param {String} key 移除函数的对应关键词
   */
  off(key) {
    if (!key) {
      this.funcs = {};
      return;
    }

    delete this.funcs[key];
  }
}
