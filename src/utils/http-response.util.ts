'use strict';

// Types
import { IExpressResponse } from '../types';

const successResponse = (
  res: IExpressResponse,
  statusCode: number,
  message?: string,
  data?: string | object,
) => {
  return res.status(statusCode).json({
    status: statusCode,
    message: message,
    data: data,
  });
};

export default successResponse;
