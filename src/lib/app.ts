import express from 'express';
import { handleError, handleNotFound } from './middleware/errorHandling';
import testRoutes from './controllers/tests';

const app = express();

app.use(express.json());

app.use('/api/v1/tests', testRoutes);

app.use(handleNotFound);
app.use(handleError);

export default app;
