import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    marginBottom: "12rem",
  },
  title: {
    color: theme.palette.secondary.contrastText,
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "4px 0 5px #0007",
    [theme.breakpoints.up("sm")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "8rem",
    },
  },
  title2: {
    color: theme.palette.secondary.main,
    textShadow: "4px 0 5px #0007",
  },
  titleContainer: {
    padding: "1rem 0 2rem 0",
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    fontSize: "1rem",
    textAlign: "center",
    textShadow: "4px 0 5px #0007",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  textContainer: {
    height: "100vh",
    padding: "6rem 0",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-around",
    },
  },
  ctaText: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    textShadow: "4px 0 5px #0007",
    fontWeight: 200,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.6rem",
    },
  },
  ctaButton: {
    background:
      "linear-gradient(180deg, #FF2727 0%, rgba(235, 81, 81, 0) 100%)",
    boxShadow: "none",
    borderRadius: 0,
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem",
      fontWeight: 300,
    },
  },
}));

export default function HomeHeader() {
  const classes = useStyles();
  const loadTime = 1;
  return (
    <Box className={classes.root}>
      <Container>
        <Grid className={classes.textContainer} container>
          <Grid item>
            <Box className={classes.titleContainer}>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0 + loadTime }}
              >
                <Typography className={classes.title} variant="h1">
                  Made<span className={classes.title2}>Unlinked</span>
                </Typography>
              </motion.div>
            </Box>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + loadTime }}
            >
              <Typography className={classes.subtitle} variant="h2">
                Web Development Made Easy
              </Typography>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + loadTime }}
            >
              <Typography className={classes.ctaText} variant="body1">
                Need An App Or Website?
              </Typography>
            </motion.div>
            <br />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + loadTime }}
            >
              <Link href="/contact">
                <Button
                  className={classes.ctaButton}
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Click Here
                </Button>
              </Link>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
