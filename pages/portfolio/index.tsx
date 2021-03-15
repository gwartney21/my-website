import { useEffect, useState } from "react";
import { makeStyles, useMediaQuery, Box } from "@material-ui/core";
import { useViewportScroll } from "framer-motion";
import BackgroundEarth from "../../components/BackgroundEarth";
import Header from "../../components/portfolio-components/PortfolioHeader";
import Projects from "../../components/portfolio-components/PortfolioProjectsSection";
import About from "../../components/portfolio-components/PortfolioAboutSection";
import Contact from "../../components/portfolio-components/PortfolioContactSection";
import Footer from "../../components/portfolio-components/PortfolioFooter";
import { variants } from "../../utils/variants";
import { HomeDesktopNav } from "../../components/home-components/HomeDesktopNav";
import { HomeMobileNav } from "../../components/home-components/HomeMobileNav";

const useStyles = makeStyles({
  bg: {
    height: "300vh",
    background: "#00000600",
    zIndex: -3000000,
  },
});

export default function Portfolio() {
  const { scrollY } = useViewportScroll();

  const mobile = useMediaQuery("(max-width:400px)");

  const pixels550 = useMediaQuery("(max-width:550px)");

  const classes = useStyles();

  const [animateProjects, setAnimateProjects] = useState<boolean>();

  const [animateAbout, setAnimateAbout] = useState<boolean>();

  const [animateContact, setAnimateContact] = useState<boolean>();

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function updateVisibilty() {
      let projectsReady: boolean = false;
      let aboutReady: boolean = false;
      let contactReady: boolean = false;
      if (mobile) {
        projectsReady = scrollY.get() > 500;
        aboutReady = scrollY.get() > 7800;
        contactReady = scrollY.get() > 9700;
      } else if (pixels550) {
        projectsReady = scrollY.get() > 500;
        aboutReady = scrollY.get() > 7800;
        contactReady = scrollY.get() > 9100;
      } else {
        projectsReady = scrollY.get() > 500;
        aboutReady = scrollY.get() > 3000;
        contactReady = scrollY.get() > 4600;
      }
      setAnimateProjects(projectsReady);
      setAnimateAbout(aboutReady);
      setAnimateContact(contactReady);
    }

    const unsubscribeY = scrollY.onChange(updateVisibilty);

    return () => {
      unsubscribeY();
    };
  }, []);

  const drawerOpenHandler = () => {
    setDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  const current = "portfolio";

  return (
    <Box className={classes.bg}>
      <BackgroundEarth animate={scrollY.get()} />

      {pixels550 ? (
        <HomeMobileNav
          open={drawerOpen}
          drawerOpenHandler={drawerOpenHandler}
          drawerCloseHandler={drawerCloseHandler}
        />
      ) : (
        <HomeDesktopNav current={current} />
      )}

      <Header />

      <Projects animate={animateProjects} variants={variants} />

      <About animate={animateAbout} variants={variants} />

      <Contact animate={animateContact} variants={variants} />

      <Footer />
    </Box>
  );
}
