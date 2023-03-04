import { CustomError } from './custom.error';
import { StatusCodes } from './statusCode.enum';

export class BadRequestError extends CustomError {
    protected statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.ERROR_BAD_REQUEST;
    }
}
