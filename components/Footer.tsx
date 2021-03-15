import NextLink from "next/link";

import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: "1.3rem",
  },
  icons: {
    color: theme.palette.primary.contrastText,
  },
  textLinksContainer: {},
  textLinks: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Grid alignItems="center" justify="space-between" container>
          <Grid item>
            <Grid className={classes.textLinksContainer} spacing={3} container>
              <Grid className={classes.textLinks} item>
                <NextLink href="/">Home</NextLink>
              </Grid>
              <Grid className={classes.textLinks} item>
                <NextLink href="/services">Services</NextLink>
              </Grid>
              <Grid className={classes.textLinks} item>
                <NextLink href="/portfolio">Portfolio</NextLink>
              </Grid>
              <Grid className={classes.textLinks} item>
                <NextLink href="/blog">Blog</NextLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              justify="center"
              alignItems="center"
              spacing={3}
              direction="row"
              container
            >
              <Grid item>
                <Typography>
                  <Link
                    rel="noreferrer"
                    href="https://twitter.com/TheBenzend"
                    target="_blank"
                  >
                    <Twitter className={classes.icons} />
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link
                    rel="noreferrer"
                    href="https://github.com/benzend"
                    target="_blank"
                  >
                    <GitHub className={classes.icons} />
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Link
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/benjamin-scott-62a3741b1/"
                    target="_blank"
                  >
                    <LinkedIn className={classes.icons} />
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
