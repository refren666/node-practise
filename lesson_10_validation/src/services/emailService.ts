import nodemailer from "nodemailer";

import { emailActionEnum, emailInfo } from "./../constants";
import { config } from "../config/config";

class EmailService {
  public sendMail(userEmail: string, action: emailActionEnum) {
    const { subject, html } = emailInfo[action]; // action = WELCOME or ACCOUNT_BLOCKED

    const emailTransporter = nodemailer.createTransport({
      from: "No Reply",
      service: "gmail", // already pre-defined config for sending messages to gmail accounts
      auth: {
        // data about my email (from where i send email to users)
        user: config.NO_REPLY_EMAIL,
        pass: config.NO_REPLY_EMAIL_PASSWORD,
      },
    });

    return emailTransporter.sendMail({
      to: userEmail,
      subject,
      html, // email content
    });
  }
}

export const emailService = new EmailService();
