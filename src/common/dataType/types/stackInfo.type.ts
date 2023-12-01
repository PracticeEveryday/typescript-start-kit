/**
 * 에러가 발생한 줄, 위치, 파일 이름을 나타냅니다
 */
export type StackInfo = {
    line: string;
    pos: string;
    file: string;
};