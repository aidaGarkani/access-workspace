import Typography from "@mui/material/Typography";
import React from "react";
import Navigation from "../../Navigation";
import { APaper } from "../../shared";
import { Container, Center } from "./LeftSideBarStyles";
import Button from "@mui/material/Button";

const LeftSideBar = () => {
  return (
    <Container>
      <div style={{ marginBottom: "auto" }}>
        <APaper>
          <Typography gutterBottom variant="subtitle1">
            Hi, Dan
          </Typography>
          <Typography variant="h6">Welcome to Access Workspace!</Typography>
        </APaper>
        <Navigation />
      </div>
      <APaper>
        <Typography variant="h6">Are you ready to level up?</Typography>
        <Typography variant="subtitle1">
          Visit Access Marketplace today!
        </Typography>
        <Center>
          <Button variant="contained" color="secondary">
            Take me there
          </Button>
        </Center>
      </APaper>
    </Container>
  );
};

export default LeftSideBar;
