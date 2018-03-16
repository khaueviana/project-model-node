'use strict';

const uuid = require('uuid');
const axios = require('axios');
const config = require('../config');
const logger = require('../commons/logger')(config);

const factory = require('./factory');

const dependencies = {
  uuid,
  logger,
  request: axios,
  config,
};

module.exports = factory(dependencies);
