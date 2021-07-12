import { promises as fs } from 'fs';
import { Pool, QueryResult } from 'pg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setup = (pool : Pool) : Promise<QueryResult<any> | void> => {
    console.log('Looking for the setup file...');
    return fs
        .readFile(
            `${__dirname}/../../sql/setup.sql`,
            { encoding: 'utf-8' }
        )
        .then(sql => {
            pool.query(sql);
            console.log('Query run on the setup file!');
        })
        .catch(() => console.log('Something went wrong'));
};

export default setup;
