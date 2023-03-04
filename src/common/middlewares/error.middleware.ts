import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from '../errors/statusCode.enum';

export const errorMiddleware = (error: any, _req: Request, res: Response, _next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    console.log('\x1b[33m%s\x1b[0m', error);

    const statusCode = error.statusCode || StatusCodes.ERRIR_INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
        statusCode,
        message: error.message,
    });
};
