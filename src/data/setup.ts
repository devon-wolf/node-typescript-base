import { promises as fs } from 'fs';
import { Pool } from 'pg';

const setup = async (pool : Pool): Promise<void> => {
    
    const sql = await fs
        .readFile(
            `${__dirname}/../../sql/setup.sql`,
            { encoding: 'utf-8' }
        );
    
    try {
        await pool.query(sql);
    }
    
    catch(error) {
        console.log(error);
    }
};

export default setup;
