import winston from 'winston';
import config from '../../config';
import { DateUtil } from '../../lib/utils/date.util';


const { colorize, combine } = winston.format;

export const winstonLogger = () => {
    return winston.createLogger({
        transports: [
            new winston.transports.Console({
                level: config.LOG_LEVEL,
                format: combine(winston.format.printf(info =>
                    `${DateUtil.getCurrentTime()} [${info.level.toUpperCase()}] ${info.message}`),
                    colorize()
                )
            })
        ]
    });
};