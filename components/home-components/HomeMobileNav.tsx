import Link from "next/link";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Home, Work, ContactMail, Info, Build } from "@material-ui/icons";
import { motion } from "framer-motion";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    position: "fixed",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  invisibleButton: {
    border: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    background: "none",
    outline: "none",
  },
}));

interface IHomeNavProps {
  drawerOpenHandler: () => void;
  drawerCloseHandler: () => void;
  open: boolean;
}

export const HomeMobileNav = ({
  drawerCloseHandler,
  drawerOpenHandler,
  open,
}: IHomeNavProps) => {
  const {
    root,
    appBar,
    appBarShift,
    menuButton,
    hide,
    drawer,
    drawerPaper,
    drawerHeader,
    invisibleButton,
  } = useStyles();
  const theme = useTheme();

  return (
    <div className={root}>
      <motion.div
        style={{ width: "100vw" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <CssBaseline />
        <AppBar
          className={clsx(appBar, {
            [appBarShift]: open,
          })}
          color="secondary"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={drawerOpenHandler}
              edge="start"
              className={clsx(menuButton, open && hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: drawerPaper,
          }}
        >
          <div className={drawerHeader}>
            <IconButton onClick={drawerCloseHandler}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <button onClick={drawerCloseHandler} className={invisibleButton}>
              <Link href="/">
                <ListItem>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
            </button>
          </List>
          <Divider />
          <List>
            <button onClick={drawerCloseHandler} className={invisibleButton}>
              <Link href="/#services">
                <ListItem>
                  <ListItemIcon>
                    <Build />
                  </ListItemIcon>
                  <ListItemText primary={"Services"} />
                </ListItem>
              </Link>
            </button>
          </List>
          <Divider />
          <List>
            <button onClick={drawerCloseHandler} className={invisibleButton}>
              <Link href="/portfolio">
                <ListItem>
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText primary={"Portfolio"} />
                </ListItem>
              </Link>
            </button>
          </List>
          <Divider />
          <List>
            <button onClick={drawerCloseHandler} className={invisibleButton}>
              <Link href="/portfolio#contact">
                <ListItem>
                  <ListItemIcon>
                    <ContactMail />
                  </ListItemIcon>
                  <ListItemText primary={"Contact"} />
                </ListItem>
              </Link>
            </button>
          </List>
          <Divider />
          <List>
            <button onClick={drawerCloseHandler} className={invisibleButton}>
              <Link href="/blog">
                <ListItem>
                  <ListItemIcon>
                    <Info />
                  </ListItemIcon>
                  <ListItemText primary={"Blog"} />
                </ListItem>
              </Link>
            </button>
          </List>
        </Drawer>
      </motion.div>
    </div>
  );
};
