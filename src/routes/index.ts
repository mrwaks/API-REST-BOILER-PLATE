'use strict';

// Routes
import greetingRoutes from './greeting.route';
import userRoutes from './user.route';

// Types
import { IRoute } from '../types';

const routes: IRoute[] = [
  ...greetingRoutes,
  ...userRoutes,
];

export default routes;
