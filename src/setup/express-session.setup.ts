'use strict';

// Npm Modules
import * as session from 'express-session';
import MySQLStore from 'express-mysql-session';
import mysql from 'mysql';

// Config
import config from '../config';

const mysSqlStore = MySQLStore(session);

const storeOptions = {
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: config.constants.DATABASE_USERNAME,
  password: config.constants.DATABASE_PASSWORD,
  database: config.constants.DATABASE_NAME,
  createDatabaseTable: true,
};

const pool = mysql.createPool(storeOptions);

export const sessionStore = new mysSqlStore(storeOptions, pool);

const sessionOptions: session.SessionOptions = {
  name: '_sid',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  secret: config.constants.EXPRESS_SESSION_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: (1000 * 60 * 60 * 2),
    sameSite: true,
    secure: process.env.NODE_ENV === 'production',
  },
};

export const configSession = () => {
  return session.default(sessionOptions);
};
