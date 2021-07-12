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

export interface ExampleRow {
	id: string;
	example_name: string;
	example_body: string;
}

export interface ExampleRequest {
	exampleName: string;
	exampleBody: string;
}
