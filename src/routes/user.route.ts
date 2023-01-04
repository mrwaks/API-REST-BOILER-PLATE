'use strict';

// Filters
import { isValidSchema, isValidUser } from '../filters';

// Controllers
import controllers from '../controllers';

// Models
import { userSchema } from '../models';

// Types
import { IRoute } from '../types';

const userRoutes: IRoute[] = [
  {
    url: '/login',
    method: 'post',
    auth: false,
    filters: [
      isValidSchema(userSchema, { body: true }),
      isValidUser,
    ],
    controller: controllers.user.login,
  },
  {
    url: '/logout',
    method: 'get',
    auth: true,
    controller: controllers.user.logout,
  },
];

export default userRoutes;