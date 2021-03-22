import { NextApiRequest, NextApiResponse } from "next";
import mailgun from "mailgun-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MY_DOMAIN,
    });
    const { firstname, lastname, email, message } = req.body;

    const data = {
      from: `Mailgun Sandbox <${process.env.MY_DOMAIN}.mailgun.org>`,
      to: "madeunlinked@gmail.com",
      subject: `MU Msg from ${email}`,
      text: `
          From: ${email}
          Name: ${firstname} ${lastname}
          Message: ${message}
          `,
    };
    mg.messages().send(data, function (error, body) {
      if (error) console.error(error);
    });
  }
}
