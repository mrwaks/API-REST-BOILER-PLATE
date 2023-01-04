// ================ IMPORT ================ //

import {
  Application,
  RequestHandler,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';

import { ValidationError, ObjectSchema } from 'joi';

export {
  Application,
  RequestHandler,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
  ValidationError,
  ObjectSchema,
};

// ================ TYPES ================ //

export type TCrudMethod = 'get' | 'post' | 'put' | 'delete';

export type TEnvironment = 'production' | 'development';

export type TSchemaValidatorOptions = {
  body?: boolean;
  params?: boolean;
  query?: boolean;
};

// ================ INTERFACE ================ //

export interface IRoute {
  url: string;
  method: TCrudMethod;
  auth: boolean;
  filters?: RequestHandler[];
  controller: RequestHandler;
}

// ================ ENUM ================ //

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  REDIRECTED = 302,
  BADREQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  NOTALLOWED = 405,
  REQTIMEOUT = 408,
  CONFLICT = 409,
  TOMANYREQUEST = 429,
  INTERNSERVERR = 500,
}
