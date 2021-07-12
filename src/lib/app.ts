import express from 'express';
import { handleError, handleNotFound } from './middleware/error-handling';
import exampleRoutes from './controllers/examples';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/examples', exampleRoutes);

app.use(handleNotFound);
app.use(handleError);

export default app;
