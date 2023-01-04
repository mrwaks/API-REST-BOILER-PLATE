'use strict';

// Types
import { Application, IRoute } from '../types';

const setupController = (app: Application, routes: IRoute[]) => {
  routes.forEach((route) => {
    if (route.method) {
      return app[route.method](route.url, route.controller);
    }
  });
};

export default setupController;
