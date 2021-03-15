import { ReactChild, useEffect } from "react";
import {
  Box,
  Divider,
  makeStyles,
  Paper,
  SvgIconTypeMap,
  Typography,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { motion, useAnimation, AnimationProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IServiceContainer {
  title: string;
  children: ReactChild;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  mentorship?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    background: "#4a4a4a",
    margin: "2rem 0",
    height: "370px",
    boxShadow: "15px 20px 10px #0008",
    borderRadius: 0,
    [theme.breakpoints.up("sm")]: {},
  },
  titleStyle: {
    color: theme.palette.secondary.main,
    textShadow: "0 4px 2px #0008",
    fontSize: "1.7rem",
    textAlign: "center",
  },
  textStyle: {
    padding: "3rem",
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
  },
  icon: {
    color: "#0003",
  },

  builtWithText: {
    color: theme.palette.secondary.contrastText,
    textShadow: "0 4px 2px #0008",
    textAlign: "center",
  },
}));

export const ServiceContainer = ({
  title,
  link,
  children,
  Icon,
  mentorship,
}: IServiceContainer) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const myVariants: AnimationProps["variants"] = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const { root, titleStyle, textStyle, icon, builtWithText } = useStyles();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={myVariants}
    >
      <Paper className={root}>
        <Box>
          <Box pt={6}>
            <Typography className={builtWithText} variant="body1">
              {mentorship ? "Teaching" : "Built With"}
            </Typography>
            <Typography className={titleStyle} variant="h5" component="h4">
              {title}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyItems="center"
            justifyContent="center"
            mt={1}
          >
            <Icon className={icon} />
          </Box>
          <Divider />
          <Box className={textStyle}>{children}</Box>
        </Box>
      </Paper>
    </motion.div>
  );
};
