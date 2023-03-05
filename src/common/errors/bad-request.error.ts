import { CustomError } from './custom.error';
import { StatusCodes } from './statusCode.enum';

// 400 code
export class BadRequestError extends CustomError {
    constructor(message: string) {
        super(message, StatusCodes.ERROR_BAD_REQUEST);
    }
}
