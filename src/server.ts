import app from './lib/app';
import pool from './lib/utils/pool';

app.listen(process.env.PORT, () => {
    console.log(`Started on ${process.env.PORT}`);
});

process.on('exit', () => {
    console.log('Goodbye!');
    pool.end();
});
