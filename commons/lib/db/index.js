'use strict';

const factory = require('./factory');

const state = {
  db: null,
};

const wrapper = factory(state);

module.exports = wrapper;
