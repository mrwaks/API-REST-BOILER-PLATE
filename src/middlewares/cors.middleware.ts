'use strict';

// Config
import config from '../config';

// Types
import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
  TEnvironment,
} from '../types';

const cors = {
  dev: (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Accept, Origin, X-Requested-With, Content, Content-Type, Authorization, x-xsrf-token',
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  },
  prod: (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    if (
      req.headers.origin &&
      config.permissions.allowed.origins.includes(req.headers.origin)
    ) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    } else {
      res.setHeader('Access-Control-Allow-Origin', null);
    }
    if (req.method === 'OPTIONS') {
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Accept, Origin, X-Requested-With, Content, Content-Type, Authorization, x-xsrf-token',
      );
      res.setHeader('Access-Control-Allow-Methods', 'POST');
    }
    next();
  },
  env: (nodeEnv?: TEnvironment) =>
    nodeEnv === 'production' ? cors.prod : cors.dev,
};

export default cors;
