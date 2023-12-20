import path from 'path';
import winston from 'winston';
import { winstonLogger } from './winstonLogger';
import colors from 'colors';
import { StackInfo } from '../dataType/types/stackInfo.type';

export class Logger {
    private readonly winstonLogger: winston.Logger;
    constructor() {
        this.winstonLogger = winstonLogger();
    }

    public info(...args: unknown[]){
        this.winstonLogger.info(this.generateLogMsg(args));
    }

    public warn(error: Error, ...args: unknown[]) {
        this.winstonLogger.warn(colors.red(this.generateLogMsg(args)));
        this.displayWarnStack(error.stack!);
    }

    public error(error: Error, ...args: unknown[]) {
        this.winstonLogger.error(colors.red(this.generateLogMsg(args)));
        this.displayErrorStack(error.stack!);
    }

    /**
     * 워닝 스택을 정리하여 보여줍니다.
     */
    private displayWarnStack(errorStack: string) {
        this.winstonLogger.warn(colors.bgRed(`Stack Trace: ${this.getGeneratedLogLocation(errorStack)}`));
        this.winstonLogger.warn(colors.yellow(errorStack.trim()));
    }


    /**
     * 에러 스택을 정리하여 보여줍니다.
     */
    private displayErrorStack(errorStack: string) {
        this.winstonLogger.error(colors.bgRed(`Stack Trace: ${this.getGeneratedLogLocation(errorStack)}`));
        this.winstonLogger.error(colors.red(errorStack.trim()));
    }


    /**
     * 로그 메시지를 함하여 하나로 보여줍니다.
     * object 타입인 경우 JSON.stringyfy로 문자열화 진행합니다.
     * -> Body, Result 등 결과값을 함께 넘겨주면 문자로 변경, 합친 후 반환합니다.
     */
    private generateLogMsg(logArguments: unknown[]): string {
        return logArguments.map(arg => (typeof arg === 'object') ? JSON.stringify(arg) : arg).join('\t');
    }


    private getGeneratedLogLocation(stack?: string){
        const GENERATED_LOG_IDX_NUM = 1;
        const stackInfo = this.getStackInfo(GENERATED_LOG_IDX_NUM, stack);

        return `${stackInfo.file}:${stackInfo.line}:${stackInfo.pos}`;

    }

    /**
     * 에러 스택에 대한 정보를 파싱한 후 반환합니다.
     * 해당 값은 메소드 이름, 파일 경로, 줄 위치, pos위치, 파일의 경로, stack
     */
    private getStackInfo (stackIdx: number, stack?: string): StackInfo {
        if(!stack){
            return {line: '', pos: '', file: ''};
        }
        const stackList = stack.split('\n');

        // 괄호 안에 함수 이름, 파일 이름, 줄 번호, 열 번호에 대한 정보가 포함된 스택 추적 줄을 일치시키기
        const stackTraceRegExpDetail = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;

        // 첫 번째 정규식의 변형이거나 단순화된 버전
        // 파일 이름, 줄 번호, 열 번호에 대한 정보가 포함된 스택 추적 줄을 일치시키도록 설계되었지만 함수 이름을 캡처하지는 않는다
        const stackTraceRegExpSimple = /at\s+()(.*):(\d*):(\d*)/gi;

        const stackOfIdx = stackList[stackIdx];
        if (!stackOfIdx) {
           throw new Error(`Not Found ${stackIdx} index`);
        }
        const match = stackTraceRegExpDetail.exec(stackOfIdx) || stackTraceRegExpSimple.exec(stackOfIdx);

        if (!match || match.length !== 5) {
            throw Error('Not a Stack');
        }

        const [, , filePath, line, pos] = match;

        return { line: line || '', pos: pos || '', file: path.basename(filePath!) };

    }
}

const logger = new Logger();
export default logger;