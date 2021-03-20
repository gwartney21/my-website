import { Box, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Success() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        onLoad
        animate={{ opacity: 1, y: 0 }}
      >
        <Typography variant="h2" component="h1">
          Submission Successful!
        </Typography>
      </motion.div>
    </Box>
  );
}
