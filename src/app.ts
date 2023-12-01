import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

import { errorMiddleware } from './common/middlewares/error.middleware';

import * as CustomError from './common/errors';
import { StatusCode } from './common/dataType/statusCode.enum';


const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response): void => {
    res.status(StatusCode.OK).json({
        message: 'Hello, this is Node.js, Express.js and TypeScript.',
    });
});

app.get('/error', (_req: Request, _res: Response): void => {
    throw new Error('Error!');
});

app.get('/error/custom', (_req: Request, _res: Response): void => {
    throw new CustomError.BadRequest('custom error!');
});

//에러 페이지 로드 404
app.get('/*', (_req: Request, _res: Response): void => {
    throw new CustomError.NotFound('Not Found Endpoint');
});

app.use(errorMiddleware);

export { app };
