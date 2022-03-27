import { Joi } from "celebrate";
import { variables } from "../../constants";

export const commonValidator = {
  emailValidator: Joi.string().regex(variables.EMAIL_REGEXP).required()
}