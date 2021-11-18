# @tonoid/logger

![npm](https://img.shields.io/npm/dt/@tonoid/logger.svg) ![npm](https://img.shields.io/npm/v/@tonoid/logger.svg) ![npm](https://img.shields.io/npm/l/@tonoid/logger.svg)
[![GitHub stars](https://img.shields.io/github/stars/melalj/tonoid-logger.svg?style=social&label=Star&maxAge=2592003)](https://github.com/melalj/tonoid-logger)

Winston plugin for [@tonoid/helpers](https://github.com/melalj/tonoid-helpers).

## Exported context attributes

- `.info()`: Log into console (info level)
- `.error()`: Log into console (error level)
- `.warn()`: Log into console (warn level)
- `.debug()`: Log into console (debug level)
- `.winston`: Winston alias
- `.format`: Winston formatting alias

## Usage example

```js
const { context, init } = require('@tonoid/helpers');
const logger = require('@tonoid/logger');

(async () => {
  // You need to initialize the helpers first before calling the logger from the context
  await init(
    [],
    {
      logger,
      loggerOptions: {
        json: false,
        colorize: true,
        prettyPrint: true,
        splat: true,
        simple: true,
      },
    },
  );

  context.logger.info('Hello World');
})();

```

## Credits

This module is maintained by [Simo Elalj](https://twitter.com/simoelalj) @[tonoid](https://www.tonoid.com)
