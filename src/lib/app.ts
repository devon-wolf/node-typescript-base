import express from 'express';
import usersController from './controllers/users';

const app = express();

app.use(express.json());
app.use('/api/v1/users', usersController);

app.get('/', (req, res, next) => ('<h1>YOU GOT ME</h1>'));

export default app;