import { DEFAULT_MODULE_NAME, LEVELS } from '../utils/constants';
import BaseLog from './BaseLog';
import Config from '../config';

/**
 * 日志类，没有感情的配置收集器，没有感情的基础使用类
 */
export default class Logger {
  /**
     * Creates an instance of Logger.
     *
     * @param {string} moduleName 模块名
     * @param {object} [context=new LogContext()] 日志打印对象, 需要实现log(level, moduleName, ...params)方法
     * @param {Function} [filtler=logFilter] 日志过滤器, 如果使用了自定义filter, globalCommand将对当前logger失效
     */
  constructor(options = {}) {
    const opts = Object.assign({}, Config, options);
    this.option = opts;
    Logger.option = opts;
    this.log = new BaseLog();
  }
  info(...params) {
    console.log('---info???', this);
    this.log.log('', ...params);
  }
}
