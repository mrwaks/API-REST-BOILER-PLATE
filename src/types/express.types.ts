import * as session from 'express-session';
import {
  Application as IExpressApplication,
  Request,
  Response as IExpressResponse,
  NextFunction as IExpressNextFunction,
  RequestHandler as IExpressRequestHandler,
  ErrorRequestHandler as IExpressErrorRequestHandler,
} from 'express';

export {
  IExpressApplication,
  IExpressResponse,
  IExpressNextFunction,
  IExpressRequestHandler,
  IExpressErrorRequestHandler,
};

interface IExpressSession extends session.Session {
  userId?: number;
  username?: string;
  role?: 'ADMIN' | 'USER';
}

export interface IExpressRequest extends Request {
  session: IExpressSession;
}
