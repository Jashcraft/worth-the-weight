import { Box } from "@mui/material";
import * as React from "react";
import "./home.css"

export default function HomeShows () {


  return (
    <div>
      <Box>
        <h1
        className="centered"
        style={{color: "white"}}
        >UPCOMING SHOWS</h1>
      </Box>
      <hr style={{ width: "75%" }} />
    </div>
  )
}