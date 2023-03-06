import { StatusCodes } from './statusCode.enum';

class CustomError extends Error {
    public statusCode: StatusCodes;
    constructor(message: string, statusCode: StatusCodes) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { CustomError };
