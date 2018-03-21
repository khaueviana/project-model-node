'use strict';

const { expect } = require('chai');
const supertest = require('supertest');
let server = require('../../server');
const stubServices = require('../stubs');

describe('Integration Tests', () => {
  describe('GET /v1/helloWorld', () => {
    context('WHEN HelloWorld is successful - Happy Path', () => {
      let stubSayHiService;
      let request;

      before('mock apis', async () => {
        server = await server;
        request = supertest(server.listener);
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

      let request;

      before('mock apis', async () => {
        stubSayHiService = stubServices.sayHiService.sayHiServiceHardfail();
        server = await server;
        request = supertest(server.listener);
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
      let request;

      before('mock apis', async () => {
        stubSayHiService = stubServices.sayHiService.sayHiServiceSoftfail();
        server = await server;
        request = supertest(server.listener);
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
