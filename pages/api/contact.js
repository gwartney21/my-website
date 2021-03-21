import mailgun from "mailgun-js";

export default function handler(req, res) {
  if (req.method === "POST") {
    res.set("Access-Control-Allow-Origin", "*");
    const DOMAIN = "sandbox25ae9a39df8645f18d8c0ff50525e28a.mailgun.org";
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: DOMAIN,
    });
    console.log(req.body);
    const { firstname, lastname, email, message } = req.body;

    const data = {
      from:
        "Mailgun Sandbox <postmaster@sandbox25ae9a39df8645f18d8c0ff50525e28a.mailgun.org>",
      to: "madeunlinked@gmail.com",
      subject: `MU Msg from ${email}`,
      text: `
          From: ${email}
          Name: ${firstname} ${lastname}
          Message: ${message}
          `,
    };
    mg.messages().send(data, function (error, body) {
      if (error) throw new Error(error);
    });
  }
}
