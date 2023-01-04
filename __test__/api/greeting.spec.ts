'use strict';

// Npm Modules
import request from 'supertest';

// Config
import config from '../config';

const baseUrl = config.baseURL;

describe('#Test - Greeting Routes', () => {
  describe('#Test - GET /hello', () => {
    it('should be an http status code 200 OK', async () => {
      await request(baseUrl)
        .get('/hello')
        .query({
          name: 'Saitama',
        })
        .expect(200);
    });

    it('should be an http status code 400 BAD REQUEST', async () => {
      await request(baseUrl)
        .get('/hello')
        .expect(400);
    });
  });

  describe('#Test - GET /bye', () => {
    it('GET /bye should be an http status code 200 OK', async () => {
      await request(baseUrl)
        .get('/bye')
        .query({
          name: 'Saitama',
        })
        .expect(200);
    });

    it('should be an http status code 400 BAD REQUEST', async () => {
      await request(baseUrl).get('/bye').expect(400);
    });
  });

  describe('#Test - Status Code 404', () => {
    it('should be http status code 404 NOT FOUND', async () => {
      await request(baseUrl).get('/helloAndBye')
        .query({
          name: 'Saitama',
        })
        .expect(404);
    });
  });
});
