import Image from "next/image";
import { GitHub, Language } from "@material-ui/icons";
import { IconButton, Box, Typography } from "@material-ui/core";

interface Props {
  imgSource: string;
  title: string;
  imgAlt: string;
  tech: string;
  gitHubUrl: string;
  liveUrl: string;
  description: string;
  classes: any;
}

export default function Project({
  imgSource,
  title,
  imgAlt,
  tech,
  gitHubUrl,
  liveUrl,
  description,
  classes,
}: Props) {
  return (
    <Box className={classes.root}>
      <Box className={classes.imgContainer}>
        <Image
          width={394}
          height={240}
          className={classes.media}
          src={imgSource}
          alt={imgAlt}
        />
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.title + " white"} variant="h4">
          {title}
        </Typography>
        <Typography className={classes.tech} variant="h4" component="h5">
          {tech}
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {description}
        </Typography>
      </Box>
      <Box className={classes.links}>
        <a href={liveUrl}>
          <IconButton>
            <Language className={classes.icons} />
          </IconButton>
        </a>
        <a href={gitHubUrl}>
          <IconButton>
            <GitHub className={classes.icons} />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
}
