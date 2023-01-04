'use strict';

// Types
import { 
  TSchemaValidatorOptions,
  Request,
  Response,
  NextFunction,
  ObjectSchema,
} from '../types';

const isValidSchema = (schema: ObjectSchema, opts: TSchemaValidatorOptions) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    let options: { [key: string]: any } = {};
    
    if (opts.body) {
      options.body = req.body;
    }
    if (opts.params) {
      options.params = req.params;
    }
    if (opts.query) {
      options.query = req.query;
    }
    await schema.validateAsync(options);
    next();
  } catch (error) {
    next(error);
  }
};

export default isValidSchema;
