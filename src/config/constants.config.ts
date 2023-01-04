'use strict';

// Npm Modules
import dotenv from 'dotenv';
dotenv.config();

const constants = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL_DEV: '/api/v1',
};

export default constants;
