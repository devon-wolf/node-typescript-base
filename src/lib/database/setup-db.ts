import pool from './lib/utils/pool';
import setup from './data/setup';

const setupPool = async () => await setup(pool);

setupPool();
