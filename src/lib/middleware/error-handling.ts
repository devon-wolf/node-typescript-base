import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../../types'; 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handleError = (err : ExpressError, req : Request, res : Response, next : NextFunction) : void => {
    const status = err.status || 500;

    res.status(status);

    console.log(err);

    res.send({
        status,
        message: err.message
    });
};

export const handleNotFound = (req : Request, res : Response, next : NextFunction) : void => {
    const err = new ExpressError('Not Found');
    err.status = 404;
    next(err);
};
