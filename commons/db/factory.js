'use strict';

const { MongoClient } = require('mongodb');
const bluebird = require('bluebird');

const factory = (state, mongoClient = MongoClient, promise = bluebird) => ({
  connect(url, dbName) {
    return mongoClient.connect(url, {
      promiseLibrary: promise,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    }).then((client) => {
      state.db = client.db(dbName);
      return state.db;
    });
  },

  disconnect() {
    return state.db.close().then(() => {
      state.db = null;
    });
  },

  collection(collectionName) {
    if (state.db) return state.db.collection(collectionName);
    throw new Error('There is no connection to the database.');
  },

  db() {
    return state.db;
  },
});

module.exports = factory;
