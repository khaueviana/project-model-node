'use strict';

const dotenv = require('dotenv');

dotenv.load();

module.exports = {
  app: {
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
  },
  db: {
    url: process.env.DB_URL,
    dbName: process.env.DB_NAME,
    collections: {
      saiHy_collection: process.env.DB_SAY_HI_COLLECTION_NAME,
    },
  },
  logger: {
    level: process.env.LOGGER_LEVEL,
    name: 'service-name',
  },
  services: {
    helloworld: {
      host: process.env.HELLO_WORLD_HOST,
      sayhi: process.env.HELLO_WORLD_SAYHI_RESOURCE,
    },
  },
};
