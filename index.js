/* eslint-disable no-param-reassign */
const winston = require('winston');

const init = () => async () => {
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
    info: logger.info,
    error: logger.error,
    warn: logger.warn,
    debug: logger.debug,
    winston,
    format,
  };
};

const loggerModule = module.exports = init; // eslint-disable-line no-multi-assign
loggerModule.name = 'logger';
