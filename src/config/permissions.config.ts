'use strict';

const permissions = {
  allowed: {
    origins: [
      'https://example.com',
      'https://www.example.com',
      'https://sub.example.com',
    ],
    fetchModes: [
      'cors',
      'sameorigin',
    ],
  },
  notAllowed: {
    userAgents: [
      'curl',
      'wget',
      'postman',
    ],
  },
};

export default permissions;
