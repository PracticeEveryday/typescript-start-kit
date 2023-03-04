import { CustomError } from './custom.error';
import { StatusCodes } from './statusCode.enum';

// 400 code
export class NotFoundError extends CustomError {
    protected statusCode: number;

    constructor(message: string) {
        super(message);
        // StatusCodes는 열거형(enum) 데이터, BAD_REQUEST: 400
        this.statusCode = StatusCodes.ERROR_NOT_FOUND;
    }
}
