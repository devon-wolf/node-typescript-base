import express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => '<h1>YOU GOT ME</h1');

export default app;