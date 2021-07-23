import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

describe('test routes', () => {
    beforeEach(() => {
        return setup(pool);
    });

    it('POSTs a new example', () => {
        const newExample = {
            exampleName: 'A Name',
            exampleBody: 'A Body'
        };

        return request(app)
            .post('/api/v1/examples')
            .send(newExample)
            .then(response =>
                expect(response.body).toEqual({
                    ...newExample,
                    id: '1'
                }));
    });

    it('makes a GET request', () => {
        const seedExample = {
            exampleName: 'seed',
            exampleBody: 'this is the seed data'
        };

        request(app)
            .post('/api/v1/examples')
            .send(seedExample)
            .then(() => console.log('seedExample posted'));

        return request(app)
            .get('/api/v1/examples')
            .then(response =>
                expect(response.body).toEqual([{
                    ...seedExample,
                    id: '1'
                }]));
    });
});
