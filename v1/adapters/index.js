'use strict';

const sayHiWrapper = require('./sayHi');

module.exports = dependencies => ({
  sayHi: sayHiWrapper(dependencies).sayHi,
});
