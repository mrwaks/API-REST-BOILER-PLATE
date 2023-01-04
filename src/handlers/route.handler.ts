'use strict';

// Types
import { Application, IRoute } from '../types';

// Setup
import { setupController, setupFilter } from '../setup';

const routesHandler = (app: Application, routes: IRoute[]) => {
  setupFilter(app, routes);
  setupController(app, routes);
};

export default routesHandler;
