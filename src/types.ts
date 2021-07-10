import { Request, Response } from 'express';

export abstract class CRUDModel {
	public abstract create(req : Request, res : Response) : void;
	public abstract read(req : Request, res : Response) : void;
	public abstract update(req : Request, res : Response) : void;
	public abstract delete(req : Request, res : Response) : void;
}

export class ExpressError extends Error {
	status : number | undefined;
}

export interface TestRow {
	id: string;
	test_name: string;
	test_body: string;
}

export interface TestRequest {
	testName: string;
	testBody: string;
}
