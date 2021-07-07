import { Router } from 'express';

export default Router()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    .post('/', (req, res, next) => {
        console.log('POST request');
    })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    .get('/', (req, res, next) => {
        console.log('GET request');
    })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
    })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
    })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
    });
