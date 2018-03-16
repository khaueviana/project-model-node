'use strict';

const sayHiService = require('./sayHiService');

module.exports = dependencies => ({
  sayHiService: sayHiService(dependencies),
});
