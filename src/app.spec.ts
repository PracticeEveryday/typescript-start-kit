import { app } from './app';
import request from 'supertest';

import { StatusCode } from './common/dataType/enums/statusCode.enum';
describe('app.ts 라우터 테스트', () => {
    test('GET /', async () => {
        const res = await request(app)
            .get('/');

        expect(res.statusCode).toEqual(StatusCode.OK);
        expect(res.body).toEqual({
            message: 'Hello, this is Node.js, Express.js and TypeScript.'
        });
    });

    test('GET /error', async () => {
        const res = await request(app)
            .get('/error');

        expect(res.statusCode).toEqual(StatusCode.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('message', 'Error!');
    });

    test('GET /error/custom', async () => {
        const res = await request(app)
            .get('/error/custom');

        expect(res.statusCode).toEqual(StatusCode.BAD_REQUEST);
        expect(res.body).toHaveProperty('message', 'custom error!');
    });

    test('GET /asdf', async () => {
        const res = await request(app)
            .get('/asdf');

        expect(res.statusCode).toEqual(StatusCode.NOT_FOUND);
        expect(res.body).toHaveProperty('message', 'Not Found Endpoint');
    });
});