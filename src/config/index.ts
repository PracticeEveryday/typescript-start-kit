import * as dotenv from 'dotenv';
import { NodeEnvEnum } from '../common/dataType/enums/nodeEnv.enum';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('.env 파일이 없습니다!!');
}

export default {
  PORT: process.env['PORT'] || 5000,
  NODE_ENV: process.env['NODE_ENV'] || NodeEnvEnum.DEV,
  LOG_LEVEL: process.env['LOG_LEVEL'] || 'info'

};