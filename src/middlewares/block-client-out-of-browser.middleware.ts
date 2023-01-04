'use strict';

// Config
import config from '../config';

// Classes
import { HTTP403Error } from '../classes';

// Types
import { TEnvironment, Request, Response, NextFunction } from '../types';

const isHeadersExists = (headers: (string | string[])[]) => {
  headers.flat().forEach(header => {
    if (!header) {
      throw new HTTP403Error();
    }
  });
};

const isFetchModeHeaderAllowed = (fetchModeHeader: string | string[]) => {
  if (Array.isArray(fetchModeHeader)) {
    fetchModeHeader.forEach(header => {
      if (!config.permissions.allowed.fetchModes.includes(header)) {
        throw new HTTP403Error();
      }
    });
  }
  if (typeof fetchModeHeader === 'string') {
    if (!config.permissions.allowed.fetchModes.includes(fetchModeHeader)) {
      throw new HTTP403Error();
    }
  }
};

const isOriginHeaderAllowed = (originHeader: string) => {
  if (!config.permissions.allowed.origins.includes(originHeader)) {
    throw new HTTP403Error();
  }
};

const isUserAgentsHeaderAllowed = (userAgentHeader: string) => {
  config.permissions.notAllowed.userAgents.forEach(userAgentNotAllowed => {
    const regexStartWithUserAgentNotAllowed = new RegExp(`^${userAgentNotAllowed}`, 'i');
    if (regexStartWithUserAgentNotAllowed.test(userAgentHeader)) {
      throw new HTTP403Error();
    }
  });
};

const blockClientOutOfBrowser = (env?: TEnvironment) => (req: Request, res: Response, next: NextFunction) => {
  try {
    if (env === 'production') {
      const headers = {
        secFetchMode: req.headers['sec-fetch-mode'],
        origin: req.headers.origin,
        userAgent: req.headers['user-agent'],
      };
      const headerList = Object.entries(headers).map(header => header[1]);

      isHeadersExists(headerList);
      isFetchModeHeaderAllowed(headers.secFetchMode);
      isOriginHeaderAllowed(headers.origin);
      isUserAgentsHeaderAllowed(headers.userAgent);
            
      return next();
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default blockClientOutOfBrowser;
