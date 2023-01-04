'use strict';

// Npm Modules
import Joi from 'joi';

const userSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export default userSchema;