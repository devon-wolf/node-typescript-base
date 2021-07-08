import app from './lib/app';
import * as dotenv from 'dotenv';
import pool from './lib/utils/pool';

dotenv.config();

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
    console.log('Goodbye!');
    pool.end();
});
