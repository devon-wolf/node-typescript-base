/* eslint-disable no-mixed-spaces-and-tabs */
import { ExampleRequest, ExampleRow } from '../../types';
import pool from '../utils/pool';

export default class Example {
	id: string;
	exampleName: string;
	exampleBody: string;

	constructor(row: ExampleRow) {
	    const { id, example_name, example_body } = row;
	    this.id = id;
	    this.exampleName = example_name;
	    this.exampleBody = example_body;
	}

	static async create({ exampleName, exampleBody }: ExampleRequest): Promise<Example> {
	    const { rows } = await pool.query(
	        `INSERT INTO examples (example_name, example_body)
			VALUES ($1, $2)
			RETURNING *`,
	        [
	            exampleName,
	            exampleBody
	        ]
	    );
	    return new Example(rows[0]);
	}

	static async getAll(): Promise<Example[]> {
	    const { rows } = await pool.query('SELECT * FROM examples');
	    return rows.map(row => new Example(row));
	}

	static async getById(id: string): Promise<Example> {
	    const { rows } = await pool.query('SELECT * FROM examples WHERE id=$1', [id]);
	    return new Example(rows[0]);
	}

	static async update(id: string, { exampleName, exampleBody }: ExampleRequest): Promise<Example> {
	    const { rows } = await pool.query(`
            UPDATE examples
            SET
            example_name=$1,
            example_body=$2
            WHERE id=$3
            RETURNING *
        `,
	    [
	        exampleName,
	        exampleBody,
	        id
	    ]);
	    return new Example(rows[0]);
	}

	static async delete(id: string) : Promise<Example> {
	    const { rows } = await pool.query('DELETE FROM examples WHERE id=$1 RETURNING *', [id]);
	    return new Example(rows[0]);
	}
}
