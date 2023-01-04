'use strict';

// Core Modules
import { createServer } from 'http';

// Express App
import app from './app';

// Setup
import { logger } from './setup';

const normalizePort = (val: string | number) => {
  let port;
  if (typeof val === 'string') {
    port = parseInt(val, 10);
  }
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = createServer(app);

const errorHandler = (error: any) => {
  if (error.syscall !== 'listening') {
    throw error;
  }

  const address = server.address();
  const bind =
    typeof address === 'string' ? `pipe: ${address}` : `port: ${port}`;

  switch (error.code) {
    case 'EACCESS':
      logger.error(`[Server] - ${bind} requires elevated privilieges`);
      break;
    case 'EADDRINUSE':
      logger.error(`[Server] - ${bind} is already in use`);
      break;
    default:
      throw error;
  }
};

server.listen(port);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind =
    typeof address === 'string' ? `pipe: ${address}` : `port: ${port}`;

  logger.info(`[Server] - Server listening on ${bind}`);
});

process.on('unhandledRejection', (err) => {
  logger.error(`[Unhandled Rejection] - ${err}`);
  throw err;
});

process.on('uncaughtException', (err) => {
  logger.error(`[Caught Exception]: ${err.message}`);
});

process.on('SIGINT', () => {
  logger.warn("[Server] - Server interrupted by 'SIGINT'");
  process.exit(1);
});
