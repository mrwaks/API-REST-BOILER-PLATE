'use strict';

// Types
import { 
  TJoiSchemaValidatorOptions,
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
  IJoiObjectSchema,
} from '../types';

const isValidSchema = (schema: IJoiObjectSchema, opts: TJoiSchemaValidatorOptions) => async (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
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
