'use strict';

const uuid = require('uuid');
const axios = require('axios');
const config = require('../config');
const logger = require('../commons/lib/logger')(config);

const dependencies = {
  uuid,
  logger,
  request: axios,
  config,
};

exports.hello = require('./helloWorld')(dependencies);
