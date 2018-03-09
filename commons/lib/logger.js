'use strict';

const bunyan = require('bunyan');

const makeLogger = (config) => {
  const logger = bunyan.createLogger({
    name: config.logger.name,
    level: config.logger.level,
    serializers: { err: bunyan.stdSerializers.err },
    streams: [{
      stream: process.stdout,
    }],
  });

  return logger;
};

module.exports = config => makeLogger(config);
