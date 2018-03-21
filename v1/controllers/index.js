'use strict';

const factory = require('./factory');
const repository = require('../repository');
const config = require('../../config');
const logger = require('../../commons/logger')(config);
const services = require('../../services');
const adapters = require('../adapters')({ logger, services, repository });

module.exports = factory(adapters);
