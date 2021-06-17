import { LEVEL_STRING, CONTEXT_FLAGS } from './utils/constants';

/**
 * 默认配置文件
 */
export default {
  colorfully: false, // 默认关闭彩色打印

  level: LEVEL_STRING.DEBUG,
  filter: {},
  'context-flags': [CONTEXT_FLAGS.COLOR, CONTEXT_FLAGS.LEVEL, CONTEXT_FLAGS.MODULE, CONTEXT_FLAGS.TIME],
  // 'context-flags': [CONTEXT_FLAGS.LEVEL, CONTEXT_FLAGS.MODULE, CONTEXT_FLAGS.TIME]
};
