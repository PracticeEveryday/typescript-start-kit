import { StatusCode } from '../dataType/enums/statusCode.enum';

class CustomError extends Error {
    public statusCode: StatusCode;

    constructor(message: string, statusCode: StatusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { CustomError };
