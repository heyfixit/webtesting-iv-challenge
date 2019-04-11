const request = require('supertest');
const server = require('./server');

// const Things = require('../data/Things');

describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
        .catch();
    });
  });

  describe('POST /things', () => {
    it('should respond with created resource', () => {
      return request(server)
        .post('/things')
        .send({ name: 'TestThing' })
        .then(res => expect(res.body).toEqual({ id: 8, name: 'TestThing' }));
    });

    it('should respond with 422 if no name', () => {
      return request(server)
        .post('/things')
        .send({ notname: 'Test' })
        .then(res => {
          expect(res.status).toBe(422);
        });
    });
  });

});
