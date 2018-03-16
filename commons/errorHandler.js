'use strict';

const _ = require('lodash');

const wrapResponseFailure = responseFailure => ({
  fail: true,
  status_code: responseFailure.status_code || 400,
  error: {
    message: _.get(responseFailure, 'error.message'),
    stack: _.get(responseFailure, 'error.stack'),
  },
});

const badServiceResponse = () => ({
  fail: true,
  status_code: 501,
  error: {
    message: 'sayHiService did not respond what we watend',
  },
});

const genericError = error => ({
  fail: true,
  status_code: 500,
  error: {
    message: 'sayHiService failed hard',
    details: error,
  },
});

module.exports = {
  genericError,
  badServiceResponse,
  wrapResponseFailure,
};
