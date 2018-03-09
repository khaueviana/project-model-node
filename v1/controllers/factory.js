'use strict';

const sayHiController = require('./sayHiController');

module.exports = dependencies => ({
  sayHi: sayHiController(dependencies).sayHi,
});
