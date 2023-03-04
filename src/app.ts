import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

import { errorMiddleware } from './middlewares/error.middleware';

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

app.get('/error', (_req: Request, _res: Response) => {
    throw new Error('에러 테스트');
});

app.use(errorMiddleware);

export { app };
