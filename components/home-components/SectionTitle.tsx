import { Box, Typography, makeStyles, createStyles } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
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
  })
);

interface SectionTitleProps {
  text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  const { title } = useStyles();
  return (
    <Box overflow="hidden">
      <Typography className={title} variant="h2">
        {text}
      </Typography>
    </Box>
  );
};
