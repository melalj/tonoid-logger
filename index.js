/* eslint-disable no-param-reassign */
const winston = require('winston');

const defaultFormat = ({
  format,
  json,
  colorize,
  prettyPrint,
  splat,
  simple,
}) => {
  const list = [
    ...(json
      ? [
        format((info) => { // For Google Logging
          info.severity = info.level.toUpperCase();
          return info;
        })(),
      ]
      : []
    ),
    ...(json ? [format.json()] : []),
    ...(colorize ? [format.colorize()] : []),
    ...(prettyPrint ? [format.prettyPrint()] : []),
    ...(splat ? [format.splat()] : []),
    ...(simple ? [format.simple()] : []),
  ];

  return format.combine.apply(null, list);
};

module.exports = (params) => ({
  name: 'logger',
  init: () => {
    const isProd = (
      process.env.NODE_ENV === 'production'
      || process.env.NODE_ENV === 'staging'
    );
    const isTest = (process.env.NODE_ENV === 'test');

    const {
      customFormat = undefined,
      json = isProd,
      colorize = !isProd,
      prettyPrint = !isProd,
      splat = !isProd,
      simple = !isProd,
    } = params;

    let level = isProd ? 'info' : 'debug';
    if (process.env.LOG_LEVEL) level = process.env.LOG_LEVEL;

    const opts = {
      format: winston.format,
      winstonInstance: winston,
      isProd,
      isTest,
      json,
      colorize,
      prettyPrint,
      splat,
      simple,
    };

    const format = customFormat
      ? customFormat(opts)
      : defaultFormat(opts);

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
