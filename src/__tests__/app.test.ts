import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

describe('test routes', () => {
    beforeEach(async () => {
        await setup(pool);
    });

    it('POSTs a new example', async () => {
        const newExample = {
            exampleName: 'A Name',
            exampleBody: 'A Body'
        };

        const response = await request(app)
            .post('/api/v1/examples')
            .send(newExample);

        expect(response.body).toEqual({
            ...newExample,
            id: '1'
        });
    });

    it('makes a GET request', async () => {
        const seedExample = {
            exampleName: 'seed',
            exampleBody: 'this is the seed data'
        };

        await request(app)
            .post('/api/v1/examples')
            .send(seedExample);
            
        const response = await request(app)
            .get('/api/v1/examples');
        
        expect(response.body).toEqual([{
            ...seedExample,
            id: '1'
        }]);
    });
});
