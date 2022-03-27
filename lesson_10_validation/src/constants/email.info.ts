import { emailActionEnum } from "./enums";

export const emailInfo = {
  [emailActionEnum.WELCOME]: {
    subject: "Welcome!",
    html: "This is welcome mail",
  },

  [emailActionEnum.ACCOUNT_BLOCKED]: {
    subject: "Your account was blocked",
    html: "We're sorry, but your account was terminated due to violation of our terms",
  },
};
