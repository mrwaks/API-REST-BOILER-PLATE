'use strict';

// Config
import config from '../config';

// Types
import { IRoute, Application } from '../types';

const setupFilter = (app: Application, routes: IRoute[]) => {
  routes.forEach((route) => {
    if (route.method && route.filters) {
      return app[route.method](`${config.constants.BASE_URL_DEV}${route.url}`, ...route.filters);
    }
  });
};

export default setupFilter;
