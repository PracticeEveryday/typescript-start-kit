import { NextFunction, Response, Request } from 'express';

/**
 * try catch 문으로 async await 함수를 감싸 error를 핸들링 하기 위한 Wrapper 함수
 * @param fn async await 함수
 * @returns Express 라우터 기본 형식
 */
export const asyncWrapper = (fn: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
