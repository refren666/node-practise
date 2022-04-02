import nodemailer, { SentMessageInfo } from "nodemailer";
import EmailTemplate from "email-templates";
import path from "path";

import { EmailActionEnum, emailInfo } from "./../constants";
import { config } from "../config/config";

class EmailService {
  templateRenderer = new EmailTemplate({
    views: {
      root: path.join(__dirname, "../", "email-templates"), // process.cwd() points towards package.json file (from where program runs)
    },
  });

  public async sendMail(
    userEmail: string,
    action: EmailActionEnum,
    context = {}
  ): Promise<SentMessageInfo> {
    const { subject, templateName } = emailInfo[action]; // action = WELCOME or ACCOUNT_BLOCKED

    Object.assign(context, { frontendUrl: "https://google.com" }); // context already has userName(in controller)

    const html = await this.templateRenderer.render(templateName, context); // renders pug file; 2nd param is called "locals", the purpose is to transfer dynamic data to pug file!

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
