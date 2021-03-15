import { Box, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    height: "100vh",
    width: "98vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {},
  },
  container: {},
  title: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
      textAlign: "center",
    },
  },
  subTitle: {
    color: "#ddf",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      textAlign: "center",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.container}>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Typography className={classes.title} variant="h1" component="h1">
            Benjamin Scott
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Typography className={classes.subTitle} variant="h2" component="p">
            React Web Developer
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
