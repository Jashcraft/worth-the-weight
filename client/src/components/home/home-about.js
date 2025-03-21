import { Box } from "@mui/material";
import * as React from "react";
import "./home.css";

export default function HomeAbout() {
  return (
    <div>
      <Box>
        <h3 className="centered" style={{ color: "white" }}>
          ABOUT US
        </h3>
        <div className="centered">
          <div className="centered" style={{ color: "white", width: "75%" }}>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </Box>
      <hr style={{ width: "75%" }} />
    </div>
  );
}
