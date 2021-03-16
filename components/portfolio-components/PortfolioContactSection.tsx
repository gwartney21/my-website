import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  IconButton,
  Divider,
} from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Twitter } from "@material-ui/icons";
import { AnimationProps, motion } from "framer-motion";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0 7rem",
    marginBottom: "5rem",
  },
  cardForm: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",
    height: "350px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "400px",
    },
  },
  card2: {
    marginTop: theme.spacing(8),
    width: "500px",
    display: "flex",
    flexDirection: "column",
    height: "350px",
    background: theme.palette.primary.dark,
    color: "#f1f1f1",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    color: "white",
    padding: "10rem 0 0 0",
  },
  otherContactTitle: {
    fontWeight: 300,
    paddingBottom: "1rem",
  },
  linkIcons: {
    color: theme.palette.secondary.light,
  },
  icons: {
    fontSize: "3rem",
  },
}));

interface Props {
  animate: boolean;
  variants: AnimationProps["variants"];
}

export default function PortfolioContactSection({ animate, variants }: Props) {
  const classes = useStyles();

  return (
    <Container id="contact" className={classes.root} maxWidth="lg">
      <Box overflow="hidden">
        <motion.div
          variants={variants}
          animate={animate ? "visibleByY" : "yBottomHidden"}
        >
          <Typography className={classes.title} align="center" variant="h2">
            Contact
          </Typography>
        </motion.div>
        <motion.div
          variants={variants}
          animate={animate ? "visibleByX" : "xRightHidden"}
        >
          <Grid alignItems="center" justify="center" container>
            <Grid item>
              <Card className={classes.cardForm}>
                <CardContent>
                  <form
                    className={classes.form}
                    name="contact"
                    method="POST"
                    action="/success"
                    data-netflify="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="yourfirstName"
                          label="First Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="yourlastName"
                          autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="youremail"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
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
                          id="yourmessage"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card2}>
                <CardContent>
                  <Typography
                    className={classes.otherContactTitle}
                    variant="h4"
                    component="h3"
                    align="center"
                  >
                    Other Ways of Contact
                  </Typography>
                  <Divider
                    style={{ background: "#f1f1f1" }}
                    variant="fullWidth"
                  />
                  <motion.div
                    variants={variants}
                    animate={animate ? "yVisibleGrid" : "yTopHidden"}
                  >
                    <Grid
                      style={{ padding: "5rem 0 3rem" }}
                      justify="center"
                      container
                    >
                      <motion.div variants={variants}>
                        <Grid item>
                          <Link href="https://github.com/benzend">
                            <IconButton className={classes.linkIcons}>
                              <GitHub className={classes.icons} />
                            </IconButton>
                          </Link>
                        </Grid>
                      </motion.div>
                      <motion.div variants={variants}>
                        <Grid item>
                          <Link href="https://twitter.com/@TheBenzend">
                            <IconButton className={classes.linkIcons}>
                              <Twitter className={classes.icons} />
                            </IconButton>
                          </Link>
                        </Grid>
                      </motion.div>
                      <motion.div variants={variants}>
                        <Grid item>
                          <Link href="https://www.linkedin.com/in/benjamin-scott-62a3741b1/">
                            <IconButton className={classes.linkIcons}>
                              <LinkedIn className={classes.icons} />
                            </IconButton>
                          </Link>
                        </Grid>
                      </motion.div>
                      <motion.div variants={variants}>
                        <Grid item>
                          <Link href="mailto: benjamin.scottt.dev@gmail.com">
                            <IconButton className={classes.linkIcons}>
                              <Mail className={classes.icons} />
                            </IconButton>
                          </Link>
                        </Grid>
                      </motion.div>
                    </Grid>
                  </motion.div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}
