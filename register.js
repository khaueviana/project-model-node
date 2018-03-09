'use strict';

const hapiAlive = require('hapi-alive');
const inert = require('inert');
const vision = require('vision');
const hapiSwaggered = require('hapi-swaggered');
const hapiSwaggeredUi = require('hapi-swaggered-ui');

module.exports = [
  inert,
  vision,
  {
    plugin: hapiAlive,
    options: {
      path: '/healthcheck',
      tags: ['health', 'monitor'],
      healthCheck: async () => {
        await true;
      },
    },
  },
  {
    plugin: hapiSwaggered,
    options: {
      tags: {
        api: 'API',
      },
      info: {
        title: 'API',
        description: 'Swagger',
        version: '1.0',
      },
      stripPrefix: '/v1',
    },
  },
  {
    plugin: hapiSwaggeredUi,
    options: {
      title: 'Swagger UI',
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null,
      },
    },
  },
];
