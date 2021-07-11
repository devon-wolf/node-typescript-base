import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

describe('test routes', () => {
    // beforeEach(async () => {
    //     await setup(pool);
    // });

    it.skip('POSTs a test', async () => {
        const newTest = {
            testName: 'A Name',
            testBody: 'A Body'
        };

        const response = await request(app)
            .post('/api/v1/tests')
            .send(newTest);

        expect(response).toEqual({
            ...newTest,
            id: 1
        });
    });

    it.skip('makes a GET request', async () => {
        const response = await request(app).get('/api/v1/tests');
        expect(response).toEqual([]);
    });

    it('is a sample test that should pass', () => {
        expect(2 + 2).toEqual(4);
    });

    it('is a sample test that should fail', () => {
        expect(2 + 2).toEqual(6);
    });
});
