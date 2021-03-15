import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.21) 0.01%, rgba(255, 255, 255, 0.0130718) 0.02%, rgba(255, 255, 255, 0.174275) 77.91%, rgba(255, 255, 255, 0.193594) 100%), #000000",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: -10,
  },
  container: {
    position: "relative",
    width: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svgContainer: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      transform: "translateX(80px)",
    },
  },
  svg1: {
    position: "absolute",
    width: "144.05px",
    height: "138.71px",
    left: " 300px",
    top: "200px",
  },
  svg2: {
    /* Ellipse 7 */

    position: "absolute",
    width: "85.15px",
    height: "82px",
    left: "246px",
    top: "300px",
  },
  svg3: {
    /* Ellipse 6 */

    position: "absolute",
    width: "67px",
    height: "67px",
    left: "60px",
    top: "290px",
  },
  svg4: {
    /* Ellipse 9 */

    position: "absolute",
    width: "100.4px",
    height: "88.66px",
    left: "-20px",
    top: "210px",
  },
  svg5: {
    /* Ellipse 5 */

    position: "absolute",
    width: "124px",
    height: "117px",
    left: "-30px",
    top: "80px",
  },
  svg6: {
    /* Ellipse 4 */

    position: "absolute",
    width: "225px",
    height: "225px",
    left: "280px",
    top: "80px",
  },
}));

export const HomeBackground = () => {
  const {
    root,
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    svg6,
    svgContainer,
    container,
  } = useStyles();
  return (
    <>
      <Box className={root}></Box>
    </>
  );
};
