'use strict';

// Utils
import { successResponse } from '../utils';

// Types
import { HttpStatus, Request, Response } from '../types';

const greetingController = {
  hello: (req: Request, res: Response) => {
    const name = req.query.name;
    const statusCode = HttpStatus.OK;
    const message = `Hello ${name} !`;
    successResponse(res, statusCode, message);
  },
  bye: (req: Request, res: Response) => {
    const name = req.query.name;
    const statusCode = HttpStatus.OK;
    const message = `Goodbye ${name} !`;
    successResponse(res, statusCode, message);
  },
};

export default greetingController;
