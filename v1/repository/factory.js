'use strict';

const UUID = require('uuid');

module.exports = ({ db, collectionName }) => ({
  insert: message => db.collection(collectionName)
    .insertOne(Object.assign({ _id: UUID('v4') }, message))
    .then(result => result.ops[0]),
  save: (filter, message) => db.collection(collectionName)
    .update(filter, message),
  findOne: message => db.collection(collectionName)
    .findOne(message),
  findMany: message => db.collection(collectionName)
    .find(message),
});
