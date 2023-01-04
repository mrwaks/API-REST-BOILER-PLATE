'use strict';

// Npm Modules
import Joi from 'joi';

const greetingSchema = Joi.object({
  query: Joi.object({
    name: Joi.string().required(),
  }),
});

export default greetingSchema;
