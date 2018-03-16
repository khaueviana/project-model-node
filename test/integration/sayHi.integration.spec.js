'use strict';

const { expect } = require('chai');
const supertest = require('supertest');
const server = require('../../server');
const stubServices = require('../stubs');

const request = supertest(server.listener);

describe('Integration Tests', () => {
  describe('GET /v1/helloWorld', () => {
    context('WHEN HelloWorld is successful - Happy Path', () => {
      let stubSayHiService;

      before('mock apis', () => {
        stubSayHiService = stubServices.sayHiService.sayHiServiceSuccess();
      });

      after('clear api mocks', () => {
        stubSayHiService.done();
      });

      it('should response with status code 200 "Created"', async () => {
        const response = await request.get('/v1/helloWorld').send();

        expect(response.status).to.be.equal(200);

        const result = response.body;
        expect(result).to.have.property('lastHiOnDb');

        const expected = {
          saidSomething: 'HI PEOPLE',
          lastHiOnDb: result.lastHiOnDb,
        };

        expect(result).to.deep.equal(expected);
      });
    });

    context('when HelloWorld fails', () => {
      let stubSayHiService;

      before('mock apis', () => {
        stubSayHiService = stubServices.sayHiService.sayHiServiceHardfail();
      });

      after('clear api mocks', () => {
        stubSayHiService.done();
      });

      it('should return hardFail 500 on unexpected errors', async () => {
        const response = await request.get('/v1/helloWorld').send();
        expect(response.status).to.be.equal(500);
      });
    });

    context('when Helloworld Softlyfails', () => {
      let stubSayHiService;

      before('mock apis', () => {
        stubSayHiService = stubServices.sayHiService.sayHiServiceSoftfail();
      });

      after('clear api mocks', () => {
        stubSayHiService.done();
      });
      it('should return softFail 400 on whatever', async () => {
        const response = await request.get('/v1/helloWorld').send();
        expect(response.status).to.be.equal(400);
      });
    });
  });
});
