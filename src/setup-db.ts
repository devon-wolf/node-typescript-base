import pool from './lib/utils/pool';
import setup from './data/setup';

console.log('Setting up the database...');

const setupPool = async () => await setup(pool);

setupPool();
