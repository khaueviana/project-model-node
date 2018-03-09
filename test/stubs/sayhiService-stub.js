'use strict';

const nock = require('nock');
const config = require('../../config');


exports.sayHiServiceSuccess = () => nock(config.services.helloworld.host)
  .get(config.services.helloworld.sayhi)
  .reply(200, {
    hellowWorld: 'hi',
  });

exports.sayHiServiceHardfail = () => nock(config.services.helloworld.host)
  .get(config.services.helloworld.sayhi)
  .reply(500);

exports.sayHiServiceSoftfail = () => nock(config.services.helloworld.host)
  .get(config.services.helloworld.sayhi)
  .reply(400);
