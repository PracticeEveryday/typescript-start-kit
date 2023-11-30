import { CustomError } from './custom.error';
import { StatusCode } from './statusCode.enum';

// 404 code
export class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message, StatusCode.ERROR_NOT_FOUND);
    }
}
