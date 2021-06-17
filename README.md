# web-logger

# 前端日志插件

> 1:日志打印，全局的日志管理，目前仅有日志打印

## 可直接页面导入使用

```
import WebLogMan from 'web-log-man';

const logger =new WebLogMan();

logger.info('打印日志');

// [INF]-[Global]-[2021-06-17 14:34:45:083] 打印日志
```

## 或者中间使用配置

```
import WebLogMan from 'web-log-man';

const logger =new WebLogMan({colorfully:true});

logger.info('打印日志');

// INF 🎁 Global 📆 2021-06-17 14:34:23:595 💬  打印日志
```

## 为了方便区分，可以增加模块信息，方便查看

```
import WebLogMan from 'web-log-man';

const logger =new WebLogMan('ModulesName');

logger.info('打印日志');

// [INF]-[ModulesName]-[2021-06-17 14:34:45:083] 打印日志
```
