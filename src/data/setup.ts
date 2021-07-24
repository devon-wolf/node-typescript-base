import { promises as fs } from 'fs';
import { Pool } from 'pg';

const setup = async (pool : Pool): Promise<void> => {
    console.log('Looking for the setup file...');
    
    const sql = await fs
        .readFile(
            `${__dirname}/../../sql/setup.sql`,
            { encoding: 'utf-8' }
        );
    
    await pool.query(sql);
    
    console.log('Setup complete.');
};

export default setup;
