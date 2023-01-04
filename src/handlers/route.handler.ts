'use strict';

// Types
import { IExpressApplication, IRoute } from '../types';

// Setup
import { setupController, setupFilter, setupAuth } from '../setup';

const routesHandler = (app: IExpressApplication, routes: IRoute[]) => {
  setupAuth(app, routes);
  setupFilter(app, routes);
  setupController(app, routes);
};

export default routesHandler;
