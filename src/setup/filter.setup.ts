'use strict';

// Types
import { IRoute, Application } from '../types';

const setupFilter = (app: Application, routes: IRoute[]) => {
  routes.forEach((route) => {
    if (route.method && route.filters) {
      return app[route.method](route.url, ...route.filters);
    }
  });
};

export default setupFilter;
