import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('.env 파일이 없습니다!!');
}

export default {
  // 백엔드 포트번호
  PORT: process.env['PORT'] || 5000,
  LOG_LEVEL: process.env['LOG_LEVEL'] || 'info'
};