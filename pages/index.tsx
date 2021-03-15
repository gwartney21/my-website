import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import HomeHeader from "../components/home-components/HomeHeader";
import { HomeMobileNav } from "../components/home-components/HomeMobileNav";
import { HomeServices } from "../components/home-components/HomeServices";
import { variants } from "../utils/variants";
import Footer from "../components/Footer";
import { HomeBackground } from "../components/home-components/HomeBackground";
import { HomeDesktopNav } from "../components/home-components/HomeDesktopNav";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const desktop = useMediaQuery("(min-width:1000px)");

  const drawerOpenHandler = () => {
    setDrawerOpen(true);
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  const current = "home";

  return (
    <>
      <HomeBackground />
      {desktop ? (
        <HomeDesktopNav current={current} />
      ) : (
        <HomeMobileNav
          open={drawerOpen}
          drawerOpenHandler={drawerOpenHandler}
          drawerCloseHandler={drawerCloseHandler}
        />
      )}
      <HomeHeader />
      <HomeServices variants={variants} />
      <Footer />
    </>
  );
}
