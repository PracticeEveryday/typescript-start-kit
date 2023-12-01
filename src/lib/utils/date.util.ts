import dayjs from 'dayjs';

export class DateUtil {
    static getCurrentTime() {
        return dayjs().locale('ko').format('YYYY-MM-DD HH:mm:ss');
    }
}