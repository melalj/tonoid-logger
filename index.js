/* eslint-disable no-param-reassign */
const winston = require('winston');

module.exports = () => ({
  name: 'logger',
  init: () => {
    const isProd = (
      process.env.NODE_ENV === 'production'
      || process.env.NODE_ENV === 'staging'
    );
    const isTest = (process.env.NODE_ENV === 'test');

    let level = isProd ? 'info' : 'debug';
    if (process.env.LOG_LEVEL) level = process.env.LOG_LEVEL;

    const gkeFormatter = winston.format((info) => {
      info.severity = info.level.toUpperCase();
      delete info.level;
      return info;
    });

    const format = isProd
      ? winston.format.combine(
        gkeFormatter(),
        winston.format.json(),
      )
      : winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.splat(),
        winston.format.simple(),
      );

    const logger = winston.createLogger({
      format,
      level: isTest ? [] : level,
      transports: [
        new winston.transports.Console(),
      ],
    });

    return {
      info: logger.info.bind(logger),
      error: logger.error.bind(logger),
      warn: logger.warn.bind(logger),
      debug: logger.debug.bind(logger),
      winstonInstance: logger,
      winston,
      format,
    };
  },
});
