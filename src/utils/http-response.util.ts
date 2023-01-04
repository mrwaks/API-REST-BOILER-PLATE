'use strict';

// Types
import { Response } from '../types';

const successResponse = (
  res: Response,
  statusCode: number,
  message?: string,
  data?: string | object,
) => {
  res.status(statusCode).json({
    status: statusCode,
    message: message,
    data: data,
  });
};

export default successResponse;
