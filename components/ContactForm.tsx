import { useRouter } from "next/router";

import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { EventHandler, useState } from "react";
import { Event } from "three";

const useStyles = makeStyles((theme) =>
  createStyles({
    formStyle: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submitStyle: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

export const ContactForm = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (!firstname) {
      alert("Please enter your first name.");
      return false;
    } else if (!lastname) {
      alert("Please enter your last name.");
      return false;
    } else if (!email) {
      alert("Please enter a valid email.");
      return false;
    } else if (!message) {
      alert(
        "There is no text in the message field, please type out a reason you would like to get in contact."
      );
      return false;
    } else return true;
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const validated = validate();

    if (validated) {
      const userMessageInfo = {
        firstname,
        lastname,
        email,
        message,
      };
      try {
        axios
          .post("http://localhost:3000/api/contact", userMessageInfo)
          .then(() => console.log("Submission successful!"))
          .catch((err) => console.error(err));
      } catch (err) {
        throw err;
      }
      router.push("/success");
      resetForm();
    } else {
      console.error("A field is either missing or invalid.");
    }
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  const { formStyle, submitStyle } = useStyles();
  return (
    <form className={formStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstname"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            multiline
            name="message"
            label="Send A Message"
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={submitStyle}
        onClick={submitHandler}
      >
        Send Message
      </Button>
    </form>
  );
};
