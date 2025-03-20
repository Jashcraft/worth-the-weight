import { Box } from "@mui/material";
import * as React from "react";
import HomeAbout from "./home-about";
import HomeMusic from "./home-music";
import HomeNews from "./home-news";
import HomeShows from "./home-shows";

export default function HomePage() {
  return (
    <div>
      <Box style={{ marginBottom: "20px" }}>
        <img
          src={require("../../images/WTW_Main_Photo.jpg")}
          width={"100%"}
          alt=""
        />
        <img
          src={require("../../images/WTW_Font_Logo.PNG")}
          width={"50%"}
          alt=""
          style={{ position: "fixed" }}
        />
      </Box>
      <hr style={{ width: "75%" }} />
      <React.Fragment>
        <HomeAbout />
        <HomeMusic />
        <HomeNews />
        <HomeShows />
      </React.Fragment>
    </div>
  );
}
