'use strict';

// Config
import config from '../config';

// Types
import { IExpressApplication, IRoute } from '../types';

const setupController = (app: IExpressApplication, routes: IRoute[]) => {
  routes.forEach((route) => {
    if (route.method) {
      return app[route.method](`${config.constants.BASE_URL_DEV}${route.url}`, route.controller);
    }
  });
};

export default setupController;
