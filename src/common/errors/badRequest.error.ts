import { CustomError } from './custom.error';
import { StatusCode } from './statusCode.enum';

// 400 code
export class BadRequestError extends CustomError {
    constructor(message: string) {
        super(message, StatusCode.ERROR_BAD_REQUEST);
    }
}
