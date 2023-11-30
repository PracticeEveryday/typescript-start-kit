import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

import { errorMiddleware } from './common/middlewares/error.middleware';

import * as CustomError from './common/errors';


const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response): void => {
    res.status(200).json({
        message: 'Hello, this is Node.js, Express.js and TypeScript.',
    });
});

app.get('/error', (_req: Request, _res: Response): void => {
    throw new Error('에러 테스트');
});

app.get('/error/custom', (_req: Request, _res: Response): void => {
    throw new CustomError.BadRequest('커스텀 에러 테스트');
});

//에러 페이지 로드 404
app.get('/*', (_req: Request, _res: Response): void => {
    throw new CustomError.NotFound('커스텀 에러 테스트 not found');
});

app.use(errorMiddleware);

export { app };
