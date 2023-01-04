'use strict';

// Npm Modules
import winston from 'winston';

const isDevelopment = process.env.NODE_ENV !== 'production';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => (isDevelopment ? 'debug' : 'warn');

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

const format = () => {
  return isDevelopment
    ? winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
      winston.format.colorize({ all: false, colors }),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
      ),
    )
    : winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
      ),
    );
};

const transports = () => {
  const transportConfig: (
    | winston.transports.FileTransportInstance
    | winston.transports.ConsoleTransportInstance
  )[] = [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logs/all.log',
      level: 'info',
    }),
  ];

  if (isDevelopment) {
    transportConfig.push(new winston.transports.Console());
  }

  return transportConfig;
};

const logger = winston.createLogger({
  level: level(),
  levels,
  format: format(),
  transports: transports(),
});

export default logger;
