'use strict';

const sayHiService = require('./sayHiService');

module.exports = dependencies => ({
  sayHi: sayHiService(dependencies).hi,
});
