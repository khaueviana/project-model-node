'use strict';

const _ = require('lodash');

const handle = (serviceName, error) => ({
  fail: true,
  name: serviceName,
  status_code: _.get(error, 'response.status'),
  error,
});

module.exports = {
  handle,
};
