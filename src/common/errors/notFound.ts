import { CustomError } from './custom.error';
import { StatusCode } from '../dataType/enums/statusCode.enum';
import { ErrorEnum } from '../dataType/enums/error.enum';

// 404 code
export class NotFound extends CustomError {
    
    constructor(message: string) {
        super({ message, statusCode: StatusCode.NOT_FOUND, errorType: ErrorEnum.WARN });
    }
}
