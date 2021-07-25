import express from 'express';
import { handleError, handleNotFound } from './middleware/error-handling';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(handleNotFound);
app.use(handleError);

export default app;
