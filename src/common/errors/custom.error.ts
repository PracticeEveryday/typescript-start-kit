import { StatusCode } from './statusCode.enum';

class CustomError extends Error {
    public statusCode: StatusCode;
    constructor(message: string, statusCode: StatusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { CustomError };
