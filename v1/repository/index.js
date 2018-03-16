'use strict';

const factory = require('./factory');
const db = require('../../commons/db');
const config = require('../../config');


module.exports = {
  saiHyRepository: factory({
    db,
    collectionName: config.db.collections.saiHy_collection,
  }),
};
