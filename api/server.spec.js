const request = require('supertest');
const server = require('./server');

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

  // it('should check for json', () => {
  //   return request(server)
  //     .get('/')
  //     .expect('Content-Type', /json/);
  // });
});

