'use strict';

import { sessionStore } from '../setup';

// Utils
import { successResponse } from '../utils';

// Types
import { HttpStatus, IExpressNextFunction, IExpressRequest, IExpressResponse, TPrismaUser } from '../types';

const userController = {
  login: (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    try {
      const user: TPrismaUser = req.res.locals.user;
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.role = user.role;
      const statusCode = HttpStatus.OK;
      const message = 'Login Success';
      return successResponse(res, statusCode, message);
    } catch (error) {
      next(error);
    }
  },
  logout: (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    try {
      req.session.destroy((error: any) => {
        if (error) {
          throw error;
        }
        sessionStore.close();
        res.clearCookie('_sid');
        const statusCode = HttpStatus.OK;
        const message = 'Logout success';
        successResponse(res, statusCode, message);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default userController;