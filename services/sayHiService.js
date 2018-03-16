'use strict';

const axios = require('axios');
const { handle } = require('./service-error-handler');

const sayHiService = ({ config, logger }) => {
  const hi = async (text) => {
    try {
      const URL = config.services.helloworld.host + config.services.helloworld.sayhi;
      await axios.get(URL, {}, {});
      return {
        message: text,
      };
    } catch (error) {
      logger.error('sayHiServiceFailed to respond', error);
      return handle('sayHiService', error);
    }
  };

  return { hi };
};

module.exports = sayHiService;
