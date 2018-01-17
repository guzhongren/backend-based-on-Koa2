/*global describe, it*/
'use strict';
const superagent = require('supertest');
const app = require('../app');
const request = superagent(app.listen());

describe('Routes', () => {
  before(done => {
    console.log('test beging....');
    done();
  });
  after(done => {
    console.log('test finished ....');
    done();
  });
  beforeEach(done => {
    console.log('test beging again....');
    done();
  });

  afterEach(done => {
    console.log('test finished again....');
    done();
  });

  describe('GET /api/', () => {
    it('api index should return json', function () {
      request
        .get('/api/')
        .expect(res => {
          res.body.hello = 'world';
        });
    });
  });

  describe('GET /api/user/', () => {
    it('#user interface test', done => {
      request
        .get('/api/user/')
        .expect((res) => {
          res.body.status = 'success';
        });
      done();
    });
  });
});
