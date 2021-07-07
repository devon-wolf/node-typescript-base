import express from 'express';
import testRoutes from './controllers/tests';

const app = express();

app.use(express.json());
app.use('/api/v1/tests', testRoutes);

export default app;
