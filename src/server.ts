import app from './lib/app';
import pool from './lib/utils/pool';
import { PORT } from './config/constants';

app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
    console.log('Goodbye!');
    pool.end();
});
