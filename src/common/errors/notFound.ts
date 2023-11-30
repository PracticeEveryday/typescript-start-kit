import { CustomError } from './custom.error';
import { StatusCode } from '../dataType/statusCode.enum';

// 404 code
export class NotFound extends CustomError {
    constructor(message: string) {
        super(message, StatusCode.NOT_FOUND);
    }
}
