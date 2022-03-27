import Joi from "joi";

import { commonValidator } from "../common/common.validator";

export const authValidator = {
  login: Joi.object({
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator,
  }),

  registration: Joi.object({
    firstName: commonValidator.firstAndLastNameValidator,
    lastName: commonValidator.firstAndLastNameValidator,
    age: commonValidator.ageValidator,
    phone: commonValidator.phoneValidator,
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator,
  }),
};
