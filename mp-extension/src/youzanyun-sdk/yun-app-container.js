import { randomStr } from './utils/random';
import { AsyncEvent, SyncEvent } from './events';

const _f = () => {};
export default class YunAppContainer {
  constructor() {
    // this.process = {};
    this.__data = {
      shop: {},
      /*
       * {
       *   gender: '',
       *   avatar: '',
       *   mobile: '',
       *   nickName: ''
       *   openId: ''
       * }
       */
      user: {}
    };
    this.__events = {};
    this.process = {};
  }

  __setData(key, val) {
    let obj = key;
    if (typeof key === 'string') {
      obj = { [key]: val };
    }

    Object.assign(this.__data, obj);

    Object.keys(obj).forEach(_key => {
      // 允许sdk.app.xxxx访问数据
      Object.defineProperty(this, _key, {
        enumerable: true,
        configurable: true,
        get: () => {
          return this.__data[key];
        }
      });
    });
  }

  /**
   * 设置event
   */
  __setEvent(eventName, event) {
    if (!eventName) {
      return;
    }

    this.__events[eventName] = event;
  }

  trigger(eventName, args, async = false) {
    if (!eventName) {
      return;
    }

    if (!this.__events[eventName]) {
      this.__events[eventName] = async ? new AsyncEvent() : new SyncEvent();
    }

    const result = this.__events[eventName].trigger(args);
    if (this.__events[eventName] instanceof SyncEvent && Object.keys(this.__events[eventName]).length === 1) {
      return result[0];
    }
    return result;
  }

  /**
   * 
   * @param {*} eventName
   * @param {*} callback
   */
  on(eventName, callback) {
    if (!eventName) {
      return;
    }

    this.__events[eventName].on(eventName + '_' + randomStr(), callback);
  }

  /**
   * 获取开放流程API
   */
  getProcess(processName) {
    if (!processName) {
      return;
    }

    return this.process[processName] || _f;
  }

  // 添加流程函数
  __addProcess(processName, func) {
    this.process[processName] = func;
  }
}
