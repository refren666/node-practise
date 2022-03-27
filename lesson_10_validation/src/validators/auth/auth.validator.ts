import { Joi, Segments } from 'celebrate';

import { commonValidator } from '../common/common.validator';

// const carSubValidator = Joi.object({
//   model: Joi.string()
// })

export const authValidator = {
  login: { // Segments -> what to validate
    [Segments.BODY]: Joi.object({
      email: commonValidator.emailValidator,
      password: Joi.string().min(8).required(),
      // cars: Joi.array().items(carSubValidator).min(2).max(90)
    })
  }
}

