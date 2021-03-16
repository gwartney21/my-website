import Link from "next/link";
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    overflow: "hidden",
  },
  links: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function PortfolioNav() {
  const { root, links } = useStyles();
  return (
    <Box className={root} zIndex={10}>
      <Grid container>
        <Grid item>
          <Box tabIndex={0} className={links}>
            <Link href="/portfolio">Home</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="#projects">Projects</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="#about">About</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="#contact">Contact</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="/">Home</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="/services">Services</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={links}>
            <Link href="/blog">Blog</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
