'use strict';

// Npm Modules
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Routes
import routes from './routes';

// Handlers
import { routeHandler, errorHandler } from './handlers';

// Middlewares
import { cors, blockClientOutOfBrowser } from './middlewares';

// Types
import { TEnvironment } from './types';

// Config
import config from './config';

// Setup
import { logger } from './setup';

const nodeEnv = config.constants.NODE_ENV as TEnvironment;

const app = express();

app.disable('x-powered-by');

app
  .use(helmet())
  .use(express.json())
  .use(cookieParser())
  .use(express.urlencoded({ extended: true }))
  .use(cors.env(nodeEnv))
  .use(blockClientOutOfBrowser(nodeEnv));

routeHandler(app, routes);

app
  .use(errorHandler.returnError)
  .use(errorHandler.get404);

process.on('unhandledRejection', (err) => {
  logger.error(`[Unhandled Rejection] - ${err}`);
  throw err;
});

process.on('uncaughtException', (err) => {
  logger.error(`[Caught Exception]: ${err.message}`);
});

export default app;
