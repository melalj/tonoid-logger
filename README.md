# @tonoid/logger

[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://github.com/melalj/tonoid-logger)
[![GitHub stars](https://img.shields.io/github/stars/melalj/tonoid-logger.svg?style=social&label=Star&maxAge=2592003)]()

[![npm](https://img.shields.io/npm/dt/@tonoid/logger.svg)]() [![npm](https://img.shields.io/npm/v/@tonoid/logger.svg)]() [![npm](https://img.shields.io/npm/l/@tonoid/logger.svg)]() [![David](https://img.shields.io/david/melalj/tonoid-logger.svg)]()

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
  await init([], { logger });

  context.logger.info('Hello World');
})();

```

## Credits

This module is maintained by [Simo Elalj](https://twitter.com/simoelalj) @[tonoid](https://www.tonoid.com)
