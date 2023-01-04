'use strict';

// Npm Modules
import bcrypt from 'bcrypt';

// Classes
import { HTTP401Error, HTTP404Error } from '../classes';

// Database
import { UserDB } from '../database';

// Types
import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
} from '../types';

const isValidUser = async (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await UserDB.find({ username });
  
    if (!user) {
      throw new HTTP404Error('User Not Found');
    }
  
    const isValidPassword = await bcrypt.compare(password, user.password);
  
    if (!isValidPassword) {
      throw new HTTP401Error();
    }

    res.locals.user = {
      userId: user.id,
      username: user.username,
      role: user.role,
    };
  
    next();
  } catch (error) {
    next(error);
  }
};

export default isValidUser;
