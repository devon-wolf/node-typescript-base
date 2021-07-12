import pg from 'pg';
import { DATABASE_URL } from '../../config/constants';

const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: true && { rejectUnauthorized: false }
});

pool.on('connect', () => console.log('Postgres connected'));

export default pool;
