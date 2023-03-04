import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

import { errorMiddleware } from './lib/middlewares/error.middleware';
import { asyncWrapper } from './lib/middlewares/async-wrapper.middleware';
import { BadRequestError } from './lib/errors/bad-request.error';
import { NotFoundError } from './lib/errors/not-found.error';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
    res.json({
        message: 'Hello, this is Node.js, Express.js and TypeScript.',
    });
});

app.get(
    '/error',
    asyncWrapper((_req: Request, _res: Response) => {
        throw new Error('에러 테스트');
    }),
);

app.get(
    '/error/custom',
    asyncWrapper((_req: Request, _res: Response) => {
        throw new BadRequestError('커스텀 에러 테스트');
    }),
);

//에러 페이지 로드 404
app.get(
    '/*',
    asyncWrapper((_req: Request, _res: Response) => {
        throw new NotFoundError('커스텀 에러 테스트 not found');
    }),
);

app.use(errorMiddleware);

export { app };
