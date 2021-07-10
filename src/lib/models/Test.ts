/* eslint-disable no-mixed-spaces-and-tabs */
import { TestRequest, TestRow } from '../../types';
import pool from '../utils/pool';

export default class Test {
	id: string;
	testName: string;
	testBody: string;

	constructor(row: TestRow) {
	    const { id, test_name, test_body } = row;
	    this.id = id;
	    this.testName = test_name;
	    this.testBody = test_body;
	}

	static async create({ testName, testBody }: TestRequest): Promise<Test> {
	    console.log(testName, testBody);
	    const { rows } = await pool.query(
	        `INSERT INTO tests (test_name, test_body)
			VALUES ($1, $2)
			RETURNING *`,
	        [
	            testName,
	            testBody
	        ]
	    );
	    return new Test(rows[0]);
	}

	static async getAll(): Promise<Test[]> {
	    const { rows } = await pool.query('SELECT * FROM tests');
	    return rows.map(row => new Test(row));
	}

	static async getById(id: string): Promise<Test> {
	    const { rows } = await pool.query('SELECT * FROM tests WHERE id=$1', [id]);
	    return new Test(rows[0]);
	}

	static async replace(id: string, { testName, testBody }: TestRequest): Promise<Test> {
	    const { rows } = await pool.query(`
            UPDATE tests
            SET
            test_name=$1,
            test_body=$2
            WHERE id=$3
            RETURNING *
        `,
	    [
	        testName,
	        testBody,
	        id
	    ]);
	    return new Test(rows[0]);
	}
}
