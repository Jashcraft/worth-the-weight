import { Box, Typography } from "@mui/material";
import * as React from "react";


export default function HomePage() {
  return (
    <div>
      <Box>
      <img
        src={require("../images/WTW_Main_Photo.jpg")}
        width={"100%"}
        alt=""
      />
      </Box>
      <Typography>
        A BUNCH OF STUFF
      </Typography>
    </div>
  );
}
