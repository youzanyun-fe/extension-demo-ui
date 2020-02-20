import { deepClone } from './util';
import Event from './base';

export class AsyncEvent extends Event {
  /**
   * 执行侦听事件的所有函数，每个函数的返回值都会在执行完成后返回
   * 适合用在表单提交前，收集所有需要额外混入的参数 + 中断流程
   * 建议在有收集数据 + 中断流程的时候，采用这个。只有中断流程，可以使用 triggerWaterfall
   * @param  {...any} args 执行事件回调的参数
   */
  trigger(...args) {
    let returnPromises = [];
    const funcsMap = { ...this.funcs };
    Object.keys(funcsMap).forEach(funcKey => {
      const func = funcsMap[funcKey];
      try {
        const returnPromise = func(...deepClone(args));
        returnPromises.push(returnPromise);
      } catch (e) {
        returnPromises.push(Promise.reject({ err: e }));
      }
    });

    return Promise.all(returnPromises);
  }
}
