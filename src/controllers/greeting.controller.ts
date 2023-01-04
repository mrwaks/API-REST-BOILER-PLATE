'use strict';

// Utils
import { successResponse } from '../utils';

// Types
import { HttpStatus, IExpressRequest, IExpressResponse } from '../types';

const greetingController = {
  hello: (req: IExpressRequest, res: IExpressResponse) => {
    const name = req.query.name;
    const statusCode = HttpStatus.OK;
    const message = `Hello ${name} !`;
    successResponse(res, statusCode, message);
  },
  bye: (req: IExpressRequest, res: IExpressResponse) => {
    const name = req.query.name;
    const statusCode = HttpStatus.OK;
    const message = `Goodbye ${name} !`;
    successResponse(res, statusCode, message);
  },
};

export default greetingController;
