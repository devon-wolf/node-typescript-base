
// import pool from '../lib/utils/pool';
// import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

describe('test routes', () => {
    // beforeEach(() => {
    //     return setup(pool);
    // });

    it('makes a GET request', async () => {
        const response = await request(app).get('/api/v1/tests');
        expect(response).toEqual('Got!');
    });
});
