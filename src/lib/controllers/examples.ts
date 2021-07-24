import { Router } from 'express';
import Example from '../models/Example';

export default Router()
    .post('/', (req, res, next) => {
        Example
            .create(req.body)
            .then(example => res.send(example))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Example
            .getAll()
            .then(examples => res.send(examples))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Example
            .getById(req.params.id)
            .then(example => res.send(example))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Example
            .update(req.params.id, req.body)
            .then(example => res.send(example))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Example
            .delete(req.params.id)
            .then(example => res.send(example))
            .catch(next);
    });
