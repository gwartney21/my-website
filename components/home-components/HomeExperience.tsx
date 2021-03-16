import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import {
  Code,
  FlashOn,
  School,
  StayCurrentPortrait,
  Web,
} from "@material-ui/icons";
import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";
import { SectionTitle } from "./SectionTitle";
import { ServicesContainer } from "./ServicesContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
  mainContainer: {
    padding: "4rem 0",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      padding: "8rem 0",
      width: "100%",
    },
  },
  mainContainerItem: {
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  secondaryContainer: {
    padding: "3.2rem 0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      padding: "5rem 0",
      width: "100%",
      margin: "5rem 0",
      ["&.flipped"]: {
        flexDirection: "row-reverse",
      },
    },
  },
  secondaryContainerItem: {
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  secondaryTitle: {
    textAlign: "center",
    borderRadius: ".1rem",
    margin: "2rem 0 3rem",
    textShadow: "0 10px 3px #0007",
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
  },
  serviceGrid: {
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    "&::before": {
      content: '"- "',
    },
  },
}));

interface IHomeExperienceProps {
  variants: AnimationProps["variants"];
}

export const HomeExperience: FC<IHomeExperienceProps> = ({ variants }) => {
  const {
    secondaryTitle,
    mainContainer,
    mainContainerItem,
    secondaryContainer,
    secondaryContainerItem,
    root,
    serviceGrid,
    listItem,
  } = useStyles();
  return (
    <Box id="experience" className={root}>
      <SectionTitle text="Experience" />
      <Container maxWidth="xl">
        <Grid className={mainContainer} container>
          <Grid className={mainContainerItem} item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
