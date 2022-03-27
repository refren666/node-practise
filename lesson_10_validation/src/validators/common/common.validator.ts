import Joi from "joi";

import { variables } from "../../constants";

export const commonValidator = {
  emailValidator: Joi.string()
    .required()
    .regex(variables.EMAIL_REGEXP)
    .message("Email is invalid")
    .trim(),

  passwordValidator: Joi.string()
    .required()
    .min(8)
    .max(20)
    .message("Password is invalid")
    .trim(),

  firstAndLastNameValidator: Joi.string()
    .required()
    .regex(variables.NAME_REGEXP)
    .message("First/last name is invalid")
    .trim(),

  ageValidator: Joi.number()
    .integer()
    .min(1)
    .max(150)
    .message("Age is invalid"),

  phoneValidator: Joi.string()
    .required()
    .regex(variables.PHONE_REGEXP)
    .message("Phone number is invalid"),
};
