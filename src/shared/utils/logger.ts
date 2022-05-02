import winston from 'winston';

const logger = winston.createLogger({});

// use console outputs only in dev
logger.add(new winston.transports.Console());

export default logger;
