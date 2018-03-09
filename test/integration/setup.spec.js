'use strict';

const config = require('../../config');
const db = require('../../commons/lib/db');

const connect = (done) => {
  db.connect(config.db.url)
    .then(() => done())
    .catch(done);
};

const removeAll = (done) => {
  db.collection(config.db.collections.saiHy_collection).remove({})
    .then(() => done())
    .catch(done);
};

const teardown = (done) => {
  db.disconnect()
    .then(() => done())
    .catch(done);
};

before('DB connect', connect);
beforeEach('RemoveAll', removeAll);
//after('Teardown', teardown);
