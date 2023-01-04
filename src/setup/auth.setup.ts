'use strict';

// Middleware
import { auth } from '../middlewares';

// Config
import config from '../config';

// Types
import { IExpressApplication, IRoute } from '../types';

const setupAuth = (app: IExpressApplication, routes: IRoute[]) => {
  routes.forEach(route => {
    if (route.method && route.auth) {
      return app[route.method](`${config.constants.BASE_URL_DEV}${route.url}`, auth);
    }
  });
};

export default setupAuth;
