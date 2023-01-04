export type TCrudMethod = 'get' | 'post' | 'put' | 'delete';

export type TEnvironment = 'production' | 'development';

export type TJoiSchemaValidatorOptions = {
  body?: boolean;
  params?: boolean;
  query?: boolean;
};