'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const adapter = require('../../../v1/adapters/sayHi');

let mockDependencies;

describe('Unit tests', () => {
  beforeEach('create spies', () => {
    mockDependencies = {
      logger: {
        error: sinon.spy(() => true),
      },
      services: {
        hello: sinon.spy(() => Promise.resolve({ })),
      },
      repository: {
        insert: sinon.spy(() => Promise.resolve({})),
      },
      payload: {
        header_id: 'header-id',
      },
      onSuccess: sinon.spy(),
      onError: sinon.spy(),
    };
  });

  context('smoke tests', () => {
    it('should be a function', () => {
      expect(adapter).to.be.a('function');
    });

    it('should be return a promise', () => {
      expect(adapter(mockDependencies).sayHi).to.be.a('function');
    });
  });
});
