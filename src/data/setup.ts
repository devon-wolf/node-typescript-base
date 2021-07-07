import { promises as fs } from 'fs';
import { Pool, QueryResult } from 'pg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setup = (pool : Pool) : Promise<QueryResult<any>> => {
    return fs
        .readFile(
            `${__dirname}/../../sql/setup.sql`,
            { encoding: 'utf-8' }
        )
        .then(sql => pool.query(sql));
};
