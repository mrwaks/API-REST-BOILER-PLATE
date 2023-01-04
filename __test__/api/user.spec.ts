'use strict';

// Npm Modules
import request from 'supertest';

// Config
import config from '../config';

const baseUrl = config.baseURL;

describe('#Test - User Routes', () => {
  describe('#Test - POST /login', () => {
    it('should be a http status code 200 OK', async () => {
      const response = await request(baseUrl)
        .post('/login')
        .send({
          username: 'mrwaks',
          password: 'password',
        })
        .expect(200);

      // Test if "_sid" cookie exists
      const cookies = response.header['set-cookie'];
      if (!cookies) {
        throw new Error('No Set-Cookie Header');
      }
      cookies.forEach((cookie: string) => {
        if (!/^_sid/.test(cookie)) {
          throw new Error("Not '_sid' Cookie");
        } else {
          process.env.COOKIE_SESSION_ID = cookie;
        }
      });
    });
  });
  
  describe('#Test - GET /logout', () => {
    it('should be a http status code 200 OK', async () => {
      await request(baseUrl)
        .get('/logout')
        .set('Cookie', process.env.COOKIE_SESSION_ID)
        .expect(200);
    });
  });
});
