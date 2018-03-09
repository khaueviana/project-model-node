'use strict';

const defaultConfig = require('./default');

const ENV = process.env.NODE_ENV;
// eslint-disable-next-line import/no-dynamic-require
const currentEnvironmentConfig = require(`./${ENV}`);

module.exports = Object.assign({}, defaultConfig, currentEnvironmentConfig);
