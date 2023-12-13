import { CustomError } from './custom.error';
import { StatusCode } from '../dataType/enums/statusCode.enum';
import { ErrorEnum } from '../dataType/enums/error.enum';

// 400 code
export class BadRequest extends CustomError {
    constructor(message: string) {
        super({ message, statusCode: StatusCode.BAD_REQUEST, errorType: ErrorEnum.WARN });
    }
}
