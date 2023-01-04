'use strict';

// Filters
import { isValidSchema } from '../filters';

// Controllers
import controllers from '../controllers';

// Models
import { greetingSchema } from '../models';

// Types
import { IRoute } from '../types';

const greetingRoutes: IRoute[] = [
  {
    url: '/hello',
    method: 'get',
    auth: false,
    filters: [isValidSchema(greetingSchema, { query: true })],
    controller: controllers.greeting.hello,
  },
  {
    url: '/bye',
    method: 'get',
    auth: false,
    filters: [isValidSchema(greetingSchema, { query: true })],
    controller: controllers.greeting.bye,
  },
];

export default greetingRoutes;
