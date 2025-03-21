import { Box, Card, Divider, Grid2, Stack } from "@mui/material";
import * as React from "react";
import "./home.css";

export default function HomeMusic() {
  return (
    <div>
      <Box>
        <h3 className="centered" style={{ color: "white" }}>
          HEAR OUR MUSIC
        </h3>
        <Box className="centered">
          <Grid2 container spacing={2} sx={{width:"75%"}}>
            <Grid2 size={{s: 12, md: 4}}>
              <Card >
                <iframe
                  src="https://www.youtube.com/embed/nOmdvVXOnhw?si=9DAIPYNVVuiCY00-"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  height={"auto"}
                ></iframe>
              </Card>
            </Grid2>
            <Grid2 size={{s: 12, md: 4}}>
              <Card >
                <iframe
                  src="https://www.youtube.com/embed/NQFbxpH8pEE?si=az3f17K0z8uFR5gN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  height={"auto"}
                ></iframe>
              </Card>
            </Grid2>
            <Grid2 size={{s: 12, md: 4}}>
              <Card >
                <iframe
                  src="https://www.youtube.com/embed/sXhlzyeR06Q?si=vnyA8CTayK9Lnti7"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  height={"auto"}
                ></iframe>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <hr style={{ width: "75%" }} />
    </div>
  );
}
