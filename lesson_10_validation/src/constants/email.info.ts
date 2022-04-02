import { EmailActionEnum } from "./enums";

export const emailInfo = {
  [EmailActionEnum.WELCOME]: {
    subject: "Welcome!",
    // html: "This is welcome mail",
    templateName: "welcome", // welcome.pug
  },

  [EmailActionEnum.ACCOUNT_BLOCKED]: {
    subject: "Your account was blocked",
    // html: "We're sorry, but your account was terminated due to violation of our terms",
    templateName: "accountBlocked", // temporary!
  },
};
