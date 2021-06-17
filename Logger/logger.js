import { DEFAULT_MODULE_NAME, LEVELS } from '../utils/constants';
import Log from './Log';

/**
 * 日志输出类
 */
export default class Logger extends Log {
    /**
       * Creates an instance of Logger.
       *
       * @param {string} moduleName 模块名
       * @param {object} [context=new LogContext()] 日志打印对象, 需要实现log(level, moduleName, ...params)方法
       * @param {Function} [filtler=logFilter] 日志过滤器, 如果使用了自定义filter, globalCommand将对当前logger失效
       */
    constructor(props) {
        super(props);
        if (typeof props === 'string') {
            Logger.injector.inject(this, props);
        } else {
            const { moduleName } = props;
            Logger.injector.inject(this, moduleName);
        }
    }

    /**
       * 输出调试信息: 指出细粒度信息事件对调试应用程序是非常有帮助的
       * @param  {...any} params
       */
    debug(...params) {
        log.call(this, LEVELS.DEBUG, params);
    }

    /**
       * 输出提示信息: 消息在粗粒度级别上突出强调应用程序的运行过程
       * @param  {...any} params
       */
    info(...params) {
        log.call(this, LEVELS.INFO, params);
    }

    /**
       * 输出警告信息: 表明会出现潜在错误的情形
       * @param  {...any} params
       */
    warn(...params) {
        log.call(this, LEVELS.WARN, params);
    }

    /**
       * 输出错误信息: 指出发生的错误事件，可能会影响系统的继续运行
       * @param  {...any} params
       */
    error(...params) {
        log.call(this, LEVELS.ERROR, params);
    }

    /**
       * 提交信息: 将错误信息提交至服务器
       * @param  {...any} params
       */
    submit(...params) {
        log.call(this, LEVELS.INFO, params);
    }

    /**
       * 获取一个日志实例
       * @param {String} moduleName
       */
    static getLogger(moduleName = DEFAULT_MODULE_NAME) {
        return new Logger(moduleName);
    }


    static disableConsole() {
        Log.disableConsole();
    }


    static enableConsole() {
        Log.enableConsole();
    }
}

/**
 * Logger私有方法
 * @param {*} level
 * @param {*} params
 */
function log(level, params) {
    // this.ctx.log.call(this.ctx, level, this.moduleName, params);
    this.log(level, this.moduleName, params);
}

/**
 * @property {Object} 依赖注射器
 * @static
 */
Logger.injector = {
    inject(that, moduleName, context, filter) {
        // 模块名称
        that.moduleName = moduleName || DEFAULT_MODULE_NAME;
        // 为了方便日志实例的统一管理，所有的日志实例都共享一个上下文环境
        // that.ctx = context || new this.LogContext();
        that.ctx = context || this.logContext;
        // 注入过滤器
        that.filter = filter;
    },
};
