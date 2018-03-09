'use strict';

const controller = require('./v1/controllers');
// const schemas = require('./v1/schemas');


const helloWorld = {
  path: '/v1/helloWorld',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.sayHi,
    response: {
      // status: {
      //   200: schemas.authorizeResponse,
      // },
    },
    validate: {
      // headers: schemas.headers,
      // payload: schemas.authorizeEntry,
    },
  },
};

module.exports = [
  helloWorld,
];
