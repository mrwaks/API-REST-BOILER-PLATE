'use strict';

// Npm Modules
import dotenv from 'dotenv';
dotenv.config();

const constants = {
  NODE_ENV: process.env.NODE_ENV,
  EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  BASE_URL_DEV: '/api/v1',
};

export default constants;
