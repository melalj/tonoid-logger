# @tonoid/logger

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

This module is maintained by [tonoid](https://www.tonoid.com)
