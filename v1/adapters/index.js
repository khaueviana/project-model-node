'use strict';

const { sayHiWrapper } = require('./sayHi');

exports.sayHi = dependencies => sayHiWrapper(dependencies).sayHi();
