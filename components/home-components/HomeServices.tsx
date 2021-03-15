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
  mainTitle: {
    padding: ".3rem 0",
    marginTop: "1rem",
    textShadow: "0 3px 3px #0007",
    textAlign: "center",
    boxShadow: "10px 10px 5px #0009",

    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.up("lg")]: {
      fontSize: "5rem",
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

interface IHomeServicesProps {
  variants: AnimationProps["variants"];
}

export const HomeServices = ({ variants }: IHomeServicesProps) => {
  const {
    mainTitle,
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
    <Box id="services" className={root}>
      <Box overflow="hidden">
        <Typography className={mainTitle} variant="h2">
          Services
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Grid className={mainContainer} container>
          <Grid className={mainContainerItem} item>
            <ServicesContainer
              mainTitle="Websites"
              mainTitleStyle={secondaryTitle}
              rootStyle={secondaryContainer}
              rootItemStyle={secondaryContainerItem}
              variants={variants}
              listItemStyle={listItem}
              serviceGridStyle={serviceGrid}
              services={[
                {
                  title: "Next.js",
                  icon: FlashOn,
                  link: "next-pricing",
                  descs: [
                    "Extremely Fast Performance",
                    "Fully Customizable",
                    "Low Maintenance",
                    "Easily Scaleable",
                  ],
                },
                {
                  title: "Wordpress",
                  icon: Web,
                  link: "wordpress-pricing",
                  descs: [
                    "Quick Building / Prototyping",
                    "Easy Customizability",
                    "Thousands of Plugins",
                  ],
                },
              ]}
            />
          </Grid>
          <Grid className={mainContainerItem} item>
            <ServicesContainer
              mainTitle="Apps"
              mainTitleStyle={secondaryTitle}
              rootStyle={secondaryContainer + " flipped"}
              rootItemStyle={secondaryContainerItem}
              variants={variants}
              listItemStyle={listItem}
              serviceGridStyle={serviceGrid}
              services={[
                {
                  title: "React.js",
                  icon: Code,
                  link: "react-pricing",
                  descs: [
                    "Lightning Fast Performance",
                    "Fully Customizable",
                    "Most Popular Framework (Library)",
                    "Easily Scaleable",
                  ],
                },
                {
                  title: "React Native (Mobile)",
                  icon: StayCurrentPortrait,
                  link: "react-native-pricing",
                  descs: [
                    "Specifically Mobile",
                    "Easy Prototyping",
                    "React Based",
                  ],
                },
              ]}
            />
          </Grid>
          <Grid className={mainContainerItem} item>
            <ServicesContainer
              mainTitle="Mentorship"
              mainTitleStyle={secondaryTitle}
              rootStyle={secondaryContainer}
              rootItemStyle={secondaryContainerItem}
              variants={variants}
              listItemStyle={listItem}
              serviceGridStyle={serviceGrid}
              services={[
                {
                  title: "HTML/CSS",
                  icon: School,
                  link: "mentorship-pricing",
                  descs: [
                    "The Basics Of Web Development",
                    "Getting You Comfortable",
                    "Sticks And Stones",
                  ],
                  mentorship: true,
                },
                {
                  title: "JavaScript",
                  icon: School,
                  link: "mentorship-pricing",
                  descs: [
                    "Figuring Out What's Under The Hood",
                    "JavaScript Fundamentals",
                    "Functions and Classes",
                    "ES5 and ES6 Syntax",
                    "Advanced JavaScript",
                  ],
                  mentorship: true,
                },
                {
                  title: "React",
                  icon: School,
                  link: "mentorship-pricing",
                  descs: [
                    "How JavaScript Entertwines",
                    "Getting You On Your Feet",
                    "Functional and Class-based React",
                  ],
                  mentorship: true,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
