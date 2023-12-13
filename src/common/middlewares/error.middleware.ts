import logger from '../logger/logger';
import config from '../../config';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors';
import { StatusCode } from '../dataType/enums/statusCode.enum';
import { NodeEnvEnum } from '../dataType/enums/nodeEnv.enum';
import { ErrorEnum } from '../dataType/enums/error.enum';


export const errorMiddleware = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    if (config.NODE_ENV !== NodeEnvEnum.TEST){
        consoleByErrorType(error);
    }

    const {statusCode, message} = generateCodeAndBody(error);
    res.status(statusCode).json({
        message
    });
};

const consoleByErrorType = (error: unknown) => {
    if (error instanceof CustomError) {
        error.errorType === ErrorEnum.WARN?  logger.warn(error) : logger.error(error);
    } else if (error instanceof TypeError) {
        logger.warn(error);
    } else {
        logger.error(error as Error);
    }
};

const generateCodeAndBody = (error: unknown) => {
    let statusCode = StatusCode.INTERNAL_SERVER_ERROR;
    let message = '핸들링 할 수 없는 에러입니다. 확인 부탁드립니다 :)';

    if (error instanceof Error) {
        statusCode = StatusCode.INTERNAL_SERVER_ERROR;
        message = error.message;
    }

    if (error instanceof CustomError) {
        statusCode = error.statusCode || StatusCode.INTERNAL_SERVER_ERROR;
        message = error.message;
    }

    if (error instanceof TypeError) {
        statusCode = StatusCode.BAD_REQUEST;
        message = error.message;
    }

    return { statusCode, message };
};

