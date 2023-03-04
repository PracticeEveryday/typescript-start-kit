import { CustomError } from './custom.error';
import { StatusCodes } from './statusCode.enum';

// 400 code
export class NotFoundError extends CustomError {
    protected statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.ERROR_NOT_FOUND;
    }
}
