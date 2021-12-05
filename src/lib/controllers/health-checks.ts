import { Router } from 'express';

const healthCheckController = Router()
  .post('/', (req, res, next) => {
    try {
      res.send('POST');
    } catch (error) {
      next(error);
    }
  })
  .get('/', (req, res, next) => {
    try {
      res.send('GET');
    } catch (error) {
      next(error);
    }
  })
  .patch('/', (req, res, next) => {
    try {
      res.send('PATCH');
    } catch (error) {
      next(error);
    }
  })
  .put('/', (req, res, next) => {
    try {
      res.send('PUT');
    } catch (error) {
      next(error);
    }
  })
  .delete('/', (req, res, next) => {
    try {
      res.send('DELETE');
    } catch (error) {
      next(error);
    }
  })
  .get('/error', (req, res, next) => {
    try {
      throw new Error('error endpoint requested');
    } catch (error) {
      next(error);
    }
  });
export default healthCheckController;
