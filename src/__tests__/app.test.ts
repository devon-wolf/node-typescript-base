import pool from '../lib/database/pool';
import setup from '../lib/database/setup';
import request from 'supertest';
import app from '../lib/app';

describe('app tests', () => {
  beforeEach(async () => {
    await setup(pool);
  });

  it('responds to a request', async () => {
    const response = await request(app).get('/');
    expect(response).toBeTruthy();
  });

  it('responds to a request for an unimplemented endpoint with a 404 error', async () => {
    const response = await request(app).get('/this-is-an-endpoint-that-is-not-used');
    expect(response.status).toBe(404);
  });
});
