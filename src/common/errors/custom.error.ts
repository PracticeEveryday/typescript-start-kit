import { StatusCode } from '../dataType/enums/statusCode.enum';
import { ErrorEnum } from '../dataType/enums/error.enum';

class CustomError extends Error {
    public statusCode: StatusCode;
    public errorType: ErrorEnum;

    constructor(param: { message: string, statusCode: StatusCode, errorType: ErrorEnum }) {
        super(param.message);
        this.statusCode = param.statusCode;
        this.errorType = param.errorType;

    }
}

export { CustomError };
