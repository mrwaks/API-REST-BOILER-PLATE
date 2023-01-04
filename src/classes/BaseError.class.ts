'use strict';

// Types
import { HttpStatus } from '../types';

class BaseError extends Error {
  public readonly name: string;

  public readonly httpCode: HttpStatus;
  
  public readonly isOperational: boolean;
  
  constructor(name: string, httpCode: HttpStatus, description: string, isOperational: boolean) {
    super(description);
    
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

export default BaseError;
