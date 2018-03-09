'use strict';

module.exports = {
  app: {
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
    httpsEnable: false,
  },
  logger: {
    name: 'service-name-test',
    level: 'fatal',
  },
};
