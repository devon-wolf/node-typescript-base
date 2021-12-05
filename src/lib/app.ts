import express from 'express';
import healthCheckController from './controllers/health-checks';
import { handleError, handleNotFound } from './middleware/error-handling';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/health-check', healthCheckController);

app.use(handleNotFound);
app.use(handleError);

export default app;
