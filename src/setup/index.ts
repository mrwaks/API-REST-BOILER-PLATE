import prisma from './prisma.setup';
import logger from './logger.setup';
import setupController from './controller.setup';
import setupFilter from './filter.setup';
import setupAuth from './auth.setup';
import { sessionStore, configSession } from './express-session.setup';

export {
  prisma,
  logger,
  setupController,
  setupFilter,
  setupAuth,
  sessionStore,
  configSession,
};
