'use strict';

const sayHiController = require('./sayHiController');

module.exports = adapters => ({
  sayHi: sayHiController(adapters).sayHi,
});
