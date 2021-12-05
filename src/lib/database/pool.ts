import pg from 'pg';

const PGSSLMODE = process.env.PGSSLMODE ? true : false;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: PGSSLMODE && { rejectUnauthorized: false },
});

pool.on('connect', () => console.log('Postgres connected'));

export default pool;
