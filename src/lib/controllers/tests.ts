/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
        res.send('Posted!');
    })
    .get('/', (req, res, next) => {
        console.log('GET request');
        res.send('Got!');
    })
    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
        res.send(`Got ${req.params.id}!`);
    })
    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
        res.send(`Put ${req.params.id}!`);
    })
    .patch('/:id', (req, res, next) => {
        console.log(`PATCH request for id ${req.params.id}`);
        res.send(`Patched ${req.params.id}!`);
    })
    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
        res.send(`Deleted ${req.params.id}!`);
    });
