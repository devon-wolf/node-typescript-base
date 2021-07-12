import { Router } from 'express';
import Example from '../models/Example';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
        Example
            .create(req.body)
            .then(example => res.send(example))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        console.log('GET request');
        Example
            .getAll()
            .then(examples => res.send(examples))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
        Example
            .getById(req.params.id)
            .then(example => res.send(example))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
        Example
            .update(req.params.id, req.body)
            .then(example => res.send(example))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
        Example
            .delete(req.params.id)
            .then(example => res.send(example))
            .catch(next);
    });
