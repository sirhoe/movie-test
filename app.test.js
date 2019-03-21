const request = require('supertest');
const app = require('./app');

describe('Test for Invalid JSON', () => {
  test('It should response to request with valid JSON', async () => {
    const response = await request(app).post('/').send({});
    expect(response.statusCode).toBe(200);
  });

  test('It should response error to invalid JSON', async () => {
    const response = await request(app).post('/').send('{"invalid"}').type('json');
    expect(response.statusCode).toBe(400);
  });
});
