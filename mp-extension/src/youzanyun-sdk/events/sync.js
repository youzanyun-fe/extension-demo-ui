import { deepClone } from './util';
import Event from './base';

export class SyncEvent extends Event {
  /**
   * 执行侦听事件的所有函数，每个函数的返回值都会在执行完成后返回
   * 适合用在表单提交前，收集所有需要额外混入的参数 + 中断流程
   * @param  {...any} args 执行事件回调的参数
   */
  trigger(...args) {
    let returnValues = [];
    let err = null;
    const funcsMap = { ...this.funcs };
    Object.keys(funcsMap).forEach(funcKey => {
      const func = funcsMap[funcKey];
      try {
        const returnValue = func(...deepClone(args));
        returnValues.push(returnValue);
      } catch (e) {
        console.error('[event] function exec error', e);
        err = e;
      }
    });

    if (err) {
      throw err;
    }

    return returnValues;
  }
}
