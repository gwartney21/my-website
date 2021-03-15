import { Grid, Container, Typography, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Project from "../Project";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "394px",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  mainTitle: {
    padding: "10rem 0",
  },
  title: {},
  tech: {
    fontSize: "1.4rem",
    color: theme.palette.primary.light,
  },
  imgContainer: {
    height: "300px",
  },
  media: {
    borderRadius: "20px",
  },
  textContainer: {
    height: "200px",
    [theme.breakpoints.down("xs")]: {
      height: "240px",
    },
  },
  desc: {
    color: "#ccc",
    padding: ".5rem 0",
  },
  links: {
    marginLeft: "-13px",
  },
  icons: {
    color: theme.palette.secondary.main,
  },
}));

const data = [
  {
    imgSource: "/images/thumbnails/full-size/language-app.png",
    imgAlt: "a website with a matching game",
    title: "Language Learning App",
    tech: "React",
    gitHubUrl: "https://github.com/benzend/language-learning-app",
    liveUrl: "https://thirsty-wright-d1d04e.netlify.app/",
    description:
      "This app was built with language learners in mind. Not fully complete but it has the basics to get started on making an language learning application.",
  },
  {
    imgSource: "/images/thumbnails/full-size/react-api.png",
    imgAlt: "an app with people and cards and a folder editor",
    title: "Person API",
    tech: "React",
    gitHubUrl: "https://github.com/benzend/react-api-handler",
    liveUrl: "https://serene-kirch-b5fcfb.netlify.app/",
    description:
      "This was created with the thought of getting very comfortable with using React and handling state with immense ease. You can add a person to a file, add people to the main 'list' and create/edit/destroy folders as you please.",
  },
  {
    imgSource: "/images/thumbnails/full-size/react-calculator.png",
    imgAlt: "a calculator made with react and typescript",
    title: "React Calculator",
    tech: "React",
    gitHubUrl: "https://github.com/benzend/react-typescript-calculator",
    liveUrl: "https://quirky-kalam-6dc848.netlify.app/",
    description:
      "A calculator designed to improve complex logic though processes, moreof an excercize for my brain. To be honest, wasn't that hard other than it being my first TypeScript + React project.",
  },
  {
    imgSource: "/images/thumbnails/full-size/todo-list.png",
    imgAlt: "a todo list",
    title: "To-do List",
    tech: "React",
    gitHubUrl: "https://github.com/benzend/todo-application",
    liveUrl: "https://quizzical-edison-93c715.netlify.app/",
    description:
      "To-do lists are super easy in React, I just had to have one in my projects.",
  },
  {
    imgSource:
      "/images/thumbnails/full-size/tracker - Google Chrome 1_6_2021 11_02_57 AM.png",
    imgAlt: "Timer based on Trello",
    title: "Organizational Timer",
    tech: "Vue",
    gitHubUrl: "https://github.com/Zallyy/Tracker-App",
    liveUrl: "https://trackerstats.netlify.app/",
    description:
      "An app designed around a combination of Trello and Pomofocus. Built with another developer, we stole organization properties of Trello and combined them with the timing proponents of Pomofocus.",
  },
  {
    imgSource: "/images/thumbnails/full-size/TicTacToe-example.png",
    imgAlt: "tic-tac-toe project example",
    title: "Tic Tac Toe",
    tech: "Vanilla JS",
    gitHubUrl: "https://github.com/benzend/tic-tac-toe",
    liveUrl: "https://benzend.github.io/tic-tac-toe/",
    description:
      "My very first projects dealing with JavaScript! I have refactored the code over time but I saved the old code in seperate files.",
  },
  {
    imgSource: "/images/thumbnails/full-size/Accounting-Website-example.png",
    imgAlt: "a website design for accountants",
    title: "Accounting Website",
    tech: "JQuery",
    gitHubUrl: "https://github.com/benzend/accounting-website",
    liveUrl: "https://benzend.github.io/accounting-website/",
    description:
      "A simple single page website focused on checking out JQuery and buiding simple animations with a clean design.",
  },
  {
    imgSource: "/images/thumbnails/full-size/pomodoro-timer.png",
    imgAlt: "a pomodoro timer with background and buttons",
    title: "Pomodoro Timer",
    tech: "Vanilla JS",
    gitHubUrl: "https://github.com/benzend/pomodoro-timer",
    liveUrl: "https://benzend.github.io/pomodoro-timer/",
    description:
      "This project was made as a test of sorts. Me and another developer raced each other and whover had the best design and better features won.",
  },
  {
    imgSource: "/images/thumbnails/full-size/JumpStart-example.png",
    imgAlt: "a website labeled jumpstart with design",
    title: "JumpStart Website",
    tech: "Vanilla JS",
    gitHubUrl: "https://github.com/benzend/jumpstart-website",
    liveUrl: "https://benzend.github.io/jumpstart-website/",
    description:
      "My very first large website. Running on basic JavaScript this tank is a four page beast. Moreorless, this was another design expiriment.",
  },
  {
    imgSource: "/images/thumbnails/full-size/Mini-RPG-Game-example.png",
    imgAlt: "there are CUBES EVERYWHERE",
    title: "Mini Game",
    tech: "Vanilla JS",
    gitHubUrl: "https://github.com/benzend/small-rpg-game",
    liveUrl: "https://benzend.github.io/small-rpg-game/",
    description:
      "A mini-game that dealt with classes in JavaScript. The hardest part was making mathmatical checking for hitboxes for firing, yourself, and enemies.",
  },
  {
    imgSource:
      "/images/thumbnails/full-size/Portfolio - Google Chrome 10_29_2020 6_19_52 PM.png",
    imgAlt: "Ben's other portfolio example",
    title: "An Old Portfolio",
    tech: "Vanilla JS",
    gitHubUrl: "https://github.com/benzend/creative-portfolio",
    liveUrl: "https://benzend.github.io/creative-portfolio/",
    description:
      "I sought through this portfolio with a completely 'non-standard' powerpoint feel to it. I focused primarily on design and animations.",
  },
];

interface Props {
  animate: boolean;
  variants: any;
}

export default function PortfolioProjectsSection({ animate, variants }: Props) {
  const [projects, setProjects] = useState<any>([]);
  useEffect(() => {
    setProjects(data);
  }, []);

  const classes = useStyles();
  return (
    <>
      <Container id="projects" maxWidth="lg">
        <motion.div
          variants={variants}
          animate={animate ? "visibleByY" : "yBottomHidden"}
        >
          <Typography
            className={classes.mainTitle + " white txt-center"}
            variant="h2"
          >
            Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={variants}
          animate={animate ? "xVisibleGrid" : "xLeftHidden"}
        >
          <Grid spacing={3} alignItems="center" justify="center" container>
            {projects.map((project) => (
              <Grid key={project.title} item>
                <motion.div variants={variants}>
                  <Project
                    key={project.title}
                    imgSource={project.imgSource}
                    imgAlt={project.imgAlt}
                    title={project.title}
                    tech={project.tech}
                    gitHubUrl={project.gitHubUrl}
                    liveUrl={project.liveUrl}
                    description={project.description}
                    classes={classes}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </>
  );
}
