'use strict';

// Classes
import { BaseError } from '../classes';

// Types
import {
  HttpStatus, 
  ValidationError, 
  ErrorRequestHandler, 
  Request, 
  Response,
  NextFunction, 
} from '../types';

// Setup
import { logger } from '../setup';

const errorHandler = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  returnError: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof BaseError) {
      const statusCode = error.httpCode || 500;
      logger.error(`[HTTP-ERROR] - StatusCode: ${statusCode} - Reason: ${error.message}`);
      return res
        .status(statusCode)
        .json({
          status: statusCode,
          message: error.message,
        });
    }
    if (error instanceof ValidationError) {
      logger.error(`[HTTP-ERROR] - StatusCode: ${HttpStatus.BADREQUEST} - Reason: ${error.message}`);
      return res
        .status(HttpStatus.BADREQUEST)
        .json({
          status: HttpStatus.BADREQUEST,
          message: error.message,
        });
    }
    if (error instanceof Error) {
      logger.error(`[HTTP-ERROR] - StatusCode: ${HttpStatus.INTERNSERVERR} - Reason: ${error.message}`);
      return res
        .status(HttpStatus.INTERNSERVERR)
        .json({ 
          status: HttpStatus.INTERNSERVERR,
          message: 'Internal Server Error',
        });
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get404: (req: Request, res: Response) => {
    return res
      .status(HttpStatus.NOTFOUND)
      .json({
        status: HttpStatus.NOTFOUND,
        message: 'Page Not Found',
      });
  },
};

export default errorHandler;
