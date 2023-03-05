import { CustomError } from './custom.error';
import { StatusCodes } from './statusCode.enum';

// 404 code
export class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message, StatusCodes.ERROR_NOT_FOUND);
    }
}
