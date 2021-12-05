import { NextFunction, Request, Response } from 'express';

export const handleError = (
  err: { error: Error, status?: number },
  req: Request,
  res: Response
): void => {
  console.log('ERROR HANDLING!');
  const { status, error } = err;
  res.status(status || 500).send(error.message);
};

export const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next({
    error: new Error('Not Found'),
    status: 404
  });
};
