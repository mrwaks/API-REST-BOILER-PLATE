'use strict';

// Classes
import { HTTP401Error } from '../classes';

// Types
import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
} from '../types';

const auth = (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
  try {
    const { userId, username, role } = req.session;
    if (!userId && !username && !role) {
      throw new HTTP401Error();
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;