import Link from "next/link";
import { Typography, Box, Button } from "@material-ui/core";

export default function Success() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2">Form Submission Successful!</Typography>
      <Link href="/">
        <Button variant="outlined">Go Back Home</Button>
      </Link>
    </Box>
  );
}
