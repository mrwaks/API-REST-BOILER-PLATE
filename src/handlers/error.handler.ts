'use strict';

// Classes
import { BaseError } from '../classes';

// Types
import {
  HttpStatus,
  IJoiValidationError,
  IExpressErrorRequestHandler,
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
} from '../types';

// Setup
import { logger } from '../setup';

const errorHandler = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  returnError: (error: IExpressErrorRequestHandler, req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
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
    if (error instanceof IJoiValidationError) {
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
  get404: (req: IExpressRequest, res: IExpressResponse) => {
    return res
      .status(HttpStatus.NOTFOUND)
      .json({
        status: HttpStatus.NOTFOUND,
        message: 'Page Not Found',
      });
  },
};

export default errorHandler;
