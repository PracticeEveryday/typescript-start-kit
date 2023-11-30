import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

import { errorMiddleware } from './common/middlewares/error.middleware';
import { asyncWrapper } from './lib/utils/async-wrapper.util';
import { NotFoundError } from './common/errors/notFound.error';
import { BadRequestError } from './common/errors/badRequest.error';

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

app.get(
    '/error',
    asyncWrapper(async (_req: Request, _res: Response): Promise<void> => {
        return new Promise(() => {
            throw new Error('에러 테스트');
        });
    }),
);

app.get('/error/custom', (_req: Request, _res: Response): void => {
    throw new BadRequestError('커스텀 에러 테스트');
});

//에러 페이지 로드 404
app.get('/*', (_req: Request, _res: Response): void => {
    throw new NotFoundError('커스텀 에러 테스트 not found');
});

app.use(errorMiddleware);

export { app };
