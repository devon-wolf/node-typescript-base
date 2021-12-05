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
});
