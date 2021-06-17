import { LEVEL_STRING, CONTEXT_FLAGS } from './utils/constants';

/**
 * 默认配置文件
 */
export default {
  disableConsole: false, // 是否禁用默认的console.log方法；
  isAutoSave: false, // 是否自动存储
  level: LEVEL_STRING.DEBUG,

  filter: {},
  'context-flags': [CONTEXT_FLAGS.COLOR, CONTEXT_FLAGS.LEVEL, CONTEXT_FLAGS.MODULE, CONTEXT_FLAGS.TIME],
  // 'context-flags': [CONTEXT_FLAGS.LEVEL, CONTEXT_FLAGS.MODULE, CONTEXT_FLAGS.TIME]
};
