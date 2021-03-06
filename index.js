'use strict';

const server = require('./server');
const config = require('./config');
const logger = require('./commons/logger')(config);
const mongo = require('./commons/db');

const init = async () => {
  try {
    const mongoConnect = await mongo.connect(config.db.url, config.db.dbName);
    if (!mongoConnect) {
      throw new Error('Mongo failed to connect');
    }

    const instance = await server;

    await instance.start();

    logger.info(`App running on ${instance.info.protocol}://${instance.info.host}:${instance.info.port}`);

  } catch (error) {
    logger.error(`App failed to start ${error.message}`);
  }
};

init();
