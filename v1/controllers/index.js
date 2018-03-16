'use strict';

const Boom = require('boom');
const factory = require('./factory');
const repository = require('../repository');
const adapters = require('../adapters');
const config = require('../../config');
const logger = require('../../commons/logger')(config);
const services = require('../../services');


const dependencies = {
  repository,
  adapters,
  logger,
  services,
  erros: Boom,
  config,
};

module.exports = factory(dependencies);
