import { NextFunction, Response, Request } from 'express';

/**
 * try catch 문으로 async await 함수를 감싸 error를 핸들링 하기 위한 Wrapper 함수
 * @param fn async await 함수
 * @returns Express 라우터 기본 형식
 */
export const asyncWrapper = (fn: unknown) => {
    if (typeof fn !== 'function') throw new TypeError('funtion 타입 말고는 들어올 수 없습니다.');
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (typeof fn === 'function') {
                await fn(req, res, next);
            }
        } catch (error) {
            next(error);
        }
    };
};
