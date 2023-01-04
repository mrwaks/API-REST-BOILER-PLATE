import { TCrudMethod } from './common.types';
import { IExpressRequestHandler } from './Express.types';

export interface IRoute {
  url: string;
  method: TCrudMethod;
  auth: boolean;
  filters?: IExpressRequestHandler[];
  controller: IExpressRequestHandler;
}