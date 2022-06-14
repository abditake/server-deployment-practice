'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Server Tests', ()=>{
  describe('GET request', ()=>{
    it('responds with status 200 /route', async()=>{
      const response = await request.get('/');
      expect(response.status).toEqual(200);
    });
    test('api route works yay!', async()=>{
      const response = await request.get('/api');
      expect(response.status).toEqual(200);
      console.log(response.text,response.body);
      expect(response.body).toEqual({"name":"John", "age":30, "car":null})
    });
  });
});