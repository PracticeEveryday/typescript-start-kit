import { StatusCodes } from './statusCode.enum';

class CustomError extends Error {
    protected statusCode: StatusCodes;
    constructor(message: string, statusCode: StatusCodes) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { CustomError };
