import pg from 'pg';
import { DATABASE_URL, PGSSLMODE } from '../../config/constants';

const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: PGSSLMODE && { rejectUnauthorized: false } ? true : false
});

pool.on('connect', () => console.log('Postgres connected'));

export default pool;
