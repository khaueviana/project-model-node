'use strict';

const sayHiWrapper = require('./sayHi');

module.exports = dependencies => ({
  sayHi: sayHiWrapper({
    logger: dependencies.logger,
    sayHiService: dependencies.services.sayHiService,
    saiHyRepository: dependencies.repository.saiHyRepository,
  }).sayHi,
});
