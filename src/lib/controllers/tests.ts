/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import Test from '../models/Test';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
        Test
            .create(req.body)
            .then(test => res.send(test))
            .catch((err : Error) => res.send(err));
    })

    .get('/', (req, res, next) => {
        console.log('GET request');
        Test
            .getAll()
            .then(tests => res.send(tests))
            .catch((err: Error) => res.send(err));
    })

    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
        Test
            .getById(req.params.id)
            .then(test => res.send(test))
            .catch((err : Error) => res.send(err));
    })

    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
        Test
            .replace(req.params.id, req.body)
            .then(test => res.send(test))
            .catch((err : Error) => res.send(err));
    })

    .patch('/:id', (req, res, next) => {
        console.log(`PATCH request for id ${req.params.id}`);
        res.send(`Patched ${req.params.id}!`);
    })
    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
        res.send(`Deleted ${req.params.id}!`);
    });
