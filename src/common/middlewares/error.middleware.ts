import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom.error';
import { StatusCode } from '../errors/statusCode.enum';

export const errorMiddleware = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    console.log('\x1b[33m%s\x1b[0m', error);

    const {statusCode, message} = generateCodeAndBody(error);

    res.status(statusCode).json({
        message
    });
};

const generateCodeAndBody = (error: unknown) => {
    let statusCode = StatusCode.ERROR_INTERNAL_SERVER_ERROR;
    let message = '핸들링 할 수 없는 에러입니다. 확인 부탁드립니다 :)';

    if (error instanceof Error) {
        statusCode = StatusCode.ERROR_INTERNAL_SERVER_ERROR;
    }

    if (error instanceof CustomError) {
        statusCode = error.statusCode || StatusCode.ERROR_INTERNAL_SERVER_ERROR;
        message = error.message;
    }

    if (error instanceof TypeError) {
        statusCode = StatusCode.ERROR_BAD_REQUEST;
        message = error.message;
    }

    return { statusCode, message };
};
