import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../../types'; 

export const handleError = (err: ExpressError, req: Request, res: Response): void => {
    console.log(err);
    
    const status = err.status || 500;
    res
        .status(status)
        .send({
            status,
            message: err.message
        });
};

export const handleNotFound = (req: Request, res: Response, next: NextFunction): void => {
    const err = new ExpressError('Not Found');
    err.status = 404;
    next(err);
};
