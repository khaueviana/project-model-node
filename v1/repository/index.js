'use strict';

const factory = require('./factory');
const db = require('../../commons/lib/db');
const config = require('../../config');


module.exports = {
  saiHyRepository: factory({
    db,
    collectionName: config.db.collections.saiHy_collection,
  }),
};
