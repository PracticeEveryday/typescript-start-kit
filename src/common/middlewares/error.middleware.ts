import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom.error';
import { StatusCodes } from '../errors/statusCode.enum';

export const errorMiddleware = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    console.log('\x1b[33m%s\x1b[0m', error);
    if (error instanceof CustomError) {
        const statusCode = error.statusCode || StatusCodes.ERRIR_INTERNAL_SERVER_ERROR;

        res.status(statusCode).json({
            statusCode,
            message: error.message,
        });
    } else if (error instanceof Error) {
        let message = 'Unknown Error';

        if (error instanceof Error) {
            message = error.message;
            error.name;
        }

        res.status(StatusCodes.ERRIR_INTERNAL_SERVER_ERROR).json({
            errorMessage: message,
            errorCode: StatusCodes.ERRIR_INTERNAL_SERVER_ERROR,
        });
    }
};
