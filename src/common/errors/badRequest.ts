import { CustomError } from './custom.error';
import { StatusCode } from '../dataType/enums/statusCode.enum';

// 400 code
export class BadRequest extends CustomError {
    constructor(message: string) {
        super(message, StatusCode.BAD_REQUEST);
    }
}
