const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const { body } = require("express-validator");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox25ae9a39df8645f18d8c0ff50525e28a.mailgun.org";
const mg = mailgun({
  apiKey: "e1d4f9d916f0aea495a73546f1a654b0-73e57fef-ad99ab06",
  domain: DOMAIN,
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });

  server.post(
    "/api/contact",
    body("firstname", "First name field is empty")
      .trim()
      .isLength({ min: 1 })
      .escape(),

    body("lastname", "Last name field is empty")
      .trim()
      .isLength({ min: 1 })
      .escape(),

    body("email", "Email is invalid").trim().isEmail().normalizeEmail(),

    body("message", "Something is wrong with the message you sent.")
      .trim()
      .escape(),
    (req, res) => {
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
        if (error) throw error;
        console.log(body);
      });
    }
  );
});
