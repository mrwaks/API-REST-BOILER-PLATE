'use strict';

// Routes
import greetingRoutes from './greeting.route';

// Types
import { IRoute } from '../types';

const routes: IRoute[] = [...greetingRoutes];

export default routes;
