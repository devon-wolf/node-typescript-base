/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
    })
    .get('/', (req, res, next) => {
        console.log('GET request');
    })
    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
    })
    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
    })
    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
    });
