import { DateUtil } from './date.util';
import dayjs from 'dayjs';

describe('DateUtil 테스트', () => {
    test('현재 시간 확인하기', async () => {
        const currentDate = dayjs().locale('ko').format('YYYY-MM-DD HH:mm:ss');
        const date = DateUtil.getCurrentTime();

        expect(date).toBe(currentDate);
    });
});