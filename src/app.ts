import config from '../config/index';
import cors from 'cors';
import morgan from 'morgan';
import express, { Request, Response } from 'express';
import helmet from 'helmet';

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

const port = +config.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
