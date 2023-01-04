'use strict';

// Classes
import BaseError from './BaseError.class';

// Types
import { HttpStatus } from '../types';

/** Http bad request error. */
export class HTTP400Error extends BaseError {
  constructor(description = 'Bad Request') {
    super('BAD REQUEST', HttpStatus.BADREQUEST, description, true);
  }
}

/** Http unauthorized error. */
export class HTTP401Error extends BaseError {
  constructor(description = 'Unauthorized') {
    super('UNAUTHORIZED', HttpStatus.UNAUTHORIZED, description, true);
  }
}

/** Http forbidden error. */
export class HTTP403Error extends BaseError {
  constructor(description = 'Forbidden') {
    super('FORBIDDEN', HttpStatus.FORBIDDEN, description, true);
  }
}

/** Http found error. */
export class HTTP404Error extends BaseError {
  constructor(description = 'Not Found') {
    super('NOT FOUND', HttpStatus.NOTFOUND, description, true);
  }
}

/** Http conflict. */
export class HTTP409Error extends BaseError {
  constructor(description = 'Conflict') {
    super('CONFLICT', HttpStatus.CONFLICT, description, true);
  }
}

/** Http too many request error. */
export class HTTP429Error extends BaseError {
  constructor(description = 'Too many requests') {
    super('TOO MANY REQUESTS', HttpStatus.TOMANYREQUEST, description, true);
  }
}

/** Http internal server error. */
export class HTTP500Error extends BaseError {
  constructor(description = 'Internal Server Error') {
    super('INTERNAL SERVER ERROR', HttpStatus.INTERNSERVERR, description, true);
  }
}
