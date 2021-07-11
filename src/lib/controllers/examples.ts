import { Router } from 'express';
import Test from '../models/Example';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
        Test
            .create(req.body)
            .then(test => res.send(test))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        console.log('GET request');
        Test
            .getAll()
            .then(tests => res.send(tests))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
        Test
            .getById(req.params.id)
            .then(test => res.send(test))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
        Test
            .update(req.params.id, req.body)
            .then(test => res.send(test))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
        Test
            .delete(req.params.id)
            .then(test => res.send(test))
            .catch(next);
    });
