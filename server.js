'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./routes');
const registers = require('./register');

const server = Hapi.server({ port: config.app.port, router: { isCaseSensitive: false } });
server.route(routes);
server.register(registers);

module.exports = server;
