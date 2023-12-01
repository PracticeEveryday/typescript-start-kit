import * as fs from 'fs';

export class FileUtil {
    /**
     * 폴더가 없을 시 생성하는 함수
     */
    static createFolderIfNotExists(folderPath: string): void {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        } else {
            return;
        }
    }
}